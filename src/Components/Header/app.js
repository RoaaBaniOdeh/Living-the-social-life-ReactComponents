import React from 'react'
import LeftSide from './LeftSide/app'
import RightSide from './RightSide/app'
import './style.css';
const Header = () => {
  return (
    <header>
    <div class="container container-flex">
    <LeftSide/>
    <RightSide/>
 </div>
</header>
  )
}

export default Header
