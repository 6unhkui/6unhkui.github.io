import React from "react";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO";
import Posts from "components/Post/Posts";
import { graphql } from "gatsby";
import { CsPageQuery } from "graphql-types";

interface CsPageProps {
    data: CsPageQuery;
    location: Location;
}
const CsPage: React.FC<CsPageProps> = ({ data, location }) => (
    <Layout location={location}>
        <SEO title="Computer Science" />
        <Posts data={data.allMarkdownRemark} />
    </Layout>
);

export default CsPage;

export const pageQuery = graphql`
    query CsPage {
        allMarkdownRemark(
            filter: { fields: { slug: { regex: "/^/cs//" } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            ...PostsInfo
        }
    }
`;
