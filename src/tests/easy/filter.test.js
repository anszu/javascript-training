const filter = require('../../tasks/easy/filter');

test('test filter', () => {
    expect(filter([1, 2, 3, 4], n => n < 3)).toEqual([1, 2]);
});
