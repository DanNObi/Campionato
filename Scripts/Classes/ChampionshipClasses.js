class Championship {
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
    getPerson(searched) {
        
    }
}

class Season {
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
    constructor(days) {
        this.#days = days;
    }

    get days() {
        return this.days;
    }
    set days(days) {
        this.days = days;
    }

    getMatchDayRanking(day) {

    }
    
    getRanking() {

    }
}

class Day {
    constructor(matches) {
        this.#matches = matches;
    }

    get matches() {
        return this.matches;
    }
    set matches(matches) {
        this.matches = matches;
    }
}


