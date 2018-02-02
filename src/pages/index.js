import React from "react"
import Masonry from "react-masonry-component"
import Link from 'gatsby-link'
import styles from "../utils/styles/index.module.css"
import Img from 'gatsby-image'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.query = this.props.data.allMarkdownRemark.edges;
    this.thumbnails = [];
    this.state = {
      view: 'loading'
    }
  }

  componentWillUnmount() {
    this.thumbnails =[];
  }

  loadThumbnails(i) {
    return (
      <div className={styles.thumbnails} key={i.frontmatter.title}>
          <img src={i.frontmatter.image} />
          <div className={styles.articleMeta}>
          <Link to={i.fields.slug} style={{ textDecoration: `none`, color: `inherit` }}>
            <h2 className={styles.articleTitle}>{i.frontmatter.title}</h2>
            <h3 className={styles.articleDescription}>{i.frontmatter.description}</h3>
          </Link>
          </div>
        </div> 
    )
  }

  render() {
    var nodes = this.query.map(i => i.node);
    var final = nodes.map(i => this.loadThumbnails(i))
    this.thumbnails = final;
    var view = ''
    switch(this.state.view) {
      case 'loading':
        view = (
            <Masonry
              className={styles.hidden}
              onLayoutComplete={() => this.setState({view: 'ready'})}
            >
              {this.thumbnails}
            </Masonry>
        );
        break;
      case 'ready':
        view = (
          <div>
              <Masonry
                className={styles.masonry}
              >
                {this.thumbnails}
              </Masonry>
          </div>
        );
        break;
    }
    return(
        <div>
          {view}
        </div>
    )
  }
}

export default Layout;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            image 
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

