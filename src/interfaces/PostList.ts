import { FeaturedImage } from "./FeaturedImage"

export interface Query {
  allMarkdownRemark : AllMarkdownRemark,
}

export interface AllMarkdownRemark {
  edges : Edge[],
  categories : Category[]
}

export interface Edge {
  node : {
    excerpt : string,
      fields : {
      slug : string
    },
    frontmatter : Frontmatter
  }
}

export interface Frontmatter {
  date : string,
  title : string,
  tags : string[],
  category : string,
  featuredImage? : FeaturedImage
}


export interface Category {
  fieldValue : string;
}