
import React from 'react'

interface InputFiltProps {
    title: string,
    handleInput:   (str: string) => void
    handleSubmit: ()=> void 
    
}

const InputFilt: React.FC <InputFiltProps> = (props) => {  
  const {title, handleInput,handleSubmit} = props          
  return (
    <label>
    <input
      type="text"
      value={title}
      placeholder="Введите текст "   
      onChange={(e) => handleInput(e.target.value)}   
    ></input>
    <button className="btn" onClick={handleSubmit}>        
      Добавить
    </button>
  </label>    
  )
}

export default InputFilt        
