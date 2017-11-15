import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './Header.css'


const Header = (props) => {
  return (
    <div className ="header">
          <NavLink exact to ="/" className ="item" activeClassName="active">home</NavLink>
          <NavLink to ="/about/Jason" className ="item" activeClassName="active">about</NavLink>
          <NavLink to ="/posts" className ="item" activeClassName="active">posts</NavLink>
          <NavLink to ="/login" className ="item" activeClassName="active">login</NavLink>
          <NavLink to ="/aboutme" className ="item" activeClassName="active">MyPage</NavLink>
    </div>
  )
}

export default Header
