export default solve

function solve(lines) {
    return lines.map(line => line.split(',')) // [["2-4","6-8"], ...
        .map(line => line[0].split('-').concat(line[1].split('-'))) // [["2","4","6","8"], ...
        .map(line => line.map(idx => parseInt(idx))) // [[2,4,6,8], ...
        .map(isOverlap)
        .reduce((a,b) => a + b)
}

function isOverlap(l) {
    let [l1,r1,l2,r2] = l
    let overlap = !(l2 > r1 || l1 > r2) // Not not-overlaping
    return overlap ? 1 : 0
}

const testInput = [
    "2-4,6-8",
    "2-3,4-5",
    "5-7,7-9",
    "2-8,3-7",
    "6-6,4-6",
    "2-6,4-8",
]
console.log(`Test output: ${JSON.stringify(solve(testInput))}`)