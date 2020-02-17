import Pokemon from "./pokemon";
import Attack from "./attack";

/**
 * savoir quel pokemon attaquera en premier
 * @param pokemon1 
 * @param pokemon2
 * @return le pokemon dont la vitesse est le plus elevé
 */
export function whoAttackFirst(pokemon1 : Pokemon, pokemon2 : Pokemon) : string {
    if(pokemon1.getSpeed() == pokemon2.getSpeed()){
        let first : number = Math.floor(Math.random()* Math.floor(2));
        return (first == 0) ? pokemon1.getName() : pokemon2.getName();
    } else return (pokemon1.getSpeed() >= pokemon2.getSpeed())? pokemon1.getName() : pokemon2.getName();
}

/**
 * check si un pokemon est mort ou non
 * @param pokemon
 * @return true ou false si le pokemon est mort
 */
export function isDead(pokemon : Pokemon) : Boolean {
    return (pokemon.getPv() <= 0)? true : false;
}

/**
 * attente avant chaque attaque
 * @param ms
 */
function wait(ms: number){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

/*************************************************************************************************************/
/*********************************************  FIGHT  ******************************************************/
/***********************************************************************************************************/
let attacksPokemon1: Array<Attack> = [
    new Attack("lance-flamme", 40),
    new Attack("ultralaser", 20),
    new Attack("rapace", 35),
    new Attack("dracochoc", 30)
];
let attacksPokemon2: Array<Attack> = [
    new Attack("hydro-canon", 40),
    new Attack("surf", 20),
    new Attack("hydro-queue", 35),
    new Attack("laser-glace", 30)
];
let pokemon1 = new Pokemon("Dracaufeu", 50, 280, attacksPokemon1);
let pokemon2 = new Pokemon("Tortank", 42, 300, attacksPokemon2);

while (!isDead(pokemon1) && !isDead(pokemon2)) {
    if (whoAttackFirst(pokemon1, pokemon2) == pokemon1.getName()) {
        wait(1000);
        let attack: Attack = pokemon1.selectRandomAttack();
        console.log(pokemon1.getName() + " utilise " + attack.getName() + " !");
        pokemon2.hitByAttack(attack)
        console.log(
          pokemon2.getName() + " perd " + attack.getDamage() + " PV\n"
        );
        // au tour de l'autre
        wait(1000);
        attack = pokemon2.selectRandomAttack();
        console.log(pokemon2.getName() + " utilise " + attack.getName() + " !");
        pokemon1.hitByAttack(attack);
        console.log(
          pokemon1.getName() + " perd " + attack.getDamage() + " PV\n"
        );
    } else {
        wait(1000);
        let attack: Attack = pokemon2.selectRandomAttack();
        console.log(pokemon2.getName() + " utilise " + attack.getName() + " !");
        pokemon1.hitByAttack(attack)
        console.log(
          pokemon1.getName() + " perd " + attack.getDamage() + " PV\n"
        );
        // au tour de l'autre
        wait(1000);
        attack = pokemon1.selectRandomAttack();
        console.log(pokemon1.getName() + " utilise " + attack.getName() + " !");
        pokemon2.hitByAttack(attack)
        console.log(
          pokemon2.getName() + " perd " + attack.getDamage() + " PV\n"
        );
    }
}

console.log("Combat terminé !");
let loser : string = '';
let winner : string = '';
// console.log(pokemon1.getPv());
// console.log(pokemon2.getPv());
if(isDead(pokemon1)) {
    loser = pokemon1.getName();
    winner = pokemon2.getName();
} else {
    loser = pokemon2.getName();
    winner = pokemon1.getName();
}
console.log(loser + " est K.O, "+ winner + " remporte le combat !");