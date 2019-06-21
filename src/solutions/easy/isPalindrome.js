// isPalindrome - Return true or false indicating
// whether the given string is a plaindrone (case and space insensitive).

const isPalindrome = (str) => {
    const arr = str.toLowerCase().split('').filter(el => el !== ' ');
    return arr.join('') === arr.reverse().join('');
};

module.exports = isPalindrome;
