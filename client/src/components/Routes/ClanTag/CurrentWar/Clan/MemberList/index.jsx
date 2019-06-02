import React from "react";
import propTypes from "prop-types";

import Member from "./Member";

const MemberList = props => {
  const { memberList } = props;
  let member;

  if (memberList.length > 0) {
    member = memberList.map(m => (
      <Member
        battlesPlayed={m[0].battlesPlayed}
        cardsEarned={m[0].cardsEarned}
        collectionDayBattlesPlayed={m[0].collectionDayBattlesPlayed}
        name={m[0].name}
        tag={m[0].tag}
        wins={m[0].wins}
        key={m[0].tag}
      />
    ));
  }
  return <div>{member}</div>;
};

MemberList.propTypes = {
  memberList: propTypes.array.isRequired
};

export default MemberList;
