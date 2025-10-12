const mas2 = [true, 'hello', undefined, 5, 12, -200, false, false,  null,  'word', 100, true, 'bye', 10, 5, 1, null, 'lalal', 'Ukraine', true, undefined]
const hash2 = {}
for (const item of mas2) {
    const type = typeof item
    if (!hash2[type]) {
        hash2[type] = 0;
    }
    hash2[type] += 1;
}
console.log(hash2)
