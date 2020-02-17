"use strict";
exports.__esModule = true;
var pokemon_1 = require("./pokemon");
var pokemon1 = new pokemon_1["default"]("Dracaufeu", 50);
var pokemon2 = new pokemon_1["default"]("Tortank", 42);
/**
 * savoir quel pokemon attaquera en premier
 * @param pokemon1
 * @param pokemon2
 */
function whoAttackFrist(pokemon1, pokemon2) {
    return (pokemon1.getSpeed() >= pokemon2.getSpeed()) ? pokemon1 : pokemon2;
}
exports.whoAttackFrist = whoAttackFrist;
console.log('nom du pokemon 1 : ' + pokemon1.getName());
console.log('nom du pokemon 2 : ' + pokemon2.getName());
console.log(whoAttackFrist(pokemon1, pokemon2).getName() + ' attaquera en premier !');
