import React from 'react'
import styles from '../utils/styles/story.css'

export default({data}) => {
  const post = data.markdownRemark
  return (
    <div>
      <div className="project">
        <img className="project__image" src={post.frontmatter.cover} />
        <div className="project__info">
          <h1 className="project__title">{post.frontmatter.title}</h1>
          <div className="project__description">{post.frontmatter.description}</div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover
        image
        description
      }
    }
  }
`