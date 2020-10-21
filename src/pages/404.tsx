import React from "react"
import Index from "../components/Layout"
import SEO from "../components/seo"

interface Props {
  location: Location;
}
const NotFoundPage: React.FC<Props> = ({location}) => (
  <Index location={location}>
    <SEO title="404: Not found"/>
    <section className="page-title-wrap">
      <div className='container'>
        <h1 className="page-title">NOT FOUND</h1>
        <div>존재하지 않는 페이지입니다.</div>
      </div>
    </section>
  </Index>
)

export default NotFoundPage
 