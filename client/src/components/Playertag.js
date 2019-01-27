import React from "react";

const Playertag = props => {
  const { onSearchChange, handleSubmit } = props;

  return (
    <form
      id="playertag"
      // action="http://localhost:3001/api/welcome"
      method="post"
      onSubmit={handleSubmit}
    >
      <label>
        <input
          type="text"
          name="playertag"
          onChange={onSearchChange}
          placeholder="Playertag please"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Playertag;
