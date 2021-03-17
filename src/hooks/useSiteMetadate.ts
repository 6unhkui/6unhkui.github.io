import { useStaticQuery, graphql } from "gatsby";
import { SiteMetadata } from "../interfaces/SiteMetadata";

export const useSiteMetadata = (): SiteMetadata => {
    const {
        site: { siteMetadata }
    } = useStaticQuery(
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
    );
    return siteMetadata;
};
