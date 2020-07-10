import React from 'react';
import { Link, graphql } from 'gatsby';
import PageTitle from "../components/pageTitle";
import { kebabCase } from 'lodash';

import Layout from '../components/layout';
const TagsPage = ({ data, location }) => {
  const allTags = data.allMarkdownRemark.group;

  return (
    <Layout location={location}>
      <div>
        <section className="page-title-wrap">
          <div className='container'>
            <h1 className="page-title">
              <span role="img" className="emoji">🏷</span>
              Tags
            </h1>
          </div>
        </section>

        <section className="all-tags-wrap">
          <div className="container">
            {allTags.map(tag => (
              <div key={tag.fieldValue} className="tag">
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {'# ' + tag.fieldValue}
                  <span className="tag-count">{tag.totalCount}</span>
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
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;