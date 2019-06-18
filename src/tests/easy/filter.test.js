const filter = require('../../tasks/easy/filter');

test('test filter', () => {
    expect(filter([1, 2, 3, 4], n => n < 3)).toBe([1, 2]);
});
