function everyN(n) {
    return (acc, cur, i) => {
        if(i % n == 0) {
            acc.push([cur])
        } else {
            acc[acc.length - 1].push(cur)
        }

        return acc
    }
}

function sum(a, b) {
    return a + b
}

export { everyN, sum }