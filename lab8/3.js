function contract(fn, ...types) {
    return function(...args) {
        args.forEach((arg, i) => {
            const expectedType = types[i]?.name.toLowerCase();
            if (typeof arg !== expectedType) {
                throw new TypeError(`Argument at index ${i} should be of type ${expectedType}`);
            }
        });

        const result = fn(...args);
        const resultType = types[types.length - 1]?.name.toLowerCase();
        if (typeof result !== resultType) {
            throw new TypeError(`Result should be of type ${resultType}`);
        }

        return result;
    };
}


const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);

const res = concatStrings('Hello ', 'world!');
console.dir(res);