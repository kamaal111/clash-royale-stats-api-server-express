import React from "react";
import propTypes from "prop-types";

import Standings from "./Standings/index";
import MemberList from "./MemberList/index";

const War = props => {
  let time = date => {
    let s = date.split("");

    let year = `${s[0]}${s[1]}${s[2]}${s[3]}`;
    let month = `${s[4]}${s[5]}`;
    let day = `${s[6]}${s[7]}`;
    let hour = `${s[9]}${s[10]}`;
    let minute = `${s[11]}${s[12]}`;
    let second = `${s[13]}${s[14]}`;

    return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
  };

  return (
    <ul>
      <li>Created Date: {time(props.createdDate)}</li>
      <li>Season ID: {props.seasonId}</li>
      <div>
        <Standings standings={props.standings} />
      </div>
      <div>
        <MemberList memberList={props.participants} />
      </div>
    </ul>
  );
};

War.propTypes = {
  createdDate: propTypes.string.isRequired,
  seasonId: propTypes.number.isRequired,
  standings: propTypes.array.isRequired,
  participants: propTypes.array.isRequired
};

export default War;
