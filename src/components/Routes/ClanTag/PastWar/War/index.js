import React from "react";
import propTypes from "prop-types";

import Standings from "./Standings/index";
import MemberList from "./MemberList/index";

const War = props => (
  <ul>
    <li>Created Date: {props.createdDate}</li>
    <li>Season ID: {props.seasonId}</li>
    <div>
      <Standings standings={props.standings} />
    </div>
    <div>
      <MemberList memberList={props.participants} />
    </div>
  </ul>
);

War.propTypes = {
  createdDate: propTypes.string.isRequired,
  seasonId: propTypes.number.isRequired,
  standings: propTypes.array.isRequired,
  participants: propTypes.array.isRequired
};

export default War;
