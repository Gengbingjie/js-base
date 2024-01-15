function fn(){
    console.log(arguments.length)
    for(let key of arguments){
        console.log(key)
    }
}
fn('a','b','c')
// console.log(globalThis === global)
console.log(fn.name)