import Head from "next/head";
import LinkElem from "lib/components/links";
import ThemeSwitch from "lib/components/themeswitch";
import { SiGithub } from "react-icons/si";
import Container from "lib/components/container";
import { utcToZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";
import TopLeftNavigation from "lib/components/top-left-nav";
import Image from "next/image";

const sitePages = ["Projects", "ToDo", "Blog", "Start"];

const formatDateTime = (dateTime: Date) => {
  const arr = [dateTime.getHours(), dateTime.getMinutes(), dateTime.getSeconds()];

  return arr
    .map((e) => {
      const item = e.toString();
      return item.length == 1 ? `0${item}` : item;
    })
    .join(":");
};

const TimezonedDate = () => {
  const newZonedDateTime = () => {
    return utcToZonedTime(new Date(), "America/Los_Angeles");
  };

  const [dateTime, setDateTime] = useState(newZonedDateTime());

  useEffect(() => {
    const func = setTimeout(() => {
      setDateTime(newZonedDateTime());
    }, 1000);

    return () => clearInterval(func);
  }, [dateTime]);

  return (
    <div>
      {`${dateTime.toDateString()} ${formatDateTime(dateTime)} UTC - ${
        dateTime.getTimezoneOffset() / 60
      }`}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Container>
        <main className="flex flex-1 flex-col items-center justify-center text-center -mt-20">
          <Image src="/user_icon.svg" alt="Xithrius" width={512} height={512} />
          <div className="flex w-3/5 justify-center border-t border-solid border-current text-[1.3vw] -mt-20 py-5">
            {sitePages.map((element) => (
              <LinkElem
                key={element}
                href={`/${element.toLowerCase()}`}
                elem={element}
                className="mx-5 hover:-translate-y-1"
              />
            ))}
            <ThemeSwitch />
          </div>
        </main>
      </Container>
      <ThemeSwitch />
      <TopLeftNavigation href="https://github.com/Xithrius">
        <SiGithub />
      </TopLeftNavigation>
      <div className="absolute left-8 bottom-8 flex justify-center">
        <TimezonedDate />
      </div>
    </>
  );
}
