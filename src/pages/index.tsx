import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO";
import Typed from "react-typed";
import PostCard from "components/Post/PostCard";
import { IndexPageQuery, MarkdownRemark } from "graphql-types";

interface HomePageProps {
    data: IndexPageQuery;
    location: Location;
}

const HomePage: React.FC<HomePageProps> = ({ data, location }) => {
    const {
        allMarkdownRemark: { edges: posts }
    } = data;

    return (
        <Layout location={location}>
            <SEO />
            <section className="page-title-wrap">
                <div className="container">
                    <div>
                        <h1 className="page-title">
                            <span style={{ display: "block" }}>Hello!</span>
                            <Typed
                                strings={["I'm Inkyung", "a Web Developer"]}
                                typeSpeed={80}
                                backSpeed={80}
                                backDelay={900}
                                showCursor
                                loop
                            />
                        </h1>
                        <div>
                            <p>
                                안녕하세요. 주니어 웹 개발자{" "}
                                <span role="img" aria-label="emoji">
                                    👩‍💻
                                </span>{" "}
                                심인경입니다.
                            </p>
                            <p>공부한 내용을 기록하고 있습니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="posts-wrap index">
                <div className="posts container">
                    <h1 className="section-title">
                        <span role="img" aria-label="emoji">
                            ✏️{" "}
                        </span>
                        Recent Posts
                    </h1>
                    {posts.map((post, i) => (
                        <PostCard data={post.node as MarkdownRemark} key={i} />
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default HomePage;

export const pageQuery = graphql`
    query IndexPage {
        allMarkdownRemark(
            filter: { fields: { slug: { regex: "/^((?!/til/).)*$/" } } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 4
        ) {
            ...PostsInfo
        }
    }
`;
