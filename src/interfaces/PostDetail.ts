import { SiteMetadata } from "./SiteMetadata"
import { Frontmatter } from "./PostList"

export interface Query {
  site : Site,
  markdownRemark : MarkdownRemark
}

interface Site {
  siteMetadata : SiteMetadata
}

interface MarkdownRemark {
  fields : string[],
  id : string,
  excerpt : string,
  html : string,
  tableOfContents : string,
  frontmatter : Frontmatter
}
