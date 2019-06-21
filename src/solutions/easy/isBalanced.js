// isBalanced - Takes a string and returns true or false indicating whether
// its curly braces are balanced.

const isBalanced = (str) => {
    let bool = true;
    const newStr = str.split('').filter(e => e === '{' || e === '}');
    if (newStr.length % 2 > 0 || newStr.findIndex(el => el === '{') > newStr.findIndex(el => el === '}')) {
        bool = false;
    }
    return bool;
};

module.exports = isBalanced;
