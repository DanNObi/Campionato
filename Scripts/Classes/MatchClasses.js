export default class Match {
    #goals; #subsIn; #subsOut; #yellowCards; #expulsions; 
    #homeFormation; #awayFormation;
    #onFieldHomePlayers; #onFieldAwayPlayers;
    constructor(date, homeFormation, awayFormation) {
        this.date = date;
        this.#homeFormation = homeFormation;
        this.#awayFormation = awayFormation;
        this.#goals, this.#subsIn, this.#subsOut, this.#yellowCards = [];
    }

    addGoal(player, minute) {
        this.#goals.push(new MatchEvent(player, minute));
    }

    addEnteringPlayer(player, minute) {
        this.#subsIn.push(new MatchEvent(player, minute));
    }

    addExitingPlayer(player, minute) {
        this.#subsOut.push(new MatchEvent(player, minute));
    }

    addYellowCard(player, minute) {
        this.#yellowCards.push(new MatchEvent(player, minute));
        player.yellowCards+=1;
    }

    addExpulsion(player, minute) {
        this.#expulsions.push(new MatchEvent(player, minute));
    }

    get #getAllOnFieldPlayers() {
        return this.#onFieldHomePlayers.concat(this.#onFieldAwayPlayers);
    }
}

export default class MatchEvent {
    #player; #minute;
    constructor(player, minute) {
        this.#player = player;
        this.#minute = minute;
    };
    
    get #player() { return this.#player; }
    get #minute() { return this.#minute; }
}
