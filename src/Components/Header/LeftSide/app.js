import React from 'react'
import SubTitle from './SubTitle'
import './style.css'
import Title from './Title'

const LeftSide = () => {
  return (
    <div class="site-title">
     <Title />
     <SubTitle child={"A blog exploring minimalism in life"}/>

    </div>
  )
}

export default LeftSide
