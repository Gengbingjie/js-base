//nodejs环境执行最大递归深度  6891
//浏览器环境最大递归深度       6897
function pow(x, n) {
    return n === 1 ? x : x * pow(x, n-1)
}
pow(2,3)

let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
}
let sumSalary = (department) =>{
    if(Array.isArray(department)){
        return department.reduce((a,b)=>{return a += b.salary},0)
    }else if(Object.keys(department).length > 0){
        let salary = 0;
        Object.values(department).forEach(item=>{
            salary += sumSalary(item)
        })
        return salary
    }
}
sumSalary(company)

function sumTo1(n){
    if(n === 1) return 1
    return n + sumTo1(n-1)
}
function sumTo2(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum+=i
    }
    return sum
}
function sumTo3(n){
    return n * (n+1) / 2
}
// console.log(sumTo1(100))    //1+2+3+4+5
// console.log(sumTo2(100))
// console.log(sumTo3(3))

function factorial(n){
    if(n === 1) return 1
    return n*factorial(n-1)
}
// console.log(factorial(5))
//斐波那契数
function fib(n){
    let arr= []
    arr[1] = 1
    arr[2] = 1
    for(let i = 3; i <= n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
}
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(77))
//逐个输出链表元素
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};
function printList(list){
    // console.log(list.value)
    // if(list.next) {
    //     printList(list.next)
    // }
    while (list){
        console.log(list.value)
        list = list.next
    }
}
// printList(list)
function reversePrintList(list){
    // if(list.next){
    //     reversePrintList(list.next)
    // }
    // console.log(list.value)

    
}
// reversePrintList(list)