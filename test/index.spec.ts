import Pokemon from '../src/pokemon';
import { whoAttackFrist } from '../src/index';
import Attack from '../src/attack';

describe('Speed test', () => {
    test('Pokemon A is the fastest', () => {
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
        expect(whoAttackFrist(pokemon1, pokemon2)).toEqual(pokemon1);
    });
})

describe('Attack test', () => {
    test('Pokemon A should hit pokemon B', () => {
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
        expect(whoAttackFrist(pokemon1, pokemon2)).toEqual(pokemon1);
    });
})
