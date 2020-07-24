import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle";
import { kebabCase } from 'lodash';

import Layout from '../components/layout';
const TagsPage = ({ data, location }) => {
  const allTags = data.allMarkdownRemark.group;

  return (
    <Layout location={location}>
      <SEO title="Tags" />
      <div style={{paddingBottom : '6rem'}}>
        <PageTitle title='Tags'/>

        <section className="all-tags-wrap">
          <div className="container">
            {allTags.map(tag => (
              <div key={tag.fieldValue} className="tag">
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {'# ' + tag.fieldValue}
                </Link>
                <span className="tag-count">{tag.totalCount}</span>
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