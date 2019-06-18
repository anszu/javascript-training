const mostUsedWord = require('../../tasks/easy/mostUsedWord');

test('test mostUsedWord', () => {
    expect(mostUsedWord('The sun shines when the sun is shining.'))
        .toBe('sun');
});
