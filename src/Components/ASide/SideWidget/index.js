import React from 'react'
import ImgWidget from './ImgWidget'
import PWidget from './PWidget'
import Titlewidget from './WidgetTitle'

const SideWidget = () => {
  return (
      <div class="sidebar-widget">
      <Titlewidget/>   
       <ImgWidget />
       <PWidget/>
  </div>

  )
}

export default SideWidget
