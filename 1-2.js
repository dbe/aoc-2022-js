export default solve

function solve(lines) {
    let most = [0,0,0]
    lines.map(line => parseInt(line)).reduce((acc, cur) => {
        if(isNaN(cur)) {
            if(acc > most[0]) {
                most[2] = most[1]
                most[1] = most[0]
                most[0] = acc
            } else if(acc > most[1]) {
                most[2] = most[1]
                most[1] = acc
            } else if(acc > most[2]) {
                most[2] = acc
            }
            return 0
        }
        return acc + cur
    }, 0)
    return most[0] + most[1] + most[2]
}