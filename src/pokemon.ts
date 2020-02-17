export class Pokemon {
    
    /** nom du pokemon **/
    private name : string;

    /** constructeur **/
    constructor(name : string) {
        this.name = name;
    }

    
    getName() : string {
        return this.name;
    }
}