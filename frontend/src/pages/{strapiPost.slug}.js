import * as React from 'react'
import { Link, graphql } from 'gatsby'

const BlogPost = ({ data }) => {
    return (
        <>
            <h1><Link to="/">Strapi Gatsby Blog Site</Link></h1>
            <h2>{data.strapiPost.title}</h2>
            <img src={`${data.strapiPost.cover}`} alt={`Cover for ${data.strapiPost.title}`} />
            <p>{data.strapiPost.date}</p>
            <img src={`${data.strapiPost.author.avatar}`} alt={`Avatar for${data.strapiPost.author.name}`} />
            <p>Written by {data.strapiPost.author.name}</p>
            <p><Link to={`/${data.strapiPost.category.slug}`}>Category: {data.strapiPost.category.name}</Link></p>
            <div dangerouslySetInnerHTML={{ __html: data.strapiPost.content.data.childMarkdownRemark.html }} />
        </>
    )
}

export const query = graphql`
query ($id: String) {
    strapiPost(id: {eq: $id}) {
      author {
        avatar
        name
      }
      category {
        name
        slug
      }
      content {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      cover
      date(formatString: "MMMM D, YYYY")
      description
      slug
      title
    }
  }
`

export const Head = ({ data }) => <title>{data.strapiPost.title} - Strapi Gatsby Blog Site</title>

export default BlogPost