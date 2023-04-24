// Classi relative alle squadre
import { Championship, Season, Group, Day } from "./ChampionshipClasses.js";
import { Person, Participant } from "./PersonClasses.js";
import {Match, MatchEvent, Formation} from './MatchClasses.js'

export class Team {
    /** @type {String} */ #name; 
    /** @type {Address} */ #stadiumAddress; 
    /** @type {Trophy} */ #trophies; 
    /** @type {TeamSeasons} */ #pastSeasons; 
    /** @type {Array<Match>} */ #matches; 
    /** @type {Array<Participant>} */ #players; 
    /** @type {Participant} */ #manager;
    /** @type {string} */ #crest;
    /**@type {Formation}*/ #formation;
	
    /**
     * @param {String} name 
     * @param {Address} stadiumAddress 
     * @param {string} url Link all'Immagine dello stemma
     * @param {Array<Match>} matches 
     * @param {Array<Participant>} players 
     * @param {Participant} manager 
     */
    constructor(name, stadiumAddress, crest, trophies, matches, players, manager) {
        this.name = name;
        this.stadiumAddress = stadiumAddress;
        this.#crest = crest;
        if (arguments.length === 7) {
            this.trophies = trophies;
            this.pastSeasons = pastSeasons;
            this.#matches = matches;
            this.#players = players;
		    this.#manager = manager;
        } else {
            this.#trophies = [];
            this.#pastSeasons = [];
            this.#matches = [];
            this.#players = [];
	    this.#manager = "Vacant";
        }

        this.#formation = new Formation(this, this.#manager, [], []);
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get stadiumAddress() {
        return this.#stadiumAddress;
    }

    set stadiumAddress(stadiumAddress) {
        this.#stadiumAddress = stadiumAddress;
    }

    get crest() {
        return this.#crest;
    }

    /**
     * @param {string} link
     */
    set crest(crest) {
        this.#crest = crest;
    }

    get formation() {
        return this.#formation;
    }

    /**
     * @param {Formation} formation
     */
    set formation(formation) {
        this.#formation = formation;
    }

    get trophies() {
        return this.#trophies;
    }

    set trophies(trophies) {
        this.#trophies = trophies;
    }

    get nTrophies() {
        return this.#trophies.lenght(); // Ho fatto questo metodo nel caso servisse
    }

    get pastSeasons() {
        return this.#pastSeasons;
    }

    set pastSeasons(pastSeasons) {
        this.#pastSeasons = pastSeasons;
    }

    get matches() {
        return this.#matches;
    }

    set matches(matches) {
        this.#matches = matches;
    }

    get players() {
        return this.#players;
    }

    set players(players) {
        this.#players = players;
    }

    /**
     * @returns {Participant} Allenatore
     * @returns {String} Se il posto e' vacante
     */
    get manager() {
        return this.#manager;
    }

    /**
     * @return {Number} goals
     */
    getNumberOfGoals() {
        let goals = 0;
        this.#matches.map(x => x.isHomeTeam(this) ? goals+=x.homeTeamGoals() : goals+=x.awayTeamGoals());
        return goals;
    }

    /**
     * 
     * @returns {Number} numeroDiVittorie
     */
    getWins() {
        let win = 0;
        this.matches().forEach(m => m.homeTeamName() ==  this.#name ? m.isHomeTeamWinner() ? win++ : win+=0 : m.isHomeTeamWinner() ? win+=0 : win++);
        return win;
    }

    /**
     * 
     * @returns {Number} numeroDiSconfitte
     */
    getLosses() {
        let losses = 0;
        this.matches().forEach(m => m.homeTeamName() == this.#name ? m.isHomeTeamWinner() ? lose+=0 : lose++ : m.isHomeTeamWinner() ? lose++ : lose+=0);
        return losses;
    }

    /**
     * Numero di pareggi
     * @returns {Number} numeroDiPareggi
     */
    getDraws() {
        let draw = 0;
        this.matches().forEach(m => m.isDraw() ? draw++ : draw+=0);
        return draw;
    }

    getPoints() {
        return this.getWins()*3 + this.getDraws();
    }

    getGoalDifference() {
        let gF = 0, gS = 0;
        this.matches().forEach(m => m.goals.forEach(g => this.players.includes(g) ? gF++ : gS++));
        return gF - gS;
    }

    get fairPlayPoints() {
        let fairPlay = 0;
        this.#matches.map(x => x.isHomeTeam(this) ? fairPlay+=x.homeTeamFairPlayPoints() : fairPlay+=x.AwayTeamFairPlayPoints());
        return fairPlay;
    }

    pointsBeforeDate(Date) {
        let matches = this.#matches.filter(x => x.date() < Date);
        let wins = 0, draws = 0;
        matches.map(x => x.isDraw ? draws++ : draws+=0);
        matches.forEach(m => m.homeTeamName() ==  this.#name ? m.isHomeTeamWinner() ? wins++ : wins+=0 : m.isHomeTeamWinner() ? wins+=0 : wins++);
        return wins*3 + draws;
    }

    signPlayer(player) {
        this.#players.add(player);
    }

    sellPlayer(player) {
        this.#players.filter(p => p != player);
    }
	
	signManager(manager) {
		this.#manager = manager;
	}
	
	sackManager() {
		this.#manager = "Vacant";
	}
	
}

export class Address{
    #street;
    #number;
    constructor(street,number){
        this.#street = street;
        this.#number = number;
    }

    get street(){
        return this.#street;
    }

    set street(street){
        this.#street = street;
    }

    get number(){
        return this.#number;
    }

    set number(number){
        this.#number = number;
    }
}

export class Trophy {
    #name; #edition;
    
    /**
     * Classe che descrive
     * @param {String} name
     * @param {Number} edition
     */

    constructor(name, edition){
        this.#name = name;
        this.#edition = edition;

    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
    
    get edition(){
        return this.#edition;
    }

    set edition(edition){
        this.#edition = edition;
    }
}

