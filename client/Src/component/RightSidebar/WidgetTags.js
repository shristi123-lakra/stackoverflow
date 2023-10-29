import React from 'react'
import './RightSidebar.css'

 const WidgetTags = () => {
  const tags=['c','css','express','firebas','html','java','javasript','mern','monogodb','mysql','next.js','node.js','php','python','reactjs']
  return (
    <div className='Widget-Tags'>
        <h3>Watched tags</h3>
        <div className='Widget-tags-div'>
          {
            tags.map((tag)=>(
              <p key={tag}>{tag} </p>
            ))
          }

        </div>
    </div>
  )
}
export default WidgetTags
