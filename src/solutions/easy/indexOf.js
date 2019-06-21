// indexOf - Implement the indexOf function for arrays.

const indexOf = (arr, element) => {
    let index = -1;
    arr.forEach((el, i) => {
        if (el === element) {
            index = i;
        }
    });
    return (index);
};

module.exports = indexOf;
