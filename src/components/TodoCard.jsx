import React from 'react'

export default function TodoCard(props) {
  const {children , handelDelet , index , handleEdite} = props
  return (
    <li>
        {children}
        <div>
           <button className={"delete"} onClick={()=>{handelDelet (index)}}><i class="fa-solid fa-trash"></i></button>
           <button className={"edit"} onClick={()=>{handleEdite(index)}}><i class="fa-solid fa-pen"></i></button>
        </div>
       
    </li>
  )
}
