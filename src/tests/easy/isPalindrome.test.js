const isPalindrome = require('../../tasks/easy/isPalindrome');

test('test isPalindrome', () => {
    expect(isPalindrome('abcdcba')).toBe(true);
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('abcd')).toBe(false);
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
});
