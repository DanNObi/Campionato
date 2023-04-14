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