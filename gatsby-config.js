module.exports = {
  siteMetadata: {
    title: `i.log`,
    description: `기록하는 습관 📝`,
    author: `Inkyung`,
    email : ``,
    siteUrl : `https://suspicious-lichterman-f1b575.netlify.app`,
    social : {
      github : `https://github.com/6unhkui`,
      linkedin : `inkyung`
    },
    keywords : ['Java', 'React', 'Spring Framework', 'Web Developer'],
    menuLinks:[
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
        short_name: `i.log`,
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
                noInlineHighlight: false,
                showLineNumbers: true,
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
                className: `anchor-header`, // 이 class명으로 하이라이트 코드를 구현할 예정이므로 반드시 넣자.
                maintainCase: false, // 이 부분은 반드시 false로 하자. url이 대소문자를 구분하기 때문에 링크가 작동하지 않을 수 있다.
                removeAccents: true,
                elements: [`h1`, `h2`, 'h3', `h4`], // 링크를 추가할 Header 종류 선택
              }
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'IBM Plex Mono', 'Roboto Mono', 'Noto Sans KR', 'Blinker', 'Inter', 'Pacifico']
        }
      }
    },
    `gatsby-plugin-slug`,
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
