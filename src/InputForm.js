import React, { useState } from "react";
import CaesarForm from "./CaesarForm";
import PolybiusForm from "./PolybiusForm";
import SubstitutionForm from "./SubstitutionForm";

function InputForm() {
  const [type, setType] = useState("Substitution Cypher");
  const handleTypeChange = (event) => setType(event.target.value);

  const [content, setContent] = useState("");
  const handleContentChange = (event) => setContent(event.target.value);

  const [shift, setShift] = useState("");
  const handleShiftChange = (event) => setShift(event.target.value);

  const [checked, setChecked] = useState("");
  const handleCheckedChange = (event) => setChecked(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    //createPost({type,post})
    setContent("");
    setShift("");
    setChecked("");
  };

  return (
    <>
      <form name="create" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Cypher Shifter</legend>
          <div>
            <label htmlFor="type">Type: </label>
            <select
              id="type"
              name="type"
              required={true}
              onChange={handleContentChange}
              value={type}
            >
              <option>Caesar Shift</option>
              <option>Polybius Square</option>
              <option>Substitution Cypher</option>
            </select>
          </div>
          {type === "Caesar Shift" ? (
            <CaesarForm />
          ) : type === "Polybius Square" ? (
            <PolybiusForm />
          ) : (
            <SubstitutionForm />
          )}
          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default InputForm;

// {type === "Text" ? (
//   <textarea id="content" name="content" required={true} rows={3} onChange={handlePostChange} value={post}/>
// ) : (
//   <input id="content" name="content" type="url" required={true} onChange={handlePostChange} value={post}/>
// )}
