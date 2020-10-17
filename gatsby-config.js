module.exports = {
  siteMetadata: {
    title: `i.log ✨`,
    description: `기록하는 습관 📝`,
    author: `Inkyung`,
    email : ``,
    siteUrl : `https://6unhkui.github.io`,
    social : {
      github : `https://github.com/6unhkui`,
      linkedin : `inkyung`
    },
    keywords : ['Java', 'Spring Framework', 'Javascript', 'React', 'Web Developer'],
    menuLinks:[
      {
        name:`CS`,
        link:`/cs`,
      },
      {
        name:`Programming`,
        link:`/programming`
      },
      {
        name:`DevOps`,
        link:`/devops`
      },
      {
        name:`ETC`,
        link:`/etc`
      },
      {
        name:`Project`,
        link:`/project`
      },
      {
        name:`TAGS`,
        link:`/tags`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-typescript`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `i.log`,
        start_url: `/`,
        background_color: `#7b22ec`,
        theme_color: `#7b22ec`,
        display: `minimal-ui`,
        icon: `static/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-remark-code-titles`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
            {
              resolve: 'gatsby-remark-code-titles'
            },
            'gatsby-remark-a11y-emoji',
            `gatsby-remark-numbered-footnotes`,
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                classPrefix: "language-",
                inlineCodeMarker: null,
                aliases: {},
                noInlineHighlight: false,
                showLineNumbers: false,
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
            },      {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                className: `anchor-header`,
                maintainCase: false,
                removeAccents: true,
                elements: [`h1`, `h2`, 'h3', `h4`], 
              }
            },
            {
              resolve: "gatsby-remark-external-links",
              options: {
                target: "_blank",
                rel: "noreferrer"
              }
            }
          ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'IBM Plex Mono', 'Roboto Mono', 'Noto Sans KR', 'Blinker', 'Inter', 'Pacifico']
        }
      }
    },
    `gatsby-plugin-slug`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-dark-mode'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
