const indexOf = require('../../tasks/easy/indexOf');

test('test indexOf', () => {
    expect(indexOf([1, 2, 3], 1)).toBe(0);
    expect(indexOf([1, 2, 3], 4)).toBe(-1);
});
