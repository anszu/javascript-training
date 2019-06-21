// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1
// through some number n, and returns the missing number in the sequence
// (there are either no missing numbers, or exactly one missing number).
// Can you do it in O(N) time? Hint: There’s a clever formula you can use.

const missing = (arr) => {
    arr.sort((a, b) => a - b);
    if (arr[0] !== 1 && arr[0] !== undefined) { return 1; }
    const numb = arr.find((el, i) => el + 1 !== arr[i + 1] && i + 1 < arr.length);
    return numb ? numb + 1 : undefined;
};

module.exports = missing;
