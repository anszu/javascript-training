// reduceAsync - Like the reduce you implemented in the Easy section,
// but each item must be resolved before continuing onto the next.

// let a = () => Promise.resolve('a')
// let b = () => Promise.resolve('b')
// let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))

// await reduceAsync([a, b, c], (acc, value) => [...acc, value], [])
// ['a', 'b', 'c']

// await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
// ['d', 'a', 'c', 'b']
