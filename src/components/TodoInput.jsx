import React from 'react'

export default function TodoInput(props) {
  const {setInputVal ,inputVal , handleAdd } = props
  const handlekey = (e)=>{
    if (e.key === 'Enter'){
        handleAdd(inputVal);
        setInputVal('');
    }
  }
  const handleChange = (e) => {
    setInputVal(e.target.value)
  }
  return (
    <div className='inputCss'>
        <input type='text' placeholder='enter to do ' value={inputVal} onChange={handleChange} onKeyDown={handlekey}/>
        <button onClick={handleAdd}>add to do </button>
    </div>
  )
}
