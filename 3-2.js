import { everyN, sum } from "./util.js"

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Eg. {a -> 1, A -> 27}
const prios = {}
for(let i = 0; i < alpha.length; i++) {
    prios[alpha[i]] = i + 1
}

function solve(lines) {
    return lines.reduce(everyN(3), []).map(calcPrio).reduce(sum)
}

// Group is an array of length 3 containing 3 rucksacks (strings)
function calcPrio(group) {
    let common = new Set(group[0].split(''))
    common = new Set(group[1].split('').filter(e => common.has(e)))
    common = group[2].split('').filter(e => common.has(e))
    return prios[common[0]]
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

export default solve