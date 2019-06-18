const factorial = require('../../tasks/easy/factorial');

test('test factorial', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(6)).toBe(720);
});
