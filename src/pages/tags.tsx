import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from "../components/seo"
import PageTitle from "../components/Layout/pageTitle";
import { kebabCase } from 'lodash';
import Index from '../components/Layout';
import { Query } from "../interfaces/Tags"

interface Props {
  data : Query;
  location: Location;
}

const TagsPage: React.FC<Props> = ({ data, location }) => {
  const allTags = data.allMarkdownRemark.group;

  return (
    <Index location={location}>
      <SEO title="Tags" />
      <div style={{paddingBottom : '5rem'}}>
        <PageTitle title='Tags'/>

        <section className="all-tags-wrap">
          <div className="container">
            {allTags.map(tag => (
              <div key={tag.fieldValue} className="tag">
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue}
                  <span className="tag-count">{'(' + tag.totalCount + ')'}</span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Index>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;