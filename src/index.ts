import Pokemon from "./pokemon";
import Attack from "./attack";

let attacksPokemon1 : Array<Attack> = [
    new Attack("lance-flamme", 40),
    new Attack("ultralaser", 20),
    new Attack("rapace", 35),
    new Attack("dracochoc", 30)
];
let attacksPokemon2 : Array<Attack> = [
    new Attack("hydro-canon", 40),
    new Attack("surf", 20),
    new Attack("hydro-queue", 35),
    new Attack("laser-glace", 30)
];
let pokemon1 = new Pokemon("Dracaufeu", 50, 280, attacksPokemon1);
let pokemon2 = new Pokemon("Tortank", 42, 300, attacksPokemon2);

/**
 * savoir quel pokemon attaquera en premier
 * @param pokemon1 
 * @param pokemon2
 * @return le pokemon dont la vitesse est le plus elevé
 */
export function whoAttackFrist(pokemon1 : Pokemon, pokemon2 : Pokemon) : Pokemon {
    if(pokemon1.getSpeed() == pokemon2.getSpeed()){
        return pokemon1;
    } else return (pokemon1.getSpeed() >= pokemon2.getSpeed())? pokemon1 : pokemon2;
}

export function pokemonHitAnotherPokemon(pokemon1 : Pokemon, pokemon2 : Pokemon) {

}


// console.log('nom du pokemon 1 : ' + pokemon1.getName());
// console.log('nom du pokemon 2 : ' + pokemon2.getName());
// console.log(whoAttackFrist(pokemon1, pokemon2).getName()+ ' attaquera en premier !');