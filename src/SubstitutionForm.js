import Form from "react-bootstrap/Form";

function SubstitutionForm({ handleAlphabetChange, alphabet }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="alphabet">
        <Form.Label htmlFor="albphabet">Cipher Alphabet</Form.Label>
        <Form.Control
          id="alphabet"
          name="alphabet"
          as="input"
          placeholder="Enter 26 Unique Characters Here"
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
