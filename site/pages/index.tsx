import Head from "next/head";
import LinkElem from "lib/components/links";
import ThemeSwitch from "lib/components/themeswitch";
import { SiGithub } from "react-icons/si";
import Container from "lib/components/container";
import { utcToZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";
import TopLeftNavigation from "lib/components/top-left-nav";
import Stamp from "lib/components/stamp";
// import Image from "next/image";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const func = setTimeout(() => {
      setDateTime(newZonedDateTime());
    }, 1000);

    return () => clearInterval(func);
  }, [dateTime]);

  if (!mounted) {
    return null;
  }

  return <div>{`${dateTime.toDateString()} ${formatDateTime(dateTime)} UTC-8`}</div>;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Container>
        <main className="my-24 flex flex-1 flex-col items-center justify-center text-center">
          <div className="text-[10vw]">
            <Stamp />
          </div>

          <div className="flex w-3/5 justify-center border-t border-solid border-current py-5 text-xl">
            {sitePages.map((element) => (
              <LinkElem
                key={element}
                href={`/${element.toLowerCase()}`}
                elem={element}
                className="mx-5 opacity-50 transition hover:opacity-100"
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
      <div className="absolute bottom-8 left-8 flex justify-center">
        <TimezonedDate />
      </div>
    </>
  );
}
