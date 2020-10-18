import { Frontmatter } from "./PostList"

export interface PageContext {
  slug: string,
  previous : Summary,
  next : Summary,
  tag? : string
}

interface Summary {
  fields : {
    slug : string
  },
  frontmatter : Frontmatter
}