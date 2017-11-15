import React from 'react'
import PropTypes from 'prop-types'

const About = ({match}) => {
  return (
    <div>{match.params.username}의 소개</div>
  )
}

export default About
