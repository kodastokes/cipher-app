import React, { useState } from "react";
import CaesarForm from "./CaesarForm";
import PolybiusForm from "./PolybiusForm";
import SubstitutionForm from "./SubstitutionForm";
import CaesarText from "./CaesarText";
import PolybiusText from "./PolybiusText";
import SubstitutionText from "./SubstitutionText";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function InputForm({ createInfo }) {
  const [type, setType] = useState("Caesar Shift");
  const handleTypeChange = (event) => {
    setType(event.target.value)
    createInfo({})
    setContent("");
    setShift("");
    setEncodeStatus("Encode");
    setAlphabet("");
  };

  const [content, setContent] = useState("");
  const handleContentChange = (event) => setContent(event.target.value);

  const [shift, setShift] = useState("");
  const handleShiftChange = (event) => setShift(event.target.value);

  const [encodeStatus, setEncodeStatus] = useState("Encode");
  const handleEncodeStatusChange = (event) =>
    setEncodeStatus(event.target.value);

  const [alphabet, setAlphabet] = useState("");
  const handleAlphabetChange = (event) => setAlphabet(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createInfo({ type, content, shift, encodeStatus, alphabet });
    setContent("");
    setShift(shift);
    setEncodeStatus(encodeStatus);
    setAlphabet(alphabet);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setContent("");
    setShift("");
    setEncodeStatus("Encode");
    setAlphabet("");
    createInfo({})
  };

  return (
    <>
      <Form onSubmit={handleSubmit} onReset={handleReset}>
        <Form.Group className="mb-3" controlId="type">
          <Form.Label>Type of Cipher</Form.Label>
          <Form.Select
            aria-label="Default select example"
            id="type"
            name="type"
            required={true}
            onChange={handleTypeChange}
            value={type}
          >
            <option>Caesar Shift</option>
            <option>Polybius Square</option>
            <option>Substitution Cypher</option>
          </Form.Select>
          <Form.Text>
            {type === "Caesar Shift" ? (
              <CaesarText />
            ) : type === "Polybius Square" ? (
              <PolybiusText />
            ) : (
              <SubstitutionText />
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="type">
          <Form.Label>What would you like to do?</Form.Label>
          <Form.Select
            aria-label="Default select example"
            id="type"
            name="type"
            required={true}
            onChange={handleEncodeStatusChange}
            value={encodeStatus}
          >
            <option>Encode</option>
            <option>Decode</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="content">
          <Form.Label htmlFor="content">Content</Form.Label>
          <Form.Control
            id="content"
            name="content"
            required={true}
            as="textarea"
            rows={2}
            placeholder="Text to Encode or Decode"
            onChange={handleContentChange}
            value={content}
          />
        </Form.Group>
        {type === "Caesar Shift" ? (
          <CaesarForm handleShiftChange={handleShiftChange} shift={shift} />
        ) : type === "Polybius Square" ? (
          <PolybiusForm />
        ) : (
          <SubstitutionForm
            handleAlphabetChange={handleAlphabetChange}
            alphabet={alphabet}
          />
        )}

        <Button className="m-2" variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="outline-primary" type="reset">
          Reset
        </Button>
      </Form>
    </>
  );
}

export default InputForm;

// <>
//   <form name="create" onSubmit={handleSubmit} onReset={handleReset}>
//     <fieldset>
//       {/* <legend>Cypher Shifter</legend> */}
//       <div>
//         <label htmlFor="type">Type: </label>
//         <select
//           id="type"
//           name="type"
//           required={true}
//           onChange={handleTypeChange}
//           value={type}
//         >
//           <option>Caesar Shift</option>
//           <option>Polybius Square</option>
//           <option>Substitution Cypher</option>
//         </select>
//       </div>
//       {type === "Caesar Shift" ? (
//         <CaesarForm
//           handleContentChange={handleContentChange}
//           handleShiftChange={handleShiftChange}
//           handleEncodeStatusChange={handleEncodeStatusChange}
//           content={content}
//           shift={shift}
//           encodeStatus={encodeStatus}
//         />
//       ) : type === "Polybius Square" ? (
//         <PolybiusForm
//           handleContentChange={handleContentChange}
//           handleEncodeStatusChange={handleEncodeStatusChange}
//           content={content}
//           encodeStatus={encodeStatus}
//         />
//       ) : (
//         <SubstitutionForm
//           handleContentChange={handleContentChange}
//           handleAlphabetChange={handleAlphabetChange}
//           handleEncodeStatusChange={handleEncodeStatusChange}
//           content={content}
//           alphabet={alphabet}
//           encodeStatus={encodeStatus}
//         />
//       )}
//       <div>
//         <button type="submit">Submit</button>
//         <button type="reset">Reset</button>
//       </div>
//     </fieldset>
//   </form>
//   </>
