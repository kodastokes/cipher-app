import Form from "react-bootstrap/Form";

function SubstitutionForm({ handleAlphabetChange, alphabet }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="alphabet">
        <Form.Label htmlFor="albphabet">Cypher Alphabet</Form.Label>
        <Form.Control
          id="alphabet"
          name="alphabet"
          as="input"
          placeholder="Enter 26 Character Alphabet"
          required={true}
          onChange={handleAlphabetChange}
          value={alphabet}
          maxLength={26}
        />
      </Form.Group>
    </>
  );
}

export default SubstitutionForm;

/* <div>
        <label>
          What do you want to do?
          <select
            id="type"
            name="type"
            required={true}
            onChange={handleEncodeStatusChange}
            value={encodeStatus}
          >
            <option>Decode</option>
            <option>Encode</option>
          </select>
        </label>
        <br />
        <label htmlFor="content">Content: </label>
        <textarea
          id="content"
          name="content"
          placeholder="Text to Decode or Encode"
          required={true}
          rows={2}
          onChange={handleContentChange}
          value={content}
        />
        <br />
        <label htmlFor="Alphabet"> Cypher Alphabet:</label>
        <input
          type="text"
          id="Alphabet"
          name="Alphabet"
          placeholder="Alphabet to Use"
          required={true}
          onChange={handleAlphabetChange}
          value={alphabet}
          //minLength={26}
          maxLength={26}
          size={26}
        ></input>
      </div> */
