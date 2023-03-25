import React from 'react'
import PicSide from './PicSide'
import PSide from './PSide/app'
import './style.css';
const MainCard = () => {
  return (
    <main role="main">
 <article class="article-featured">
      <PicSide />
      <PSide/>
    </article>
    <article class="article-featured">
      <PicSide />
      <PSide/>
    </article>
    <article class="article-featured">
      <PicSide />
      <PSide/>
    </article>
    <article class="article-featured">
      <PicSide />
      <PSide/>
    </article>


    </main>
   
  )
}

export default MainCard

