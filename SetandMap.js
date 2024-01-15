// 过滤唯一元素
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
function unique(arr) {
    return Array.from(new Set(arr))
}
console.log(unique(values))
//清除字谜
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
    // let map = new Map()
    let obj = {}
    arr.forEach(item => {
        let sorted = Array.from(item.toLowerCase()).sort().join('')
        // map.set(sorted, item)
        obj[sorted] = item
    });
    return Array.from(Object.values(obj))
}
console.log(aclean(arr))
// 迭代键
let map = new Map();
map.set('name', 'john')
map.set('age', 20)
let keys = Array.from(map.keys());

keys.push('more')
console.log(keys)