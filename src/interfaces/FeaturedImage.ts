export interface FeaturedImage {
  src : string,
  width : string,
  height : string,
  childImageSharp : {
    resize : Image,
    original : Image
  }
}

export interface Image {
  src : string,
  width : string,
  height : string,
}