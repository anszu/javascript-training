const fib = require('../../tasks/easy/fib');

test('test fib', () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(10)).toBe(55);
    expect(fib(20)).toBe(6765);
});
