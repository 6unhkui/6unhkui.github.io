import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import Github from "../../static/images/github.svg";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
        avatar: file(absolutePath: { regex: "/profile.png/" }) {
            childImageSharp {
                fixed(width: 80, height: 80) {
                    base64
                    width
                    height
                    src
                    srcSet
                }
            }
        }
        site {
            siteMetadata {
              author
              description
              social {
                github
              }
            }
          }
    } 
  `)

  const { author, social, description } = data.site.siteMetadata;
  const avatar = data.avatar.childImageSharp.fixed;

  return (
    <div className="bio-wrap">
      <Image
        fixed={avatar}
        alt={author.name}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div className="user-info">
        <p class="write-by">WRITTEN BY</p>
        <h3>{author}</h3>
        <p class="description">{description}</p>
      </div>
    </div>
  )
}

export default Bio
