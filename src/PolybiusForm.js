function PolybiusForm({
  handleContentChange,
  handleShiftChange,
  handleCheckedChange,
  content,
  shift,
  checked,
}) {
  return (
    <div>
      <label>
        What do you want to do?
        <select
          id="type"
          name="type"
          required={true}
          onChange={handleCheckedChange}
          value={checked}
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
        placeholder="Text to Encode or Decode"
        required={true}
        rows={3}
        onChange={handleContentChange}
        value={content}
      />
    </div>
  );
}

export default PolybiusForm;
