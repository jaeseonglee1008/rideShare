import React from 'react'
import PropTypes from 'prop-types'

const Home = ({history}) => {
  return (
    <div>
    <button onClick={()=>{history.push('/posts')}}>버튼</button>

    Home </div>
  )
}

export default Home
