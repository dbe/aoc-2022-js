export default solve

function solve(lines) {
    return lines.map(line => line.split(',')) // [["2-4","6-8"], ...
        .map(line => line[0].split('-').concat(line[1].split('-'))) // [["2","4","6","8"], ...
        .map(line => line.map(idx => parseInt(idx))) // [[2,4,6,8], ...
        .map(isFullOverlap)
        .reduce((a,b) => a + b)
}

function isFullOverlap(l) {
    let overlap = (l[0] <= l[2] && l[1] >= l[3]) || (l[2] <= l[0] && l[3] >= l[1])
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