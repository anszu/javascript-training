// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

const isSorted = (arr) => {
    const testArr = arr.filter((el, index) => el < arr[index + 1] || index + 1 === arr.length);
    return (arr.length === testArr.length);
};

module.exports = isSorted;
