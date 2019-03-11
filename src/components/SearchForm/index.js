import React from "react";
import propTypes from "prop-types";

import DropDown from "./DropDown";

const SearchForm = props => {
  const {
    onSearchChange,
    handleSubmit,
    playerCookie,
    handleSelect,
    selection,
    route,
    clanCookie,
    handleUpdate
  } = props;

  const holder = () => {
    if (route === false) return "";
    else if (route === "playertag") return playerCookie;
    else return clanCookie;
  };

  const updatebtn = () => {
    if (route !== false)
      return (
        <button className="update-button" onClick={handleUpdate}>
          <i className="fas fa-sync-alt" />
        </button>
      );
    else return <p>Please enter your playertag</p>;
  };

  return (
    <div>
      <form className="form-playertag" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="playertag"
            onChange={onSearchChange}
            placeholder={holder()}
          />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
          {updatebtn()}

          <DropDown handleSelect={handleSelect} selection={selection} />
        </label>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSearchChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  playerCookie: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  handleSelect: propTypes.func.isRequired,
  selection: propTypes.string,
  handleUpdate: propTypes.func.isRequired,
  clanCookie: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  route: propTypes.oneOfType([propTypes.string, propTypes.bool])
};

export default SearchForm;
