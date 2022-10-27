import { SiGitea, SiGithub, SiTwitch, SiYoutube, SiTwitter } from "react-icons/si";
import LinkElem from "./links";

const items = [
  { href: "https://github.com/Xithrius", elem: <SiGithub /> },
  { href: "https://git.xithrius.cloud/", elem: <SiGitea /> },
  { href: "https://twitch.tv/Xithrius", elem: <SiTwitch /> },
  { href: "https://www.youtube.com/@Xithrius", elem: <SiYoutube /> },
  { href: "https://twitter.com/Xithrius", elem: <SiTwitter /> },
];

const Footer = () => (
  <div className="absolute inset-x-0 bottom-0 h-24 w-full border-t border-current">
    <div className="mt-8 flex items-center justify-center">
      {items.map((item) => (
        <div key={item.href} className="mx-5 scale-[2] hover:-translate-y-1">
          <LinkElem {...item} />
        </div>
      ))}
    </div>
  </div>
);

export default Footer;
