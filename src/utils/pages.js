export const Pages = {
  home: {
    title: "ResBuild | Home",
    content: "Home",
    path: "/",
    menu: "Home",
    // headerType: 'dashboard',
  },
  builder: {
    title: "ResBuild | Builder",
    content: "Resume Builder",
    path: "/builder",
    menu: "Builder",
    //   headerType: 'none',
  },
  resume: {
    title: "ResBuild | Resume",
    content: "View Resume",
    path: "/resume",
    menu: "Resume",
    //   headerType: 'none',
  },
};

export const Paths = {
  "/": Pages.home,
  "/builder": Pages.builder,
  "/resume": Pages.resume,
};
