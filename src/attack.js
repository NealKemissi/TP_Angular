"use strict";
exports.__esModule = true;
var Attack = /** @class */ (function () {
    /** constructeur **/
    function Attack(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    Attack.prototype.getName = function () {
        return this.name;
    };
    Attack.prototype.getDamage = function () {
        return this.damage;
    };
    return Attack;
}());
exports["default"] = Attack;
