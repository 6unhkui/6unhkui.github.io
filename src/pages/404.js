import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({location}) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <section className="page-title-wrap">
      <div className='container'>
        <h1 className="page-title">NOT FOUND</h1>
        <div>존재하지 않는 페이지입니다.</div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
 