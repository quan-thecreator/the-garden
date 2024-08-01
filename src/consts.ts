import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "The Garden",
  DESCRIPTION: "A manuscript of the disorganized thoughts of Mars Ultor.",
  EMAIL: "marsultor_carnifex@ayyalasomayajula.net.",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "The Garden is where some of the more well assembled of my thoughs congregate.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Musings of a sleep deprived mind.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/boogerbuttcheeks",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/trevortylerlee",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/trevortylerlee",
  },
];
