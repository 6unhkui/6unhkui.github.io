import React from "react";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO";
import Posts from "components/Post/Posts";
import { graphql } from "gatsby";
import { ProjectPageQuery } from "graphql-types";

interface ProjectPageProps {
    data: ProjectPageQuery;
    location: Location;
}
const ProjectPage: React.FC<ProjectPageProps> = ({ data, location }) => (
    <Layout location={location}>
        <SEO title="Project" />
        <Posts data={data.allMarkdownRemark} />
    </Layout>
);

export default ProjectPage;

export const pageQuery = graphql`
    query ProjectPage {
        allMarkdownRemark(
            filter: { fields: { slug: { regex: "/^/project//" } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            ...PostsInfo
        }
    }
`;
