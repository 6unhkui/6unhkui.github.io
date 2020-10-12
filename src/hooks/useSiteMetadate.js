import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site : {siteMetadata} } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            social {
              github
              linkedin
            }
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  )
  return siteMetadata
}
