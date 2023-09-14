import * as React from 'react'
import { Link, graphql } from 'gatsby'

const IndexPage = ({ data }) => {

    return (
        <>
        <h1>Strapi Gatsby Blog Site</h1>
        <h2>Home Page</h2>
        <p>Welcome to the hypest blog on the interweb. Checkout something cool!</p>
        <ul>
            {
                data.allStrapiPost.nodes.map(node => (
                    <li key={node.id}>
                        <Link to={`/${node.slug}`}><h3>{node.title}</h3></Link>
                        <img src={`${node.cover}`} alt={`Cover for ${node.title}`} />
                        <p>{node.date}</p>
                        <p><img src={`${node.author.avatar}`} alt={`Avatar for${node.author.name}`}/>Written by {node.author.name}</p>
                        <p><Link to={`/${node.category.slug}`}>Category: {node.category.name}</Link></p>
                        <p>{node.description}</p>
                    </li>
                )
                )
            }
            </ul>
        </>
        )
}

export const query = graphql`
query {
allStrapiPost(sort: {date: DESC}) {
    nodes {
      author {
        avatar 
        name
      }
      cover
      date(formatString: "MMMM D, YYYY")
      description
      id
      slug
      title
      category {
        name
        slug
      }
    }
  }
}
`

export const Head = () => <title>Home Page - Strapi Gatsby Blog Site</title>

export default IndexPage