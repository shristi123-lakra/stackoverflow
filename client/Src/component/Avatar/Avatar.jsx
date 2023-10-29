
import React from 'react'

const Avatar = ({children , backgroundColor,px ,py,color, borderRadius,fontsize ,cursor}) => {
 const  style ={
 backgroundColor,
 padding:`${py} ${px}`,
 color:color || 'black',
borderRadius,
fontsize,
textAlign:"centre",
cursor : cursor ||null,
TextDecoration:"none"
}
  return (
    <div style={style}>
{children}
    </div>
  )
  
}

export default Avatar

