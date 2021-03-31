import { useStaticQuery, graphql } from "gatsby";
import { SiteSiteMetadata } from "graphql-types";

export const useSiteMetadata = (): SiteSiteMetadata => {
    const {
        site: { siteMetadata }
    } = useStaticQuery(graphql`
        query Site {
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
                        target
                    }
                }
            }
        }
    `);
    return siteMetadata;
};
