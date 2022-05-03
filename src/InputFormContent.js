import React from "react";

function InputFormContent({}){
  return (
    <>
      <textarea 
        id="content" 
        name="content" 
        placeholder="Sentence to Shift" 
        required={true} 
        rows={3} 
        onChange={handleChange} 
        value={content}/>
      <input 
        id="shift" 
        name="shift" 
        placeholder="Number to Shift By" 
        required={true} 
        onChange={handleChange} 
        value={shift}></input>
      <label>
        <input
            type="checkbox"
            id="type"
            name="type"
            checked={checked}
            onChange={handleChange}
            />
            Encode?
      </label>
    </>
  )
}

export default InputFormContent;