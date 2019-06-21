// fib - Returns the nth Fibonacci number.

const fib = (numb) => {
    const arr = [];
    let count = 0;
    for (let x = 0; x < numb; x += 1) {
        if (x > 0) {
            arr[x] = count;
            count = arr[x - 1] + arr[x];
        } else {
            arr[x] = 0;
            count += 1;
        }
    }
    return (count);
};

module.exports = fib;
