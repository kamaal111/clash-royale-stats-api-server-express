import React from "react";
import propTypes from "prop-types";

import DropDown from "./DropDown";
import NavBar from "../NavBar";

const SearchForm = props => {
  const {
    onSearchChange,
    handleSubmit,
    playerCookie,
    handleSelect,
    selection
  } = props;

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
    <div>
      <NavBar
        firLink={""}
        firTitle={"Home"}
        secLink={`chests/`}
        secTitle={"Chests"}
        thirLink={`battlelog/`}
        thirTitle={"Battlelog"}
      />

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
  playerCookie: propTypes.oneOfType([propTypes.string, propTypes.bool])
};

export default SearchForm;
