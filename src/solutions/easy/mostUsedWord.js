// find the word within a string that appears most often and return it

const mostUsedWord = (str) => {
    const arr = str.split(' ');
    const countObj = {};

    arr.forEach((element) => {
        const el = element;
        countObj[el] = 0;

        arr.forEach((compareEl) => {
            if (el === compareEl) {
                countObj[el] += 1;
            }
        });
    });

    return (countObj);
};

module.exports = mostUsedWord;
