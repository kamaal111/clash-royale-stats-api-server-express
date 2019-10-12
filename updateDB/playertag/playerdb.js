/* eslint-disable indent */
const Player = require('../../schemas/playertag/player_schema');

module.exports = async (player, parsed) => {
  try {
    const timeNow = () => {
      let date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60);

      return date.toUTCString();
    };

    const modifiedClanData =
      typeof parsed.clan === 'undefined'
        ? parsed.clan
        : {
            ...parsed.clan,
            badgeUrl: `https://cdn.statsroyale.com/images/badges/${parsed.clan.badgeId}.png`,
          };

    const leagueLadder = trophies => {
      const url = name =>
        `https://royaleapi.github.io/cr-api-assets/arenas/${name}.png`;

      if (trophies <= 3999) return '';
      if (trophies >= 4000 && trophies <= 4299) return url('arena13');
      if (trophies >= 4300 && trophies <= 4599) return url('arena14');
      if (trophies >= 4600 && trophies <= 4999) return url('arena15');
      if (trophies >= 5000 && trophies <= 5299) return url('arena16');
      if (trophies >= 5300 && trophies <= 5599) return url('arena17');
      if (trophies >= 5600 && trophies <= 5999) return url('arena18');
      if (trophies >= 6000 && trophies <= 6299) return url('arena19');
      if (trophies >= 6300 && trophies <= 6599) return url('arena20');
      if (trophies >= 6600 && trophies <= 6999) return url('arena21');
      if (trophies >= 7000) return url('arena22');
      return '';
    };

    const condition = { id: player };
    const update = {
      id: player,

      updatedAt: timeNow(),

      name: parsed.name,
      expLevel: parsed.expLevel,
      trophies: parsed.trophies,
      bestTrophies: parsed.bestTrophies,
      wins: parsed.wins,
      losses: parsed.losses,
      battleCount: parsed.battleCount,
      threeCrownWins: parsed.threeCrownWins,
      challengeCardsWon: parsed.challengeCardsWon,
      challengeMaxWins: parsed.challengeMaxWins,
      tournamentCardsWon: parsed.tournamentCardsWon,
      tournamentBattleCount: parsed.tournamentBattleCount,
      role: parsed.role,
      donations: parsed.donations,
      donationsReceived: parsed.donationsReceived,
      totalDonations: parsed.totalDonations,
      warDayWins: parsed.warDayWins,
      clanCardsCollected: parsed.clanCardsCollected,

      clan: modifiedClanData,

      arena: { ...parsed.arena, arenaUrl: leagueLadder(parsed.trophies) },

      leagueStatistics: parsed.leagueStatistics,

      currentFavouriteCard: parsed.currentFavouriteCard,

      currentDeck: parsed.currentDeck,
    };

    await Player.findOneAndDelete(condition);

    const createPlayer = await Player.create(update);
    console.log(`Saved playerdata ${player}`);
    return { player: await createPlayer.toJSON() };
  } catch (error) {
    return console.error(`Save Failed(player) ${player}`, error);
  }
};
