import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/'
import SEO from '../components/seo/'
import Article from '../components/article'

const IndexPage = props => (
  <Layout>
    <div className="page">
      <SEO title="My blog" keywords={[`blog`, `gatsby`, `prismic`]} />
      {props.data.articles.edges.map(article => (
        <Article slug={article.node.slugs[0]} data={article.node.data} />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
  query Articles {
    articles: allPrismicArticle {
      edges {
        node {
          slugs
          data {
            title {
              text
            }
            image {
              url
              alt
            }
          }
        }
      }
    }
  }
`
