import React from "react";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO";
import Posts from "components/Post/Posts";
import { graphql } from "gatsby";
import { ProgrammingPageQuery } from "graphql-types";

interface ProgrammingPageProps {
    data: ProgrammingPageQuery;
    location: Location;
}
const ProgrammingPage: React.FC<ProgrammingPageProps> = ({ data, location }) => (
    <Layout location={location}>
        <SEO title="Programming" />
        <Posts data={data.allMarkdownRemark} />
    </Layout>
);

export default ProgrammingPage;

export const pageQuery = graphql`
    query ProgrammingPage {
        allMarkdownRemark(
            filter: { fields: { slug: { regex: "/^/programming//" } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            ...PostsInfo
        }
    }
`;
