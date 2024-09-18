// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "Docusaurus",
    image: "https://docusaurus.io/img/docusaurus.svg",
    infoLink: "https://docusaurus.io/",
    pinned: true,
  },
];

const setupDoc = "docs/basic/setup";

module.exports = {
  favicon: "img/icon.png",
  title: "Ntech Developers Documents", // Title for your website.
  tagline:
    "Documents for experienced developers getting started",
  url: "https://ntechdevelopers.netlify.app/", // Your website URL
  baseUrl: "/",
  projectName: "react-typescript-cheatsheet",
  organizationName: "typescript-cheatsheets",

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        docs: {
          // Docs folder path relative to website dir.
          path: "../docs",
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve("./sidebars.json"),
          editUrl:
            "https://github.com/typescript-cheatsheets/react/tree/main/docs",
        },
        // ...
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },

    image:
      "https://user-images.githubusercontent.com/6764957/53868378-2b51fc80-3fb3-11e9-9cee-0277efe8a927.png",

    // Equivalent to `docsSideNavCollapsible`.
    // sidebarCollapsible: false,

    prism: {
      defaultLanguage: "typescript",
    },

    navbar: {
      title: "Ntech Developers Documents",
      logo: {
        alt: "Logo",
        src: "img/icon.png",
      },
      items: [
        {
          to: setupDoc,
          label: "Docs",
          position: "right",
        },
        {
          to: "help",
          label: "Help",
          position: "right",
        },
        // {to: 'blog', label: 'Blog', position: 'right'},
      ],
    },

    footer: {
      style: "dark",
      logo: {
        alt: "Ntech Developers Logo",
        src: "img/icon.png",
        // maxWidth: 128,
        // style: { maxWidth: 128, maxHeight: 128 },
      },
      copyright: `Copyright © ${new Date().getFullYear()} Ntech Developers`,
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: setupDoc,
            },
            {
              label: "High Order Component (HOC)",
              to: "docs/hoc",
            },
            {
              label: "Advanced Guides",
              to: "docs/advanced",
            },
            {
              label: "Migrating",
              to: "docs/migration",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/typescript",
            },
            {
              label: "User Showcase",
              to: "users",
            },
            {
              label: "Help",
              to: "help",
            },
            {
              label: "Contributors",
              to: "contributors",
            },
            {
              label: "Contributing",
              to: "contributing",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ntechdevelopers-com/documents",
            },
            {
              html: `<a class="footer__link-item" href="https://github.com/ntechdevelopers-com/documents">
                <img src="https://camo.githubusercontent.com/f00e074779455222f68fde1096fbbd91bae555c2/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f747970657363726970742d63686561747368656574732f72656163742d747970657363726970742d636865617473686565742e7376673f7374796c653d736f6369616c266c6162656c3d53746172266d61784167653d32353932303030" alt="GitHub stars" data-canonical-src="https://img.shields.io/github/stars/typescript-cheatsheets/react-typescript-cheatsheet.svg?style=social&amp;label=Star&amp;maxAge=2592000" style="max-width:100%;">
                </a>`,
            }
          ],
        },
      ],
    },

    algolia: {
      apiKey: "9a22585d1841d2fa758da919cd08a764",
      indexName: "ntech-developers-documents",
      appId: "J65EL4UPXZ",
      algoliaOptions: {
        //... },
      },
    },
  },

  customFields: {
    firstDoc: setupDoc,

    // TODO useless user showcase page ?
    users,
    addUserUrl:
      "https://github.com/ntechdevelopers-com/documents/blob/main/website/docusaurus.config.js",
  },
};
