import Form from "react-bootstrap/Form";

function PolybiusForm({
  handleContentChange,
  handleEncodeStatusChange,
  content,
  encodeStatus,
}) {
  return (
    <>
      {/* <Form.Group className="mb-3" controlId="content">
        <Form.Label htmlFor="content">Content</Form.Label>
        <Form.Control
          id="content"
          name="content"
          required={true}
          as="textarea"
          rows={2}
          placeholder="Text to Decode or Encode"
          onChange={handleContentChange}
          value={content}
        />
      </Form.Group> */}
    </>
  );
}

export default PolybiusForm;

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
      </div> */
