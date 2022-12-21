import axios from 'axios'
import 'process'

if(process.argv.length < 3) {
    console.log("usage: node submit.js <day>")
    process.exit(1)
}

const { default : solve } = await import(`./${process.argv[2]}.js`)

axios.request({url: `https://adventofcode.com/2022/day/${process.argv[2]}/input`, method: 'GET', headers: {'Cookie': `session=${process.env.AOC_SESSION}`}}).then(resp => {
    const answer = solve(resp.data.split("\n").slice(0, -1))
    console.log('Answer:')
    console.log(answer);
})