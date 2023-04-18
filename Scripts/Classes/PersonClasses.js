// Classi per le persone
export class Person {
  _firstName; _lastName; _dateOfBirth;
  constructor(firstName, lastName, dateOfBirth) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._dateOfBirth = dateOfBirth;
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
  
}

// Non ha senso dividere giocatori ed allenatori quando
// spesso gli allenatori sono ex-giocatori e alcuni giocatori
// fungono contemporaneamente come allenatori!
export class Participant extends Person {
    #role; #number; #playerStints; #managerStints;
    constructor(firstName, lastName, dateOfBirth, role, number) { // Costruttore per giocatori
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
        this.#role = role;
        this.#number = number;
        this.#playerStints = [];
        this.#managerStints = [];
    }

    constructor(firstName, lastName, dateOfBirth) { // Costruttore per allenatori senza esperienza
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
        this.#role = "None";
        this.#number = -1;
        this.#playerStints = [];
        this.#managerStints = [];
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

    addPlayerStint(employment) {
        this.#playerStints.push(employment);
    } 

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
