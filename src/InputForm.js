import React, { useState } from "react";

function InputForm(){

    const [content, setContent] = useState("");
    const handleContentChange = (event) => setContent(event.target.value)
    
    const [shift, setShift] = useState("")
    const handleShiftChange = (event) => setShift(event.target.value)

    const [checked, setChecked] = useState("")
    const handleCheckedChange = (event) => setChecked(event.target.value)
    
    const handleSubmit = (event) => {
    event.preventDefault();
    //createPost({type,post})
    setContent("");
    setShift("");
    setChecked("")
  };

    return (
        <>
         <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Cypher Shifter</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select id="type" name="type" required={true} onChange={handleContentChange} value={content}>
            <option>Caesar Shift</option>
            <option>Polybius Square</option>
            <option>Substitution Cypher</option>
          </select>
        </div>
        <div>
            <label htmlFor="content">Content: </label>
            <textarea 
                id="content" 
                name="content" 
                placeholder="Sentence to Shift" 
                required={true} 
                rows={3} 
                onChange={handleContentChange} 
                value={content}/>
          <br/>
            <label htmlFor="Shift"> Shift:</label>
            <input 
                id="shift" 
                name="shift" 
                placeholder="Number to Shift By" 
                required={true} 
                onChange={handleShiftChange} 
                value={shift}></input>
          <br/>
            <label>
            What do you want to do?
            <select id="type" name="type" required={true} onChange={handleCheckedChange} value={checked}>
                    <option>Decode</option>
                    <option>Encode</option>
                </select>

      </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
        
        </>
    )
}

export default InputForm