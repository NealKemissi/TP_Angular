"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    /** constructeur **/
    function Pokemon(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Pokemon.prototype.getName = function () {
        return this.name;
    };
    Pokemon.prototype.getSpeed = function () {
        return this.speed;
    };
    return Pokemon;
}());
exports["default"] = Pokemon;
