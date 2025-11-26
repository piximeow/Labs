const pipe = (...fns) => {
    
    if (!fns.every(fn => typeof fn === 'function')) {
        throw new TypeError('All arguments to pipe must be functions');
    }

    return x => fns.reduce((acc, fn) => fn(acc), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

try {
    const f1 = pipe(inc, twice, cube);
    console.log(f1(5)); 

    const f2 = pipe(inc, inc);
    console.log(f2(7)); 

    const f3 = pipe(inc, 7, cube); 
} catch (error) {
    console.error(error.message); 
}