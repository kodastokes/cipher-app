function SubstitutionForm({
  handleContentChange,
  handleAlphabetChange,
  handleEncodeStatusChange,
  content,
  alphabet,
  encodeStatus,
}) {
  return (
    <div>
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
    </div>
  );
}

export default SubstitutionForm;
