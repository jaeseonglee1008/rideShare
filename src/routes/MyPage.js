import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'


const logged = false;
const MyPage = (props) => {
  return (
    <div>
      {!logged && <Redirect to= "/login"/>}
    Mypage
    </div>
  )
}

export default MyPage
