let john = { name: 'john' }
let map = new WeakMap()
map.set(john, 'test weakmap')
john = null

// 缓存数据
let cache = new WeakMap()
function process(obj) {
    if (!cache.has(obj)) {
        let result = obj
        cache.set(obj, result)
    }
    return cache.get(obj)
}
let obj = { name: 'john' }
let result1 = process(obj)
let result2 = process(obj)
console.log(result1)
console.log(result2)
obj = null
console.log(cache.size)
//存储unread标识
let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];
// let readMessage = new WeakSet();
// messages.forEach(item => {
//     readMessage.add(item)
// })

let messageDate = new WeakMap()
messages.forEach(item => {
    messageDate.set(item, new Date(Date.now()))
})
console.log(messageDate.get(messages[0]))

