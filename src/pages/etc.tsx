import React from "react";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO";
import Posts from "components/Post/Posts";
import { graphql } from "gatsby";
import { EtcPageQuery } from "graphql-types";

interface EtcPageProps {
    data: EtcPageQuery;
    location: Location;
}
const EtcPage: React.FC<EtcPageProps> = ({ data, location }) => (
    <Layout location={location}>
        <SEO title="Etc" />
        <Posts data={data.allMarkdownRemark} />
    </Layout>
);

export default EtcPage;

export const pageQuery = graphql`
    query EtcPage {
        allMarkdownRemark(
            filter: { fields: { slug: { regex: "/^/etc//" } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            ...PostsInfo
        }
    }
`;
