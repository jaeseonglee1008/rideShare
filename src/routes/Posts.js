import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'



const Post = ({match}) => {
  return (
    <h2>{match.params.title}</h2>
  )
}

const Posts = (props) => {
  return (
    <div>
    <h1>Main post</h1>
    <Link to="/posts/redux"> redux</Link>
    <Link to="/posts/react"> react</Link>
    <Link to="/posts/sample"> sample</Link>
    <Route
        path ="/posts/:title"
        component = {Post}
    />
    </div>

  )
}

export default Posts
