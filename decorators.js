let worker = {
    someMethods(){
        return 1
    },
    slow(min,max){
        return (min + max) * this.someMethods()
    }
}
function cachingDecorator(fn,hash){
    let cache = new Map()
    return function(...args){
        let key = hash(args)
        if(cache.has(key)){
            return cache.get(key)
        }
        let result = fn.apply(this,args)
        // let result = fn.call(this,...args)
        cache.set(key,result)
        return result
    }
}
function hash(args){
    return [...args].join(',')
}
worker.slow = cachingDecorator(worker.slow,hash)
// console.log(worker.slow(1,4))
// console.log(worker.slow(1,4))

//任务1

function work(a,b){
    console.log(a+b)
}
function spy(fn){
    function wrapper(...args){
        wrapper.calls.push(args)
        return fn.apply(this,args)
    }
    wrapper.calls = []
    return wrapper
}
work = spy(work)
// work(1,2)
// work(4,5)
for(let key of work.calls){
    // console.log('call:'+key.join(','))
}

/*
    任务二
    延时装饰器
*/
function f(x){
    console.log(x)
}
function delay(fn,ms){
    return function(){
        setTimeout(()=>{
            return fn.apply(this,arguments)
        },ms)
    }
}
// let f1000 = delay(f,1000)
// let f1500 = delay(f,2500)
// f1000('test')
// f1500('test222')

/*
    任务三：
    防抖装饰器
*/
let fd = function(x){
    console.log(x)
}

function debounce(fn,ms){
    let timer = null
    return function(){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            return fn.apply(this,arguments)
        },ms)
    }
}
fd = debounce(fd,1000)
// fd('a')
// setTimeout(()=>fd('b'),200)
// setTimeout(()=>fd('c'),500)

/* 
    任务四：
    节流装饰器
*/
function ft(x){
    console.log(x)
}
function throttle(fn,ms){
    let runFlag = true
    let args,_this
    return function wrapper(){
        if(!runFlag){
            args = arguments
            _this = this
            return
        }
        runFlag = false
        fn.apply(this,arguments)
        setTimeout(()=>{
            if(args){
                runFlag = true
                wrapper.apply(_this,args)
                _this = args = null
            }
        },ms)
    }
}

let f1000 = throttle(ft,1000)
f1000(1)
f1000(2)
f1000(3)