export default solve

// {"/": type: "dir", children: {"a": {type: file, size: 100}}}
let fs = {"/": {type: "dir", size: 0, children: {}}}
let cur = fs["/"]
let stack = []

function solve(lines) {
    buildFS(lines)

    let total = 0
    let dirs = [fs["/"]]
    while(dirs.length > 0) {
        let dir = dirs.pop()
        if(dir.type == 'dir') {
            dirs = dirs.concat(Object.values(dir.children))
            if(dir.size <= 100000) {
                total += dir.size
            }
        } 
    }

    return total
}

function buildFS(lines) {
    lines.slice(1).forEach(line => {
        if(line.slice(0,4) == '$ cd') {
            cd(line.slice(5))
        } else if(line.slice(0,4) == '$ ls') {
            // Do nothing
        } else {
            if(line.slice(0,3) == 'dir') {
                cur.children[line.slice(4)] = {type: 'dir', size: 0, children: {}}
            } else {
                let [size, filename] = line.split(' ')
                size = parseInt(size)
                cur.children[filename] = {type: 'file', size: size}
                for(let i = 0; i < stack.length; i++) {
                    stack[i].size += size
                }
                cur.size += size
            }
        }
    })
}

function cd(dir) {
    if(dir == '..') {
        cur = stack.pop()
    } else {
        stack.push(cur)
        cur = cur.children[dir]
    }
}