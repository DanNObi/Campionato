class Address{
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