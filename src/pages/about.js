import React from 'react';
import Layout from "../components/layout"
import Post from "../components/posts";
import PageTitle from "../components/pageTitle";

const AboutPage = ({location}) => {
    return (
        <Layout location={location}>
            {/* <PageTitle title="Today I Learned" emoji="📚"/> */}
{/* 
            <Post posts={data.allMarkdownRemark.edges}/> */}
        </Layout>
    )
}

export default AboutPage;