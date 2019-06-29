/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/pages/post.js')
    resolve(
      graphql(
        `
          {
            allPrismicArticle {
              edges {
                node {
                  id
                  slugs
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allPrismicArticle.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slugs[0]}/`,
            component: blogPost,
            context: {
              slug: post.node.id,
            },
          })
        })
      })
    )
  })
}
