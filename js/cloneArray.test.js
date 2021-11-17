// const { expect } = require('@jest/globals');
// const { test } = require('picomatch');
const cloneArray = require('./cloneArray');

test('check return from cloneArray', () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).toStrictEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})