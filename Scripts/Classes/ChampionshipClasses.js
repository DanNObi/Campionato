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


