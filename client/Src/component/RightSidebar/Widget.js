import React from 'react'
import blacklogo from '../../asset/blacklogo.svg'
import comment from '../../asset/comment-alt-solid.svg'
import pen from '../../asset/pen-solid.svg'
import './RightSidebar.css'
const Widget= ()=> {
  return (
    <div className='Widget'>
      <h4>The Overflow blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src= {pen} alt='pen' width="18"/>
          <p> observability is key to thge future of software (and your  DevOps career)</p>
        </div>
    
      < div className='right-sidebar-div-2'>
        <img src= {pen} alt='pen' width="18"/>
        <p>podcast 374 :how valuavble is your screen name?</p>
      </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src= {comment} alt='comment' width="18"/>
          <p>  Review queue workflow -final release</p>
        </div>
    
      < div className='right-sidebar-div-2'>
        <img src= {comment} alt='comment' width="18"/>
        <p>Please welcome valued associates:#958 -V2Blast #954 -SpencerG</p>
      </div>
      < div className='right-sidebar-div-2'>
        <img src= {blacklogo} alt='balacklogo' width="18"/>
        <p>Outdated Answer :accepeted ansdwer is now unpinned on Stack OverFlow</p>
      </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
        <p>38</p>
        <p> why was this spam flag decline. yet the question marked as spam?</p>
        </div>
    
      < div className='right-sidebar-div-2'>
      <p>28</p>
        <p>what is the best couse of action when auser has high enough rep to..</p>
      </div>
      < div className='right-sidebar-div-2'>
      <p>14</p>
        <p>Is a link to the "how toask help page a useful comment?</p>
      </div>
      </div>
   </div>
   
   
  )
}
export default Widget
