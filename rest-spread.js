function fn(...args){
    console.log(...args)
    for(let key of arguments){
        console.log(key)
    }
}
fn('a','b','c')
// console.log(globalThis === global)
console.log(fn.name)