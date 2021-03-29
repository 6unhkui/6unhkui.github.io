import React from "react";
import Thumbnail from "static/images/gradation-bg.png";
import { Link } from "gatsby";
import { kebabCase } from "lodash";
import { MarkdownRemark } from "graphql-types";

interface PostCardProps {
    data: MarkdownRemark;
}

const PostCard: React.FC<PostCardProps> = ({ data }) => {
    return (
        <article className="card">
            <Link to={`${data.fields?.slug}/`}>
                <img
                    src={
                        data.frontmatter?.featuredImage
                            ? data.frontmatter?.featuredImage?.childImageSharp?.resize?.src
                            : Thumbnail
                    }
                />

                <div className="post-info">
                    <p className="date">{data.frontmatter?.date}</p>
                    <span className="category">{data.frontmatter?.category}</span>
                    <h1 className="title">{data.frontmatter?.title}</h1>

                    <p className="summary" dangerouslySetInnerHTML={{ __html: data.excerpt ? data.excerpt : "" }} />

                    <div className="tags-wrap">
                        {data.frontmatter?.tags?.map((tag, i) => (
                            <Link to={`/tags/${kebabCase(tag || "")}/`} className="tag" key={i}>
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default PostCard;
