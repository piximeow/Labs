function compose(...fns) {
    if (!fns.every(fn => typeof fn === 'function')) {
        throw new TypeError('All arguments to compose must be functions');
    }

    const errorHandlers = [];

    const composedFn = (input) => {
        try {
            return fns.reduceRight((acc, fn) => fn(acc), input);
        } catch (error) {
            errorHandlers.forEach(handler => handler(error));
            return undefined;
        }
    };

    composedFn.on = (event, handler) => {
        if (event === 'error' && typeof handler === 'function') {
            errorHandlers.push(handler);
        } else {
            throw new TypeError('Invalid event or handler');
        }
    };

    return composedFn;
}

const inc = x => ++x;
const twice = x => x * 2;
const thrower = x => { if (x > 5) throw new Error('Value too large'); return x; };
const cube = x => x ** 3;

const f = compose(cube, thrower, twice, inc);

f.on('error', (e) => console.error(`Error caught: ${e.message}`));

console.log(f(2)); 
console.log(f(5));
 