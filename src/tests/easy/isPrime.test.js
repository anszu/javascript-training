const isPrime = require('../../tasks/easy/isPrime');

test('test isPrime', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(10000000000000)).toBe(false);
});
