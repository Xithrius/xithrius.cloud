const siteMetadata = {
  title: `Guides - xithrius.cloud`,
  description: `A bunch of guides on useful stuff.`,
  image: `public/logo.png`,
  siteUrl: `https://guides.xithrius.cloud`,
  siteLanguage: `en-us`,
  siteLocale: `en_us`,
  authorName: `Xithrius`,
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/guides`, name: `guides` },
    },
  ],
};
