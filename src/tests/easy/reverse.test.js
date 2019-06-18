const reverse = require('../../tasks/easy/reverse');

test('test reverse', () => {
    expect(reverse('')).toBe('');
    expect(reverse('abcdef')).toBe('fedcba');
});
