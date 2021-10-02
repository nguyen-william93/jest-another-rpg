const { toBindingIdentifierName } = require('@babel/types');
const { test, expect } = require('@jest/globals');
const exp = require('constants');
const Player = require('../lib/Player.js');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion.js');

test("creates a player object", () => {
    
    const player = new Player("dave");

    expect(player.name).toBe("dave");
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));

});