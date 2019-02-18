import React from "react";
import propTypes from "prop-types";

const Playertag = props => {
  const { onSearchChange, handleSubmit, playerCookie } = props;

  const holder = () => {
    if (playerCookie === false) return "";
    else return playerCookie;
  };

  const updatebtn = () => {
    if (playerCookie !== false)
      return (
        <button className="update-button" onClick={props.handleUpdate}>
          <i className="fas fa-sync-alt" />
        </button>
      );
    else return <p>Please enter your playertag</p>;
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
      {updatebtn()}
      <select>
        <option>playertag</option>
        <option>clan</option>
      </select>
    </form>
  );
};

Playertag.propTypes = {
  onSearchChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  playerCookie: propTypes.oneOfType([propTypes.string, propTypes.bool])
};

export default Playertag;
