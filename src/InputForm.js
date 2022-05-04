import React, { useState } from "react";
import CaesarForm from "./CaesarForm";
import PolybiusForm from "./PolybiusForm";
import SubstitutionForm from "./SubstitutionForm";

function InputForm() {
  const [type, setType] = useState("Caesar Shift");
  const handleTypeChange = (event) => setType(event.target.value);

  const [content, setContent] = useState("");
  const handleContentChange = (event) => setContent(event.target.value);

  const [shift, setShift] = useState("");
  const handleShiftChange = (event) => setShift(event.target.value);

  const [encodeStatus, setEncodeStatus] = useState("");
  const handleEncodeStatusChange = (event) => setEncodeStatus(event.target.value);

  const [alphabet, setAlphabet] = useState("");
  const handleAlphabetChange = (event) => setAlphabet(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    //createPost({type,post})
    setContent("");
    setShift("");
    setEncodeStatus("");
    setAlphabet("");
  };

  const handleReset = (event) => {
    event.preventDefault();
    setContent("");
    setShift("");
    setEncodeStatus("");
    setAlphabet("");
  };

  return (
    <>
      <form name="create" onSubmit={handleSubmit} onReset={handleReset}>
        <fieldset>
          <legend>Cypher Shifter</legend>
          <div>
            <label htmlFor="type">Type: </label>
            <select
              id="type"
              name="type"
              required={true}
              onChange={handleTypeChange}
              value={type}
            >
              <option>Caesar Shift</option>
              <option>Polybius Square</option>
              <option>Substitution Cypher</option>
            </select>
          </div>
          {type === "Caesar Shift" ? (
            <CaesarForm
              handleContentChange={handleContentChange}
              handleShiftChange={handleShiftChange}
              handleEncodeStatusChange={handleEncodeStatusChange}
              content={content}
              shift={shift}
              encodeStatus={encodeStatus}
            />
          ) : type === "Polybius Square" ? (
            <PolybiusForm
              handleContentChange={handleContentChange}
              handleEncodeStatusChange={handleEncodeStatusChange}
              content={content}
              encodeStatus={encodeStatus}
            />
          ) : (
            <SubstitutionForm
              handleContentChange={handleContentChange}
              handleAlphabetChange={handleAlphabetChange}
              handleEncodeStatusChange={handleEncodeStatusChange}
              content={content}
              alphabet={alphabet}
              encodeStatus={encodeStatus}
            />
          )}
          <div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
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
