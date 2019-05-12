module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Couple of Titans`,
    siteUrl: `https://www.coupleoftitans.com`,
    description: `Two titanium bikes, no clue.`,
    author: `@gatsbyjs`,
    image: `src/images/CoT.png`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: true,
              quality: 90,
              linkImagesToOriginal: false,
              wrapperStyle: `margin: 3em 0`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-48474634-8`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Goneriding`,
        short_name: `Goneriding`,
        start_url: `.`,
        background_color: `#4E4E4E`,
        theme_color: `#4E4E4E`,
        display: `standalone`,
        icon: `src/images/CoT.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
