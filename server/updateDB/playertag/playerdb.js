const Player = require("../../schemas/playertag/player_schema");

module.exports = (player, parsed) => {
  Player.deleteMany({ id: player }, function(err) {
    if (err) console.error(`1 - Save Failed(player) ${player}`, err);
    console.log(`1 - Refreshing Database(player) ${player}`);

    let time = () => {
      let date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      return date.toUTCString();
    };

    Player({
      id: player,

      updatedAt: time(),

      // player: parsed
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

      clan: parsed.clan,

      arena: parsed.arena,

      leagueStatistics: parsed.leagueStatistics,

      currentFavouriteCard: parsed.currentFavouriteCard
    }).save(function(err) {
      if (err) console.error(`2 - Save Failed(player) ${player}`, err);
    });
    console.log(`2 - Saved playerdata ${player}`);
  });
};
