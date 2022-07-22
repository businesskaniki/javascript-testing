const calculator = require('./test3.js');

const numbers = new calculator(3, 3);

describe('calculator test', () => {
    test('addition', () => {
        expect(numbers.add()).toBe(6);
    });
    test('substraction', () => {
        expect(numbers.subtract()).toBe(0);
    });
    test('multiplication', () => {
        expect(numbers.multiply()).toBe(9);
    });
    test('division', () => {
        expect(numbers.division()).toBeCloseTo(1);
    });
});

