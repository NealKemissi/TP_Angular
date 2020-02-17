"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    /** constructeur **/
    function Pokemon(name, speed, pv, attacks) {
        /** liste d'attaque **/
        this.attacks = new Array(4);
        this.name = name;
        this.speed = speed;
        this.pv = pv;
        this.attacks = attacks;
    }
    Pokemon.prototype.getName = function () {
        return this.name;
    };
    Pokemon.prototype.getSpeed = function () {
        return this.speed;
    };
    Pokemon.prototype.getPv = function () {
        return this.pv;
    };
    Pokemon.prototype.getAttacks = function () {
        return this.attacks;
    };
    /**
     * lance une attaque au hasard
     * @return l'attaque à lancer
     */
    Pokemon.prototype.selectRandomAttack = function () {
        return this.attacks[Math.floor(Math.random() * 3)];
    };
    /**
     * lance une attaque en particulier
     * @param id
     *  @return l'attaque à lancer
     */
    Pokemon.prototype.selectAttack = function (id) {
        return this.attacks[id];
    };
    /**
     * degats subit lors d'une attaque
     * @param attack
     */
    Pokemon.prototype.hitByAttack = function (attack) {
        this.pv = this.pv - attack.getDamage();
        return this.pv;
    };
    return Pokemon;
}());
exports["default"] = Pokemon;
