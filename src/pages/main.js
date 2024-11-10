import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import { useState,useEffect } from 'react'
export default function Main() {
  const [List,setList] = useState(()=>{
    const savedList = localStorage.getItem('List');
    return savedList ? JSON.parse(savedList) : [];
  });
  const [inputVal,setInputVal] =  useState('');
  useEffect(()=>{
    localStorage.setItem('List',JSON.stringify(List));
  },[List]);
  const handleAdd = ()=>{
    const newList = [...List , inputVal];
    setList(newList);
    setInputVal('');
  }
  const handelDelet=(index)=>{   
    const newList = List.filter((_,i) => i !== index);
    //     {
    //     return i !== index;
    // }
     setList(newList);
  }
  const handleEdite = (index)=>{
    const newinputVal = List[index];
    setInputVal(newinputVal);
    handelDelet(index);
  }
  return (
    <div>
        <TodoInput  inputVal={inputVal } setInputVal={setInputVal} handleAdd={handleAdd}/>
        <TodoList List={List} handelDelet={handelDelet}   handleEdite={ handleEdite }/>
    </div>
   
  )
}
