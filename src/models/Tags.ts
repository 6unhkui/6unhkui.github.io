export interface Query {
  allMarkdownRemark : {
    group : Group[]
  }
}

interface Group {
  fieldValue : string,
  totalCount: number
}

