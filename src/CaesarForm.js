import Form from "react-bootstrap/Form";

function CaesarForm({ handleShiftChange, shift }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="shift">
        <Form.Label htmlFor="Shift">Shift</Form.Label>
        <Form.Control
          id="shift"
          name="shift"
          as="input"
          placeholder="Number to Shift Text By"
          required={true}
          onChange={handleShiftChange}
          value={shift}
        />
      </Form.Group>
    </>

    // <div>
    //   <label>
    //     What do you want to do?
    //     <select
    //       id="type"
    //       name="type"
    //       required={true}
    //       onChange={handleEncodeStatusChange}
    //       value={encodeStatus}
    //     >
    //       <option>Decode</option>
    //       <option>Encode</option>
    //     </select>
    //   </label>
    //   <br />
    //   <label htmlFor="content">Content: </label>
    //   <textarea
    //     id="content"
    //     name="content"
    //     placeholder="Text to Decode or Encode"
    //     required={true}
    //     rows={2}
    //     onChange={handleContentChange}
    //     value={content}
    //   />
    //   <br />
    //   <label htmlFor="Shift"> Shift:</label>
    //   <input
    //     id="shift"
    //     name="shift"
    //     type="number"
    //     placeholder="Number to Shift By"
    //     required={true}
    //     onChange={handleShiftChange}
    //     value={shift}
    //   ></input>
    // </div>
  );
}

export default CaesarForm;
