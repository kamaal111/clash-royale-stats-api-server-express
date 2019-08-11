const Player = require('../../schemas/playertag/player_schema');

module.exports = (player, parsed) => {
    const timeNow = () => {
        let date = new Date();
        date.setTime(date.getTime() + 24 * 60 * 60);

        return date.toUTCString();
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

        clan: parsed.clan,

        arena: parsed.arena,

        leagueStatistics: parsed.leagueStatistics,

        currentFavouriteCard: parsed.currentFavouriteCard,
    };
    const options = { upsert: true };

    Player.findOneAndUpdate(condition, update, options, error => {
        if (error) {
            return console.error(`Save Failed(player) ${player}`, error);
        }

        console.log(`Saved playerdata ${player}`);
    });
};