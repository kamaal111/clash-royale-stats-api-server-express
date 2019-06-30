import React from 'react';
import propTypes from 'prop-types';

import './index.css';

import DropDown from './DropDown';

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
    switch (route) {
      case false:
        return '';
      case 'playertag':
        return `#${playerCookie}`;
      case 'clantag':
        return `#${clanCookie}`;
      default:
        break;
    }
  };

  const updatebtn = () => {
    if (route !== false)
      return (
        <button className="update-button" onClick={handleUpdate}>
          <i className="fas fa-sync-alt" />
        </button>
      );
    else
      return (
        <div>
          <p className="update-button-text">Please enter a tag</p>
        </div>
      );
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
          <br className="line-break-1" />
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
