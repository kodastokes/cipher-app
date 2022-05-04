function CaesarForm({
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
      <br />
      <label htmlFor="Shift"> Shift:</label>
      <input
        id="shift"
        name="shift"
        placeholder="Number to Shift By"
        required={true}
        onChange={handleShiftChange}
        value={shift}
      ></input>
    </div>
  );
}

export default CaesarForm;
