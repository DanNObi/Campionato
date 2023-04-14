class Season {
    constructor(teams, groups, edition) {
        this._teams = teams;
        this._edition = edition;
        this._groups = groups;
    }

    get teams() {
        return this._teams;
    }
    set teams(teams) {
        this._teams = teams;
    }

    get edition() {
        return this._edition;
    }
    set edition(edition) {
        this._edition = edition;
    }

    get groups() {
        return this._groups;
    }
    set groups(groups) {
        this._groups = groups;
    }

    getMatchDayRanking(day) {
        
    }
    getRanking() {
        
    }
}