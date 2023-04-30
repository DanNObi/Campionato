class Match {
    /** @type {Array<MatchEvent>} */#goals; 
    /** @type {Array<MatchEvent>} */ #subsIn; /** @type {Array<MatchEvent>} */ #subsOut; 
    /** @type {Array<MatchEvent>} */ #yellowCards; /** @type {Array<MatchEvent>} */#expulsions;
    /** @type {Formation} */ #homeFormation; 
    /** @type {Formation} */ #awayFormation;
    /** @type {Array<Participant>} */ #onFieldHomePlayers;
    /** @type {Array<Participant>} */ #onFieldAwayPlayers;
    /** @type {Person} */ #referee;
    /** @type {Date} */ #date;

    /**
     * Partita
     * @param {Date} date 
     * @param {Team} homeTeam
     * @param {Team} awayTeam
     * @param {Person} referee
     */
    constructor(date, homeTeam, awayTeam, referee) {
        this.#date = date;
        this.#homeFormation = new Formation(homeTeam.formation);
        this.#awayFormation = new Formation(awayTeam.formation);
        this.#referee = referee;
        this.#goals = [], this.#subsIn = [], this.#subsOut = [], this.#yellowCards = [], this.#expulsions = [];
    }

    // FUNZIONI CRUD
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

    // FUNZIONI PER L'OTTENIMENTO DI INFORMAZIONI
    //  GIOCATORI
    get getAllOnFieldPlayers() {
        return this.#onFieldHomePlayers.concat(this.#onFieldAwayPlayers);
    }

    // SQUADRE
    /**
     * @returns {Date}
     */
    get date() {
        return this.#date;
    }

    set date(date) {
        this.#date = date;
    }

    get goals() {
        return this.#goals;
    }

    get homeFormation() {
        return this.#homeFormation;
    }

    set homeTeam(team) {
        this.#homeFormation = team.formation;
    }

    set awayTeam(team) {
        this.#awayFormation = team.formation;
    }

    get awayFormation() {
        return this.#awayFormation;
    }

    isHomeTeamVictory() {
        return this.homeTeamGoals > this.awayTeamGoals;
    }

    isDraw() {
        return this.homeTeamGoals === this.awayTeamGoals;
    }
    
    /**
     * @param {Team} team 
     */
    isHomeTeam(team) {
        return team.name === this.#homeFormation.teamName;
    }

    /**
     * @param {Team} team 
     */
    isAwayTeam(team) {
        return team.name === this.#awayFormation.teamName;
    }

    /**
     * Restituisce il numero di goal fatti dalla tua squadra. 
     * Se la squadra non ha partecipato, restituisce -1.
     * @param {Team} Squadra 
     * @returns {Number} NumDiGoal
     */
    teamGoals(team) {
        if (this.isHomeTeam() && this.isAwayTeam()) return -1;
        if (this.isHomeTeam()) return this.homeTeamGoals();
        return this.awayTeamGoals();
    }

    /**
     * @returns {Number}
     */
    get homeTeamGoals() {
        let num = 0;
        this.#goals.map(x => {
            if (this.#homeFormation.players().includes(x.player)) num++;
        });
        return num;
    }

    /**
     * @returns {Number}
     */
    get awayTeamGoals() {
        let num = 0;
        this.#goals.map(x => {
            if (this.#awayFormation.players().includes(x.player)) num++;
        });
        return num;
    }

    /**
     * Restituisce il punteggio di FairPlay per la squadra in casa
     * @returns {Number}
     */
    get homeTeamFairPlayPoints() {
        let points = 0;
        this.#yellowCards.map(x => {
            if (this.#homeFormation.players.includes(x.player)) points-=1;
        });
        this.#expulsions.map(x => {
            if (this.#homeFormation.players.includes(x.player)) points-=3;
        });
        return points;
    }

    /**
     * Restituisce il punteggio per fairPlay della squadra in trasferta
     * @returns {Number}
     */
    get AwayTeamFairPlayPoints() {
        let points = 0;
        this.#yellowCards.map(x => {
            if (this.#awayFormation.players.includes(x.player)) points-=1;
        });
        this.#expulsions.map(x => {
            if (this.#awayFormation.players.includes(x.player)) points-=3;
        });
        return points;
    }
}

class MatchEvent {
    #player; #minute;
    
    /**
     * @param {Participant} player 
     * @param {Number} minute 
     */
    constructor(player, minute) {
        this.#player = player;
        this.#minute = minute;
    };
    
    get player() { return this.#player; }
    get minute() { return this.#minute; }

    /**@param {Participant} player*/ set player(player) {this.#player = player;}
    /**@param {Number} player*/ set minute(minute) {this.#minute = minute;}
}

/**
 *  Classe che simula il gruppo di giocatori che arrivano alla partita.
 */
class Formation {
    #team; #manager; #starters; #bench;

    /**
     * @param {Team} team 
     * @param {Participant} manager 
     * @param {Array<Participant>} starters 
     * @param {Array<Participant>} bench 
     * 
     * OPPURE !
     * 
     * @param {Formation} formazione
     */
    constructor(team, manager, starters, bench) {
        if (arguments.length === 1 && typeof(Formation)) {
            /**@type {Formation}*/ team;
            this.#team = team.team;
            this.#manager = team.manager;
            this.#starters = team.starters;
            this.#bench = team.bench;
        } else {
            this.#team = team;
            this.#manager = manager;
            this.#starters = starters;
            this.#bench = bench;
        }
    }

    /**
     * @returns {Array<Participant>}
     */
    get players() {
        let players = [];
        this.#starters.map(x => players.push(x));
        this.#bench.map(x => players.push(x));
        return players;
    }

    get team() {
        return this.#team;
    }

    get starters() {
        return this.#starters;
    }

    get bench() {
        return this.#bench;
    }

    set starters(starters) {
        this.#starters = starters;
    }

    set bench(bench) {
        this.#bench = bench;
    }

    /**
     * @returns {String}
     */
    get teamName() {
        return this.#team.name;
    }

    get manager() {
        return this.#manager;
    }
}

