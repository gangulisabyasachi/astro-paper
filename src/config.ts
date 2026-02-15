export const SITE = {
  website: "https:/blogs.prithwishganguli.in/", // replace this with your deployed domain
  author: "Prithwish Ganguli",
  profile: "https://satnaing.dev/",
  desc: "Prithwish Ganguli Legal Blog offers clear, practical insights on Indian law including criminal law, cyber law, consumer rights, FIR, bail, digital evidence, and legal procedures, with a focus on Kolkata and current legal developments.",
  title: "Prithwish Ganguli",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/gangulisabyasachi/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
