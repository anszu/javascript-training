const isSorted = require('../../tasks/easy/isSorted');

test('test isSorted', () => {
    expect(isSorted([])).toBe(true);
    expect(isSorted([3, 9, -3, 10])).toBe(false);
    expect(isSorted([-Infinity, -5, 0, 3, 9])).toBe(true);
    expect(isSorted([20, 34, 85, 1000])).toBe(true);
});
