import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "xithrius.cloud",
  DESCRIPTION: "Portfolio website",
  AUTHOR: "Xithrius",
};

export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "",
};

export const SHOWCASE: Page = {
  TITLE: "Showcase",
  DESCRIPTION: "",
};

export const TODO: Page = {
  TITLE: "TODO",
  DESCRIPTION: "",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Showcase",
    HREF: "/showcase",
  },
  {
    TEXT: "TODO",
    HREF: "/todo",
  },
];

export const SOCIALS: Socials = [
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "Xithrius",
    HREF: "https://github.com/Xithrius",
  },
];
