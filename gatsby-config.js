module.exports = {
  siteMetadata: {
    title: `South Bay MUN`,
    description: `A conference for all delegates!`,
    author: `@thecodingwizard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `south-bay-mun`,
        short_name: `SBMUN`,
        start_url: `/`,
        background_color: `#6B46C1`,
        theme_color: `#6B46C1`,
        display: `minimal-ui`,
        // icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: ["/src/components/Layout.css"],
      }
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    },
    "gatsby-plugin-netlify-cache",
  ],
}
