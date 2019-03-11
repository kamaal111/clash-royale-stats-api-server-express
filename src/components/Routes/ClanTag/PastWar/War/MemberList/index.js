import React from "react";
import propTypes from "prop-types";

import Member from "../../../CurrentWar/Clan/MemberList/Member";

const MemberList = props => {
  const { memberList } = props;
  let member;
  let i = 0;

  if (memberList.length > 0) {
    member = memberList.map(m => (
      <Member
        battlesPlayed={m.battlesPlayed}
        cardsEarned={m.cardsEarned}
        collectionDayBattlesPlayed={m.collectionDayBattlesPlayed}
        name={m.name}
        tag={m.tag}
        wins={m.wins}
        key={i++}
      />
    ));
  }
  return <div>{member}</div>;
};

MemberList.propTypes = {
  memberList: propTypes.array.isRequired
};

export default MemberList;
