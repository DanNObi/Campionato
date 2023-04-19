export class Trophie {
    #name; #edition;
    
    /**
     * @param {String} name
     * @param {int} edition
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
        return this.#name;
    }

    set edition(edition){
        this.#edition = edition;
    }
}