import React from "react";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO";
import Posts from "components/Post/Posts";
import { graphql } from "gatsby";
import { DevOpsPageQuery } from "graphql-types";

interface DevOpsPageProps {
    data: DevOpsPageQuery;
    location: Location;
}
const DevOpsPage: React.FC<DevOpsPageProps> = ({ data, location }) => (
    <Layout location={location}>
        <SEO title="DevOps" />
        <Posts data={data.allMarkdownRemark} />
    </Layout>
);

export default DevOpsPage;

export const pageQuery = graphql`
    query DevOpsPage {
        allMarkdownRemark(
            filter: { fields: { slug: { regex: "/^/devops//" } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            ...PostsInfo
        }
    }
`;
