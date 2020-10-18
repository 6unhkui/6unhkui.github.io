export interface SiteMetadata {
  title : string,
  description : string,
  author : string,
  social : Social,
  menuLinks : MenuLink[]
}

interface MenuLink {
  name : string,
  link : string
}

interface Social {
  github : string,
  linkedin : string
}
