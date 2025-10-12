const mas1 = [true, 'hello', 5, 12, -200, false, false, 'word', 100, true, 'bye', 10, 5, 1, 'lalal', 'Ukraine', true]
const hash1 = { number: 0, string: 0, boolean: 0 }
for (const item of mas1) {
    hash1[typeof item] += 1
}
console.log(hash1)