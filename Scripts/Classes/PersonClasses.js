// Classi per le persone
class Person {
  /**@type {string}*/_firstName; 
  /**@type {string}*/_lastName; 
  /**@type {string}*/_image;
  /**@type {Date}*/ _dateOfBirth;

  constructor(firstName, lastName, dateOfBirth, image) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._dateOfBirth = dateOfBirth;
    this._image = image;
    if (typeof(image) === "undefined") this._image = 'https://icon-library.com/images/my-account-icon-png/my-account-icon-png-23.jpg';
  }
  
  get firstName() {
    return this._firstName;
  }
  
  get lastName() {
    return this._lastName;
  }
  
  get dateOfBirth() {
    return this._dateOfBirth;
  }

  get image() {
    return this._image;
  }
  
}

// Non ha senso dividere giocatori ed allenatori quando
// spesso gli allenatori sono ex-giocatori e alcuni giocatori
// fungono contemporaneamente come allenatori!
class Participant extends Person {

    /**@type {string}*/ #role; 
    /**@type {Number}*/ #number; 
    /**@type {Array<Team>}*/ #playerStints; 
    /**@type {Array<Team>}*/ #managerStints;

    constructor(firstName, lastName, dateOfBirth, image, managerStints, playerStint,  role, number) { // Costruttore per giocatori
        super(firstName, lastName, dateOfBirth, image);
        switch (arguments.length) {
            case 5:
                this.#managerStints = managerStints;
                this.#playerStints = [];
                this.#role = "Nessuno";
                this.#number = -1;
            break;

            case 8:
                this.#managerStints = managerStints;
                this.#playerStints = playerStint;
                this.#role = role;
                this.#number = number;
                break;
                
            default:
                this.#managerStints = [];
                this.#playerStints = [];
                this.#role = "Nessuno";
                this.#number = -1;
        }
    }

    get getRole() {
        return this.#role;
    }

    set setRole(role) {
        this.#role = role; 
    }

    get getNumber() {
        return this.#number;
    }

    set  setNumber(num) {
        this.#number = num;
    }

    get getPlayerStints() {
        return this.#playerStints;
    }

    set setPlayerStints(stintsList) {
        this.#playerStints = stintsList;
    }

    /**
     * @param {Team} employment 
     */
    addPlayerStint(employment) {
        this.#playerStints.push(employment);
    } 

    /**
     * @param {Team} employment 
     */
    removePlayerStint(employment) {
        this.#playerStints.filter(x => x !== employment);
    }

    clearPlayerStints() {
        this.#playerStints.filter(x => true == false);
    }

    get getManagerStints() {
        return this.#managerStints;
    }

    set setManagerStints(stintsList) {
        this.#managerStints = stintsList;
    }

    addManagerStint(employment) {
        this.#managerStints.push(employment);
    } 

    removeManagerStint(employment) {
        this.#managerStints.filter(x => x !== employment);
    }

    clearManagerStints() {
        this.#managerStints.filter(x => true == false);
    }
}


class Referee extends Person {
    /**@type {Array<Match>}*/ #matches;
    
    /**
    * @param {string} firstName 
    * @param {string} lastName 
    * @param {Date} dateOfBirth 
    * @param {string} image 
    * @param {Array<Match>} matches 
    */
    constructor(firstName, lastName, dateOfBirth, image, matches) {
        super(firstName, lastName, dateOfBirth, image);
        this.#matches = matches;
    }

    get matches() {
        return this.#matches;
    }

    set matches(matches) {
        this.#matches = matches;
    }

    addMatch(match) {
        this.#matches.push(match);
    }

    removeMatch(match) {
        this.#matches = this.#matches.filter(x => x !== match);
    }

    clearMatches() {
        this.#matches = [];
    }
}
