const sum = require('./sum');

test('properly add two numbers', () => {
    expect(sum(4, 5)).toBe(9)
})