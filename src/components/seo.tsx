import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery } from "gatsby";
import { configs } from "../../config";
import { graphql } from "gatsby";

interface SEOProps {
    title?: string;
    description?: string;
    imageSrc?: string;
    article?: boolean;
}

const SEO = ({ title, description, imageSrc, article = false }: SEOProps) => {
    const { pathname } = useLocation();
    const { site, icon } = useStaticQuery(pageQuery);
    const { defaultTitle, defaultDescription, siteUrl, author } = site.siteMetadata;

    const defaultImage = icon.childImageSharp.fixed.src;

    const seo = {
        title: title ? `${title} | ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${imageSrc || defaultImage}`,
        url: `${siteUrl}${pathname}`
    };

    return (
        <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {author && <meta name="twitter:creator" content={author} />}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && <meta name="twitter:description" content={seo.description} />}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            <meta name="google-site-verification" content={configs.google_site_verification} />
        </Helmet>
    );
};
export default SEO;

const pageQuery = graphql`
    query SEOQuery {
        icon: file(absolutePath: { regex: "/icon.png/" }) {
            childImageSharp {
                fixed(width: 300, height: 300) {
                    src
                }
            }
        }
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                author
                siteUrl
            }
        }
    }
`;
