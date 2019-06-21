// reduce - Implement the reduce function.

const reduce = (arr, func, initial) => {
    let count = initial;
    arr.forEach((el) => {
        count = func(count, el);
    });
    return (count);
};

module.exports = reduce;
