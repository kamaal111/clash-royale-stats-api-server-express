import React from 'react';
import propTypes from 'prop-types';

const DropDown = props => {
  const { selection, handleSelect } = props;

  return (
    <select className="tag-select" value={selection} onChange={handleSelect}>
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
