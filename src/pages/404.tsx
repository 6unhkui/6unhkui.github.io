import React from "react";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO";

interface NotFoundPageProps {
    location: Location;
}
const NotFoundPage: React.FC<NotFoundPageProps> = ({ location }) => (
    <Layout location={location}>
        <SEO title="404: Not found" />
        <section className="page-title-wrap">
            <div className="container">
                <h1 className="page-title">NOT FOUND</h1>
                <div>존재하지 않는 페이지입니다.</div>
            </div>
        </section>
    </Layout>
);

export default NotFoundPage;
