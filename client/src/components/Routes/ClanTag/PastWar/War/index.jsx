import React from "react";
import propTypes from "prop-types";

import Standings from "./Standings/index";
import MemberList from "./MemberList/index";

const War = props => {
  let time = date => {
    let s = date.split("");

    let year = `${s.slice(0, 4).join("")}`;
    let month = `${s.slice(4, 6).join("")}`;
    let day = `${s.slice(6, 8).join("")}`;
    let hour = `${s.slice(9, 11).join("")}`;
    let minute = `${s.slice(11, 13).join("")}`;
    let second = `${s.slice(13, 15).join("")}`;

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
