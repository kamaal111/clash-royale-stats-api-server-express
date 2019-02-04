import React from "react";
import propTypes from "prop-types";

const Playertag = props => {
  const { onSearchChange, handleSubmit, playerCookie } = props;
  const holder = () => {
    if (playerCookie === false) return "";
    else return playerCookie;
  };

  return (
    <form className="form-playertag" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="playertag"
          onChange={onSearchChange}
          placeholder={holder()}
        />
      </label>
      <button type="submit">
        <i className="fas fa-search" />
      </button>
    </form>
  );
};

Playertag.propTypes = {
  onSearchChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  playerCookie: propTypes.oneOfType([propTypes.string, propTypes.bool])
};

export default Playertag;
