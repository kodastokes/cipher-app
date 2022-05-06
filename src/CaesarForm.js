import Form from "react-bootstrap/Form";

function CaesarForm({ handleShiftChange, shift }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="shift">
        <Form.Label>Shift</Form.Label>
        <Form.Control
          name="shift"
          as="input"
          placeholder="Number to Shift Text By"
          required={true}
          onChange={handleShiftChange}
          value={shift}
        />
      </Form.Group>
    </>
  );
}

export default CaesarForm;
