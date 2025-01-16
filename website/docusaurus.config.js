// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "Docusaurus",
    image: "https://docusaurus.io/img/docusaurus.svg",
    infoLink: "https://docusaurus.io/",
    pinned: true,
  },
];

const basicDoc = "docs/basic/overview";
const advancedDoc = "docs/advanced/overview";

module.exports = {
  favicon: "img/icon.png",
  title: "Ntech Developers Notebooks", // Title for your website.
  tagline:
    "Notebooks for experienced developers getting started",
  url: "https://ntechdevelopers.netlify.app/", // Your website URL
  baseUrl: "/",
  projectName: "ntech-developers-documents",
  organizationName: "ntech-developers",

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
            "https://github.com/ntechdevelopers-com/documents/tree/main/docs",
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
          to: basicDoc,
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
              to: basicDoc,
            }
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
              label: "GitHub",
              href: "https://github.com/ntechdevelopers-com/documents",
            }
          ],
        },
        {
          title: "More",
          items: [
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
      ],
    },

    algolia: {
      apiKey: "9a22585d1841d2fa758da919cd08a764",
      indexName: "ntech-developers-notebooks",
      appId: "J65EL4UPXZ",
      algoliaOptions: {
        //... },
      },
    },
  },

  customFields: {
    firstDoc: basicDoc,

    // TODO useless user showcase page ?
    users,
    addUserUrl:
      "https://github.com/ntechdevelopers-com/documents/blob/main/website/docusaurus.config.js",
  },
};
