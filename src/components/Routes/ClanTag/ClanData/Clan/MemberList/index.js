import React from "react";
// import propTypes from "prop-types";

import Member from "./Member";

const MemberList = props => {
  const { memberList } = props;
  let member;

  if (memberList.length > 0) {
    member = memberList.map(m => (
      <Member
        trophies={m.trophies}
        expLevel={m.expLevel}
        name={m.name}
        tag={m.tag}
        role={m.role}
        arena={m.arena.name}
        clanChestPoints={m.clanChestPoints}
        clanRank={m.clanRank}
        donations={m.donations}
        donationsReceived={m.donationsReceived}
        previousClanRank={m.previousClanRank}
        key={m.clanRank}
      />
    ));
  }
  return <div>{member}</div>;
};

export default MemberList;
