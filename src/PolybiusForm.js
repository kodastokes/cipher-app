function PolybiusForm({
  handleContentChange,
  handleEncodeStatusChange,
  content,
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
        rows={3}
        onChange={handleContentChange}
        value={content}
      />
    </div>
  );
}

export default PolybiusForm;
