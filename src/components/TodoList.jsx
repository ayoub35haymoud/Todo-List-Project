import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const {List , handelDelet , handleEdite} = props;
  return(
    <ul>
        {
            List.map((todoItem,todoIndex)=>{
                return <TodoCard key={todoIndex} {...props} index={todoIndex}><span>{todoItem}</span></TodoCard>
            })
        }
    </ul>
  ); 
  
}
