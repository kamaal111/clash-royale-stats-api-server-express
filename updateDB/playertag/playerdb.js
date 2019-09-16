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

    const arenaUrl = arena => {
      const [name, number] = arena.split(' ');

      const url = name =>
        `https://royaleapi.github.io/cr-api-assets/arenas/${name}.png`;

      if (!isNaN(Number(number))) {
        return url([name, number].join('').toLowerCase());
      }

      switch (name.toLowerCase()) {
        case 'legandary':
          return url('arena11');
        case 'challenger':
          switch (number) {
            case 'I':
              return url('arena12');
            case 'II':
              return url('arena13');
            case 'III':
              return url('arena14');
            default:
              return '';
          }
        case 'master':
          switch (number) {
            case 'I':
              return url('arena15');
            case 'II':
              return url('arena16');
            case 'III':
              return url('arena17');
            default:
              return '';
          }
        case 'champion':
          return url('arena18');
        case 'grand':
          return url('arena19');
        case 'ultimate':
          return url('arena20');
        default:
          return '';
      }
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

      arena: { ...parsed.arena, arenaUrl: arenaUrl(parsed.arena.name) },

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
