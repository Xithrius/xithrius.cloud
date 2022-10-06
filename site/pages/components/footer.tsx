import {
  SiGitea,
  SiGithub,
  SiTwitch,
  SiYoutube,
  SiTwitter,
} from "react-icons/si";
import LinkItem from "./links";

const items = [
  { key: "https://github.com/Xithrius", item: <SiGithub /> },
  { key: "https://git.xithrius.cloud/", item: <SiGitea /> },
  { key: "https://twitch.tv/Xithrius", item: <SiTwitch /> },
  { key: "https://tinyy.io/0YYSUgPn", item: <SiYoutube /> },
  { key: "https://twitter.com/Xithrius", item: <SiTwitter /> },
];

const Footer = () => (
  <div className="absolute inset-x-0 bottom-0 h-24 w-full border-t border-current">
    <div className="mt-8 flex items-center justify-center">
      {items.map(({ key, item }) => (
        <LinkItem
          key={key}
          href={key}
          item={item}
          tailwind="hover:-translate-y-1 scale-[2] mx-5"
        />
      ))}
    </div>
  </div>
);

export default Footer;
