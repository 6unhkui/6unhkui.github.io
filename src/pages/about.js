import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({location}) => {
    return (
        <Layout location={location}>
            <SEO title="About"/>
            <section className="page-title-wrap">
                <div className='container'>
                    <h1 className="page-title">About</h1>
                    <div className="empty">작성중</div>
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage;