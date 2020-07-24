const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const indexTemplate = path.resolve(`./src/templates/index.js`)
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  const tagTemplate = path.resolve(`./src/templates/tags.js`)

  const result = await graphql(
    `
      {
        posts:allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                categoryname
                perma
                tags
                thumbnail {
                  base
                }
              }
            }
          }
        }
        categorys: allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___categoryname) {
            fieldValue
          }
        }
        tags: allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.posts.edges
  const categorys = result.data.categorys.group
  const tags = result.data.tags.group

  // ページネーション関数buildPaginationを作成
	const buildPagination = posts => {
		paginate({
			createPage,
			items: posts,
			itemsPerPage: 12,
			// 2ページ目以降はURLに"/page"が付与されるよう設定
			pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
			component: indexTemplate
		})
  }
  
  // トップページの生成
  createPage({
    path: `/`,
    component: indexTemplate,
    context: {
    }
  })

  buildPagination(posts)

  // 記事ページの生成
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
  
  // カテゴリページの生成
  categorys.forEach(category => {
    createPage({
      path: `/category/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })

  // タグページの生成
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
