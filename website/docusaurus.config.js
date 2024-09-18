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
  title: "Ntech Developers Notebooks", // Title for your website.
  tagline:
    "Notebooks for experienced developers getting started",
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
      "https://avatars.githubusercontent.com/u/15828583?v=4",

    // Equivalent to `docsSideNavCollapsible`.
    // sidebarCollapsible: false,

    prism: {
      defaultLanguage: "typescript",
    },

    navbar: {
      title: "Ntech Developers Notebooks",
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
              label: "Fanpage",
              href: "https://www.facebook.com/ntechdevelopers",
            },
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/groups/13090082",
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
              href: "https://github.com/ntechdevelopers-com/Notebooks",
            }
          ],
        },
      ],
    },

    algolia: {
      apiKey: "9a22585d1841d2fa758da919cd08a764",
      indexName: "ntech-developers-Notebooks",
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
      "https://github.com/ntechdevelopers-com/Notebooks/blob/main/website/docusaurus.config.js",
  },
};
