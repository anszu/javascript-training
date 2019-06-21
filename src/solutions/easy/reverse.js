// reverse - Implement the reverse function.

const reverse = (str) => {
    const newStr = str.split('');
    let revStr = '';
    for (let x = newStr.length - 1; x >= 0; x -= 1) {
        revStr += newStr[x];
    }
    return (revStr);
};

module.exports = reverse;
