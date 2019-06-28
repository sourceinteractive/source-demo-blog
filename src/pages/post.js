import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ArticleDetail from '../components/articleDetail'

class Post extends Component {
  render() {
    const { data } = this.props.data.post
    const title = data.title.text

    return (
      <Layout>
        <SEO
          title={`My blog | ${title}`}
          keywords={[`blog`, `gatsby`, `prismic`]}
        />
        <ArticleDetail
          title={title}
          image={data.image.url}
          paragraph={data.paragraph.html}
        />
      </Layout>
    )
  }
}

export default Post

export const postQuery = graphql`
  query Post($slug: String) {
    post: prismicArticle(id: { eq: $slug }) {
      id
      data {
        title {
          text
        }
        image {
          url
        }
        paragraph {
          html
        }
      }
    }
  }
`
