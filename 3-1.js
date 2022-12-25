export default solve

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Eg. {a -> 1, A -> 27}
const prios = {}
for(let i = 0; i < alpha.length; i++) {
    prios[alpha[i]] = i + 1
}

// Note: Should do bitmap and xor once I can lookup how to
function solve(lines) {
    return lines.map(calcPrio).reduce((a,b) => a + b)
}

function calcPrio(ruck) {
    let found = new Set()
    for(let i = 0; i < ruck.length / 2; i++) {
        found.add(ruck[i])
    }
    for(let i = ruck.length / 2; i < ruck.length; i++) {
        if(found.has(ruck[i])) {
            return prios[ruck[i]]
        }
    }
}

const testInput = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw"
]
console.log(`Test output: ${solve(testInput)}`)