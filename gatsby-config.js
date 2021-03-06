const path = require("path");
require("dotenv").config({
    path: `.env`
});

const SITE_URI = "https://blog.inkyung.me";

module.exports = {
    siteMetadata: {
        title: `i.log ✨`,
        description: `기록하는 습관 📝`,
        author: `Inkyung`,
        email: `kyxxin@hanmail.net`,
        siteUrl: SITE_URI,
        social: {
            github: `https://github.com/6unhkui`,
            linkedin: `inkyung`
        },
        keywords: ["Java", "Spring Framework", "Javascript", "React", "Web Developer"],
        menuLinks: [
            {
                name: "CS",
                link: "/cs",
                target: "_self"
            },
            {
                name: "Algorithm",
                link: "/algorithm",
                target: "_self"
            },
            {
                name: "Programming",
                link: "/programming",
                target: "_self"
            },
            {
                name: "DevOps",
                link: "/devops",
                target: "_self"
            },
            {
                name: "ETC",
                link: "/etc",
                target: "_self"
            },
            {
                name: "TAGS",
                link: "/tags",
                target: "_self"
            }
        ]
    },
    plugins: [
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                google: {
                    families: ["Roboto", "IBM Plex Mono", "Roboto Mono", "Noto Sans KR", "Blinker", "Inter", "Pacifico"]
                }
            }
        },
        `gatsby-plugin-config`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, "content/blog"),
                name: `blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, "static/images"),
                name: `images`
            }
        },
        {
            resolve: "gatsby-plugin-root-import",
            options: {
                static: path.join(__dirname, "static"),
                src: path.join(__dirname, "src"),
                components: path.join(__dirname, "src/components"),
                hooks: path.join(__dirname, "src/hooks"),
                utils: path.join(__dirname, "src/utils"),
                "graphql-types": path.join(__dirname, "graphql-types.ts")
            }
        },
        {
            // GraphQL Code Generator
            resolve: `gatsby-plugin-graphql-codegen`,
            options: {
                codegen: false, // If you want it to work, change it to true.
                // fileName: `./src/graphqlTypes/index.ts`, // it should not be placed into src, since this will create an infinite loop
                documentPaths: ["./src/**/*.{ts,tsx,graphql}", "./node_modules/gatsby-*/**/*.js", "./gatsby-node.js"],
                options: {
                    codegenPlugins: [
                        {
                            resolve: "typescript",
                            options: {
                                namingConvention: `lower-case#lowerCase`
                            }
                        }
                    ]
                }
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `i.log`,
                short_name: `i.log`,
                start_url: `/`,
                background_color: `#7b22ec`,
                theme_color: `#7b22ec`,
                display: `standalone`,
                icon: `static/images/icon.png`, // This path is relative to the root of the site.
                crossOrigin: `use-credentials`
            }
        },
        {
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
                siteUrl: SITE_URI
            }
        },
        "gatsby-plugin-remove-serviceworker",
        `gatsby-remark-code-titles`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-code-titles",
                    "gatsby-remark-a11y-emoji",
                    `gatsby-remark-numbered-footnotes`,
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            noInlineHighlight: false,
                            showLineNumbers: false
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1000,
                            // linkImagesToOriginal: false,
                            wrapperStyle: `margin-left: initial;`
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            className: `anchor-header`,
                            maintainCase: false,
                            removeAccents: true,
                            elements: [`h1`, `h2`, "h3", `h4`]
                        }
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "noreferrer noopener"
                        }
                    }
                ]
            }
        },
        `gatsby-plugin-slug`,
        `gatsby-plugin-sass`,
        "gatsby-plugin-dark-mode"
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
