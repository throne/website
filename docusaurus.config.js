const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'throne',
  tagline: 'Watch from up on your throne.',
  url: 'https://www.throne.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/throne-gold-black-icon.png',
  organizationName: 'throne', // Usually your GitHub org/user name.
  projectName: 'throne', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'throne logo',
          src: 'img/throne-logo-vector.svg',
          srcDark: 'img/throne-gold-white-icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/throne',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'Github Organization',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        logo: {
          alt: "throne logo",
          src: 'img/throne-logo-50x50-gold-white.png',
          href: 'https://www.throne.dev'
        },
        copyright: `Copyright © ${new Date().getFullYear()} throne. Website licensed under the MIT License. Made with ❤️ and Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
