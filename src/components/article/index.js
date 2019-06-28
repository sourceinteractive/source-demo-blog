import React from 'react'
import { Link } from 'gatsby'
import '../article/style.scss'

const Article = props => (
  <Link to={`/blog/${props.slug}`} className="c-article">
    <img alt={props.data.image.alt} src={props.data.image.url} />
    <h2>{props.data.title.text}</h2>
  </Link>
)

export default Article
