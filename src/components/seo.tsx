/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Image } from "../interfaces/FeaturedImage"



interface Props {
  description? : string,
  lang? : string,
  meta? : object[],
  image? : Image,
  title : string
}

const SEO : React.FC<Props> = ({ description, lang = 'en', meta = [], image: metaImage, title }) =>   {
  const { site, icon } = useStaticQuery(
    graphql`
      query {
        icon : file(absolutePath: { regex: "/icon.png/" }) {
          childImageSharp {
            fixed(width: 300, height: 300) {
              src
            }
          }
        }
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )
  
  const metaTitle = title ? title + ' | ' + site.siteMetadata.title : site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description
  const image = metaImage && metaImage.src ? `${site.siteMetadata.siteUrl}${metaImage.src}` : `${icon.childImageSharp.fixed.src}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: "og:image",
          content: icon.childImageSharp.fixed.src,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
      .concat(
        metaImage
          ? [
              {
                property: "og:image",
                content: image,
              },
              {
                property: "og:image:width",
                content: metaImage.width,
              },
              {
                property: "og:image:height",
                content: metaImage.height,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
          : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
      )}
    />
  )
}

export default SEO
