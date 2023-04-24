import { Person, Participant } from "./PersonClasses.js";
import { Match, MatchEvent } from "./MatchClasses.js";
import { Team, Address } from "./TeamClasses.js";

export class Championship {
    static #championships = new Array();
    /** @type {Array<Season>}*/#seasons;

    constructor(season, championship) {
        this.#seasons = season;
        this.#championships.add(championship);
    }

    get seasons() {
        return this.#seasons;
    }
    set seasons(season) {
        this.#seasons = season;
    }

    getSeason(num) {
        let season = this.#seasons.filter(x => x.edition() === num);
        if (season.length === 0) return this.#seasons[0];
        return season[0];
    }
}

export class Season {
    /**@type {Array<Group>}*/ #groups;
    /**@type {Number} */ #edition;

    constructor(groups, edition) {
        this.#edition = edition;
        this.#groups = groups;
    }

    get edition() {
        return this.#edition;
    }
    set edition(edition) {
        this.#edition = edition;
    }

    get groups() {
        return this.#groups;
    }
    set groups(groups) {
        this.#groups = groups;
    }

    /**
     * Restituisce una una matrice con più liste dentro.
     * Ogni lista ha le squadre ordinate in base ai criteri
     * della classifica (Punti, differenza reti, gol ecc...)
     * @return {Array<Array<Team>>} gruppiOrdinati
     */
    getRanking() {
        let ranking = [];
        this.#groups.map(x => ranking.push(x.ranking()));
        return ranking;
    }
}

export class Group {
    #teams; #days;

    /**
     * @param {Array<Team>} teams
     * @param {Array<Day>} days 
     */
    constructor(teams, days) {
        this.#teams = teams;
        this.#days = days;
    }

    get days() {
        return this.days;
    }
    set days(days) {
        this.days = days;
    }

    /**
     * @returns {Array<Match>}
     */
    #getAllMatches() {
        let matches = [];
        this.#days.reduce(x => matches.concat(x.matches()));
        return matches;
    }
    
    /**
     * Restituisce un array ordinato in base ai seguenti criteri:
     *  1) Punti
     *  2) Differenza Reti
     *  3) Numero di Gol
     *  4) Testa a testa
     *  5) Punti per la sportività
     *  6) A caso
     * @returns {Array<Team>}
     */
    get ranking() {
        /** @type {Array<Team>}*/ let ranking = [];
        this.#teams.map(x => ranking.push(x));
        ranking.sort((x, y) => {
            // Determinazione della posizione
            // Caso 1: Punti
            if (x.getPoints() > y.getPoints()) return 1;
            if (x.getPoints() < y.getPoints()) return -1;
            // Caso 2: Differenza Reti
            if (x.getGoalDifference() > y.getGoalDifference()) return 1;
            if (x.getGoalDifference() < y.getGoalDifference()) return -1;
            // Caso 3: Numero di Gol
            if (x.getNumberOfGoals() > y.getNumberOfGoals()) return 1;
            if (x.getNumberOfGoals() < y.getNumberOfGoals()) return -1;
            // Caso 4: H2H
            let h2h = this.#H2H(x, y);
            if (h2h > 0) return 1;
            if (h2h < 0) return -1;
            // Caso 5: Fair Play
            if (x.fairPlayPoints() > y.fairPlayPoints()) return 1;
            if (y.fairPlayPoints() > x.fairPlayPoints()) return -1;
            // Caso 6: A caso
            return Math.random() - 0.5;
        });
    }

    /**
    * Date due squadre, restituisce un valore positivo se la prima squadra ha vinto di più,
    * un valore negativo se la seconda ha vinto più volte e 0 se sono pari.
    * @param {Team} team1
    * @param {Team} team2
    */
    #H2H(team1, team2) {
        let team1Wins = 0, team2Wins = 0;
        let matchList = this.#getAllMatches();
        matchList.filter(x => (x.isHomeTeam(team1) || x.isAwayTeam(team1)));
        matchList.filter(x => (x.isHomeTeam(team2) || x.isAwayTeam(team2)));
        matchList.map(x => {
            if ((x.isHomeTeam(team1) && x.isHomeTeamVictory()) || (x.isAwayTeam(team1) && !x.isHomeTeamVictory())) team1Wins++; 
        });
        matchList.map(y => {
            if ((y.isHomeTeam(team1) && y.isHomeTeamVictory()) || (y.isAwayTeam(team1) && !y.isHomeTeamVictory())) team2Wins++;
        });
        return team1Wins - team2Wins;
    }

    rankingBeforeDay(date) {
        let ranking = this.#teams;
        ranking.sort((team1, team2) => {
            if (team1.pointsBeforeDate(date) >= team2.pointsBeforeDate(date)) return 1;
            return -1;
        })
    }
}

export class Day {
    #matches;

    constructor(matches) {
        this.#matches = matches;
    }

    /**
     * @returns {Array<Match>}
     */
    get matches() {
        return this.matches;
    }

    /**
     * @param {Array<Match>} listaPartite
     */
    set matches(matches) {
        this.matches = matches;
    }
}
