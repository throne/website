const githubURL = "https://github.com/throne/throne-cli";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Throne',
  tagline: 'Watch from up on your throne.',
  url: 'https://www.throne.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/throne-gold-black-icon.png',
  organizationName: 'throne', // Usually your GitHub org/user name.
  projectName: 'throne-cli', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Throne Logo',
        src: 'img/throne-logo-vector.svg',
        srcDark: 'img/throne-gold-white-icon.png',
        href: 'https://www.throne.dev/',
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
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Throne.  Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
