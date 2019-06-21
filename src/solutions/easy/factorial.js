// factorial - Returns a number that is the factorial of the given number

const factorial = (numb) => {
    let sum = 1;
    for (let x = 1; x <= numb; x += 1) {
        sum *= x;
    }
    return (sum);
};

module.exports = factorial;
