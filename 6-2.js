export default solve

function solve(lines) {
    for(let r = 13; r < lines[0].length; r++) {
        let s = new Set(lines[0].slice(r - 13, r + 1))
        if(s.size == 14) {
            return r + 1
        }
    }
}

// OREO DO_NOT_SUBMIT
// eslint-disable-next-line no-console
console.log('(OREO) solve(["mjqjpqmgbljsphdztnvjfqwrcgsmlb"]): ', solve(["mjqjpqmgbljsphdztnvjfqwrcgsmlb"]));