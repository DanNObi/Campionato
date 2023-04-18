class TeamSeasons{
    #pastPlayers; #managers; #matchesPlayed; #stadiumAddress; #team;
    constructor(stadiumAddress, pastPlayers, managers, matchesPlayed, team){
        this.#stadiumAddress = stadiumAddress;
        this.#pastPlayers = [];
        this.#managers = [];
        this.#matchesPlayed = [];
		this.#team = team;
    }

    get stadiumAddress(){
        return this.#stadiumAddress;
    }

    set stadiumAddress(stadiumAddress){
        this.#stadiumAddress = stadiumAddress;
    }

    get pastPlayers(){
        return this.#pastPlayers;
    }

    set pastPlayers(pastPlayers){
        this.#pastPlayers = pastPlayers;
    }

    get managers(){
        return this.#managers;
    }

    set managers(managers){
        this.#managers = managers;
    }

    get matchesPlayed(){
        return this.#matchesPlayed;
    }

    set matchesPlayed(matchesPlayed){
        this.#matchePlayed = matchesPlayed;
    }

	get team(){
		return this.#team;
	}
	
	set team(team){
		this.#team = team;
	}

    getWins(){
        let win = 0;
        this.matchesPlayed().forEach(m => m.homeTeamName() == this.#team.name() ? m.isHomeTeamWinner() ? win++ : win+=0 : m.isHomeTeamWinner() ? win+=0 : win++);
        return win;
    }

    getDraws(){
        let draw = 0;
        this.matchesPlayed().forEach(m => m.this.isDraw() ? draw++ : draw+=0);
        return draw;
    }

    getPoints(){
        return this.getWins()*3 + this.getDraws();
    }
}