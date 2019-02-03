import React from "react";
import propTypes from "prop-types";

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

Playertag.propTypes = {
  onSearchChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  playerCookie: propTypes.oneOfType([propTypes.string, propTypes.bool])
};

export default Playertag;
