class Team {
    #name; #stadiumAddress; #trophies; #pastSeasons; #matches; #players; #manager;
	
    constructor(name, stadiumAddress, trophies, pastSeasons, matches, players, manager){
        this.name = name;
        this.stadiumAddress = stadiumAddress;
        this.trophies = [];
        this.pastSeasons = [];
        this.#matches = [];
        this.#players = [];
		this.#manager = manager;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }

    get stadiumAddress(){
        return this.#stadiumAddress;
    }

    set stadiumAddress(stadiumAddress){
        this.#stadiumAddress = stadiumAddress;
    }

    get trophies(){
        return this.#trophies;
    }

    set trophies(trophies){
        this.#trophies = trophies;
    }

    get nTrophies(){
        return this.#trophies.lenght(); // Ho fatto questo metodo nel caso servisse
    }

    get pastSeasons(){
        return this.#pastSeasons;
    }

    set pastSeasons(pastSeasons){
        this.#pastSeasons = pastSeasons;
    }

    get matches(){
        return this.#matches;
    }

    set matches(matches){
        this.#matches = matches;
    }

    get players(){
        return this.#players;
    }

    set players(players){
        this.#players = players;
    }

    get manager(){
        return this.#manager;
    }

    getWins(){
        let win = 0;
        this.matches().forEach(m => m.homeTeamName() ==  this.#name ? m.isHomeTeamWinner() ? win++ : win+=0 : m.isHomeTeamWinner() ? win+=0 : win++);
        return win;
    }

    getLosses(){
        let lose = 0;
        this.matches().forEach(m => m.homeTeamName() == this.#name ? m.isHomeTeamWinner() ? lose+=0 : lose++ : m.isHomeTeamWinner() ? lose++ : lose+=0);
        return lose;
    }

    getDraws(){
        let draw = 0;
        this.matches().forEach(m => m.isDraw() ? draw++ : draw+=0);
        return draw;
    }

    getPoints(){
        return this.getWins()*3 + this.getDraws();
    }

    getGoalDifference(){
        let gF = 0, gS = 0;
        this.matches().forEach(m => m.goals.forEach(g => this.players.includes(g) ? gF++ : gS++));
        return gF - gS;
    }

    signPlayer(player){
        this.#players.add(player);
    }

    sellPlayer(player){
        this.#players.filter(p => p != player);
    }
	
	signManager(manager){
		this.#manager = manager;
	}
	
	sackManager(){
		this.#manager = "Vacant";
	}
	
}
