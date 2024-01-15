function sum(a, b, c){
    return a + b + c
}
function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this,args)
        }else{
            return function(...arg2){
                return curried.apply(this, args.concat(arg2))
            }
        }
    }
}
let sumCurry = curry(sum)
console.log(sumCurry(1,2,3)(2,3))