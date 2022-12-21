export default solve

function solve(lines) {
    let most = 0
    lines.map(line => parseInt(line)).reduce((acc, cur) => {
        if(isNaN(cur)) {
            most = Math.max(most, acc) 
            return 0
        }
        return acc + cur
    }, 0)
    return most
}