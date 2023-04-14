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