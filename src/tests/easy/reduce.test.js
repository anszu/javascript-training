const reduce = require('../../tasks/easy/reduce');

test('test reduce', () => {
    expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10);
});
