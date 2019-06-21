// find the word within a string that appears most often and return it

const mostUsedWord = (str) => {
    const arr = str.split(' ');
    const count = {};
    arr.forEach((element) => {
        count[element] = 0;
        arr.forEach((el) => {
            if (el === element) {
                count[element] += 1;
            }
        });
    });
    const word = Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));
    return (word);
};

module.exports = mostUsedWord;
