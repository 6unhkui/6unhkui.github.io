import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "components/SEO";
import PageTitle from "components/PageTitle";
import { kebabCase } from "lodash";
import Layout from "components/Layout/Layout";
import { TagsPageQuery } from "graphql-types";

interface TagsPageProps {
    data: TagsPageQuery;
    location: Location;
}

const TagsPage: React.FC<TagsPageProps> = ({ data, location }) => {
    const allTags = data.allMarkdownRemark.group;

    return (
        <Layout location={location}>
            <SEO title="Tags" />
            <div style={{ paddingBottom: "5rem" }}>
                <PageTitle title="Tags" />

                <section className="all-tags-wrap">
                    <div className="container">
                        {allTags.map((tag, i) => (
                            <div key={i} className="tag">
                                <Link to={`/tags/${kebabCase(tag.fieldValue || "")}/`}>
                                    {tag.fieldValue}
                                    <span className="tag-count">{`(${tag.totalCount})`}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default TagsPage;

export const pageQuery = graphql`
    query TagsPage {
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;
