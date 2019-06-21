const isBalanced = require('../../tasks/easy/isBalanced');

test('test isBalanced', () => {
    expect(isBalanced('foo { bar } }')).toBe(false);
    expect(isBalanced('{{}')).toBe(false);
    expect(isBalanced('foo { bar { baz } boo }')).toBe(true);
    expect(isBalanced('}{')).toBe(false);
    expect(isBalanced('{}{}')).toBe(true);
    expect(isBalanced('foo { bar { baz }')).toBe(false);
});
