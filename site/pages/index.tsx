import Head from "next/head";
import LinkElem from "lib/components/links";
import ThemeSwitch from "lib/components/themeswitch";
import { SiGithub } from "react-icons/si";
import Container from "lib/components/container";
import { utcToZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";
import TopLeftNavigation from "lib/components/top-left-nav";

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
      <div>{dateTime.toDateString()}</div>
      <div>{formatDateTime(dateTime)}</div>
      <div>UTC - {dateTime.getTimezoneOffset() / 60}</div>
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
        <div className="font-['Turret_Road'] text-[10vw]">Xithrius</div>
        <div className="border-t border-b border-current py-5">
          <TimezonedDate />
        </div>
        <div className="mt-4 flex w-3/5 py-5 font-['Montserrat']">
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
      </Container>
      <ThemeSwitch />
      <TopLeftNavigation href="https://github.com/Xithrius">
        <SiGithub />
      </TopLeftNavigation>
    </>
  );
}
