export default solve

const scores = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7,
}

function solve(lines) {
    return lines.map(line => scores[line]).reduce((a,b) => a + b)
}
