// Classi per le persone
export class Person {
  /**@type {string}*/ _firstName; 
  /**@type {string}*/_lastName; 
  /**@type {Date}*/ _dateOfBirth;
  static _people = [];
  constructor(firstName, lastName, dateOfBirth) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._dateOfBirth = dateOfBirth;
    _people.push(this);
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
  

  get people() {
    return _people;
  }
}

// Non ha senso dividere giocatori ed allenatori quando
// spesso gli allenatori sono ex-giocatori e alcuni giocatori
// fungono contemporaneamente come allenatori!
export class Participant extends Person {

    /**@type {string}*/ #role; 
    /**@type {Number}*/ #number; 
    /**@type {Array<Team>}*/ #playerStints; 
    /**@type {Array<Team>}*/ #managerStints;

    constructor(firstName, lastName, dateOfBirth, managerStints, playerStint,  role, number) { // Costruttore per giocatori
        super(firstName, lastName, dateOfBirth);
        switch (arguments.length) {
            case 4:
                this.#managerStints = managerStints;
                this.#playerStints = [];
                this.#role = "Nessuno";
                this.#number = -1;
            break;

            case 7:
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
