import React from "react";
import propTypes from "prop-types";

const DropDown = props => {
  return (
    <select
      className={"tag-select"}
      value={props.selection}
      onChange={props.handleSelect}
    >
      <option value="playertag">Playertag</option>
      <option value="clantag">clantag</option>
    </select>
  );
};

DropDown.propTypes = {
  selection: propTypes.string,
  handleSelect: propTypes.func.isRequired
};

export default DropDown;
