"use strict";
exports.__esModule = true;
var pokemon_1 = require("./pokemon");
var attack_1 = require("./attack");
/**
 * savoir quel pokemon attaquera en premier
 * @param pokemon1
 * @param pokemon2
 * @return le pokemon dont la vitesse est le plus elevé
 */
function whoAttackFirst(pokemon1, pokemon2) {
    if (pokemon1.getSpeed() == pokemon2.getSpeed()) {
        var first = Math.floor(Math.random() * Math.floor(2));
        return (first == 0) ? pokemon1.getName() : pokemon2.getName();
    }
    else
        return (pokemon1.getSpeed() >= pokemon2.getSpeed()) ? pokemon1.getName() : pokemon2.getName();
}
exports.whoAttackFirst = whoAttackFirst;
/**
 * check si un pokemon est mort ou non
 * @param pokemon
 * @return true ou false si le pokemon est mort
 */
function isDead(pokemon) {
    return (pokemon.getPv() <= 0) ? true : false;
}
exports.isDead = isDead;
/*************************************************************************************************************/
/*********************************************  FIGHT  ******************************************************/
/***********************************************************************************************************/
var attacksPokemon1 = [
    new attack_1["default"]("lance-flamme", 40),
    new attack_1["default"]("ultralaser", 20),
    new attack_1["default"]("rapace", 35),
    new attack_1["default"]("dracochoc", 30)
];
var attacksPokemon2 = [
    new attack_1["default"]("hydro-canon", 40),
    new attack_1["default"]("surf", 20),
    new attack_1["default"]("hydro-queue", 35),
    new attack_1["default"]("laser-glace", 30)
];
var pokemon1 = new pokemon_1["default"]("Dracaufeu", 50, 280, attacksPokemon1);
var pokemon2 = new pokemon_1["default"]("Tortank", 42, 300, attacksPokemon2);
while (!isDead(pokemon1) && !isDead(pokemon2)) {
    if (whoAttackFirst(pokemon1, pokemon2) == pokemon1.getName()) {
        var attack = pokemon1.selectRandomAttack();
        console.log(pokemon1.getName() + " utilise " + attack.getName() + " !");
        pokemon2.hitByAttack(attack);
        console.log(pokemon2.getName() + " perd " + attack.getDamage() + " PV");
        // au tour de l'autre
        attack = pokemon2.selectRandomAttack();
        console.log(pokemon2.getName() + " utilise " + attack.getName() + " !");
        pokemon1.hitByAttack(attack);
        console.log(pokemon1.getName() + " perd " + attack.getDamage() + " PV");
    }
    else {
        var attack = pokemon2.selectRandomAttack();
        console.log(pokemon2.getName() + " utilise " + attack.getName() + " !");
        pokemon1.hitByAttack(attack);
        console.log(pokemon1.getName() + " perd " + attack.getDamage() + " PV");
        // au tour de l'autre
        attack = pokemon1.selectRandomAttack();
        console.log(pokemon1.getName() + " utilise " + attack.getName() + " !");
        pokemon2.hitByAttack(attack);
        console.log(pokemon2.getName() + " perd " + attack.getDamage() + " PV");
    }
}
console.log("Combat terminé !");
var loser = '';
var winner = '';
console.log(pokemon1.getPv());
console.log(pokemon2.getPv());
if (isDead(pokemon1)) {
    loser = pokemon1.getName();
    winner = pokemon2.getName();
}
else {
    loser = pokemon2.getName();
    winner = pokemon1.getName();
}
console.log(loser + " est K.O, " + winner + " remporte le combat !");
