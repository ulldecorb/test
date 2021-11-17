// const { expect } = require('@jest/globals');
// const { test } = require('picomatch');
const subtract = require('./substract');

test('properly substract two numbers', () => {
    expect(subtract(3, 5)).toBe(-2)
})