class Championship {
    static _championships = new Array();

    constructor(season, championship) {
        this._season = season;
        this._championships.add(championship);
    }

    get season() {
        return this._season;
    }
    set season(season) {
        this._season = season;
    }

    getSeason(num) {

    }
    getPerson(searched) {
        
    }
}