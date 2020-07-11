import React from 'react';
import Layout from "../components/layout"
import Post from "../components/posts";
import PageTitle from "../components/pageTitle";

const AboutPage = ({location}) => {
    return (
        <Layout location={location}>
            <section className="page-title-wrap">
                <div className='container'>
                    <h1 className="page-title">
                    {/* <span role="img" className="emoji">👩‍💻</span> */}
                    About
                    </h1>
                    
                    <div>
                        안녕하세요. 웹 개발자 심인경입니다.
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage;