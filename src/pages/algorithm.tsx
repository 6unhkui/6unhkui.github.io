import React from "react";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO";
import Posts from "components/Post/Posts";
import { graphql } from "gatsby";
import { AlgorithmPageQuery } from "graphql-types";

interface AlgorithmPageProps {
    data: AlgorithmPageQuery;
    location: Location;
}

const AlgorithmPage: React.FC<AlgorithmPageProps> = ({ data, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Algorithm" />
            <Posts data={data.allMarkdownRemark} />
        </Layout>
    );
};

export default AlgorithmPage;

export const pageQuery = graphql`
    query AlgorithmPage {
        allMarkdownRemark(
            filter: { fields: { slug: { regex: "/^/algorithm//" } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            ...PostsInfo
        }
    }
`;
