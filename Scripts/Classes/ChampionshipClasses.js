import { Person, Participant } from "./PersonClasses";
import { Match, MatchEvents } from "./MatchClasses";

export class Championship {
    static #championships = new Array();

    constructor(season, championship) {
        this.#season = season;
        this.#championships.add(championship);
    }

    get season() {
        return this.#season;
    }
    set season(season) {
        this.#season = season;
    }

    getSeason(num) {

    }

    /**
     * @param {Person} searched 
     */
    getPerson(searched) {
        
    }
}

export class Season {
    constructor(teams, groups, edition) {
        this.#teams = teams;
        this.#edition = edition;
        this.#groups = groups;
    }

    get teams() {
        return this.#teams;
    }
    set teams(teams) {
        this.#teams = teams;
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

    getMatchDayRanking(day) {
        
    }
    getRanking() {
        
    }
}

class Group {
    #days;

    /**
     * @param {Array<Day>} days 
     */
    constructor(days) {
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
        matches = [];
        this.#days.reduce(x => matches.concat(x.matches()));
        return matches;
    }

    /**
     * 
     * @param {Day} day 
     */
    getMatchDayRanking(day) {
        allMatches = this.#getAllMatches();
        
    }
    
    getRanking() {

    }
}

export class Day {
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
