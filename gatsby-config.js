module.exports = {
  siteMetadata: {
    title: `dev.log`,
    description: `기록하는 습관 📝`,
    author: `Inkyung`,
    email : ``,
    social : {
      github : `https://github.com/6unhkui`,
      linkedin : `inkyung`
    },
    menuLinks:[
      {
        name:`Home`,
        link:`/`
      },
      {
        name:`Dev`,
        link:`/dev`
      },
      {
        name:`Project`,
        link:`/project`
      },
      {
        name:`Tags`,
        link:`/tags`
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#dba61a`,
        theme_color: `#dba61a`,
        display: `minimal-ui`,
        icon: `static/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-antd',
    `gatsby-plugin-styled-components`,
    `gatsby-remark-code-titles`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                classPrefix: "language-",
                inlineCodeMarker: null,
                aliases: {},
                noInlineHighlight: false
              }
            },
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 800,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            {
              resolve: "gatsby-remark-custom-blocks",
                options: {
                  blocks: {
                    danger: {
                      classes: "danger",
                    },
                   info: {
                    classes: "info",
                    title: "optional",
                  },
                },
              },
            }
          ],

      },
    },
    `gatsby-plugin-slug`,
    `gatsby-plugin-sass`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
