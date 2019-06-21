// isPrime - Returns true or false, indicating whether the given number is prime.

const isPrime = (numb) => {
    let count = 0;
    for (let x = 1; x <= numb; x += 1) {
        if (numb % x === 0) {
            count += 1;
        }
        if (count > 2) {
            break;
        }
    }
    return (count === 2);
};

module.exports = isPrime;
