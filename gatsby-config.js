module.exports = {
  siteMetadata: {
    title: `Eliseo Martelli`,
    description: ``,
    author: `@eliseomartelli`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/_posts`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: "100",
            },
          },
          "gatsby-remark-prismjs",
          {
            resolve: "gatsby-remark-images-anywhere",
            options: { backgroundColor: "#00000000" },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: { pathToConfigModule: "src/utils/typography" },
    },
  ],
}
