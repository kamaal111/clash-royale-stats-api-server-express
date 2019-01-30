import React from "react";

const Playertag = props => {
  const { onSearchChange, handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Playertag;
