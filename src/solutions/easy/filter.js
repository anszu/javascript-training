// filter - Implement the filter function.

const filter = (arr, func) => {
    for (let x = arr.length - 1; x >= 0; x -= 1) {
        if (!func(arr[x])) {
            arr.splice(x, 1);
        }
    }
    return (arr);
};

module.exports = filter;
