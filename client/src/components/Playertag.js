import React from "react";

const Playertag = props => {
  const { onSearchChange, handleSubmit, playerCookie } = props;
  const holder = () => {
    if (playerCookie === false) return "";
    else return playerCookie;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="playertag"
            onChange={onSearchChange}
            placeholder={holder()}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Playertag;
