let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};
console.log(Object.fromEntries(Object.entries(prices).map(v => [v[0], v[1] * 2])))
// 属性求和
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log(sumSalaries(salaries))
function sumSalaries(obj) {
    // let num = 0
    // for (money of Object.values(obj)) {
    //     num += money
    // }
    // return num
    return Object.values(obj).reduce((sum, salary) => sum + salary, 0)
}
// 计算属性数量
let user = {
    name: 'John',
    age: 30
};
console.log(count(user))
function count(user) {
    return Object.keys(user).length
}