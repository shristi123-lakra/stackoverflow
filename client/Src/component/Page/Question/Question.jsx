import React from 'react'
import '../../../App.css'
import HomeMainbar from '../../Homemainbar/HomeMainbar'
import LeftSidebar from '../../LeftSidebar/LeftSidebar.js'
import RightSidebar from '../../RightSidebar/RightSidebar.js'

const Question = ()=> {
  return (
    <div className='home-container-1'>
    <LeftSidebar/>
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>
     
      
      </div>

    </div>
  )
}

export default Question