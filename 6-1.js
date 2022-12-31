export default solve

function solve(lines) {
    for(let r = 3; r < lines[0].length; r++) {
        let s = new Set(lines[0].slice(r - 3, r + 1))
        if(s.size == 4) {
            return r + 1
        }
    }
}

// OREO DO_NOT_SUBMIT
// eslint-disable-next-line no-console
console.log('(OREO) solve(["bvwbjplbgvbhsrlpgdmjqwftvncz"]): ', solve(["bvwbjplbgvbhsrlpgdmjqwftvncz"]));