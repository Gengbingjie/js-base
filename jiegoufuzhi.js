let user = {
    name: 'John',
    years: 30
}
let { name, years: age, isAdmin = false } = user
console.log(name)
console.log(age)
console.log(isAdmin)

let salaries = {
    "John": 100,
    "Pete": 200,
    "Aric": 300
}
console.log(topSalary(salaries))
function topSalary(obj) {
    // let max = Object.values(obj).sort((a, b) => a - b).at(-1)
    // if (max) {
    //     for (let [key, value] of Object.entries(obj)) {
    //         if (value === max) {
    //             return key
    //         }
    //     }
    // } else {
    //     return null
    // }
    let maxSalary = 0
    let maxName = null
    for (let [name, salary] of Object.entries(obj)) {
        if (maxSalary < salary) {
            maxSalary = salary
            maxName = name
        }
    }
    return maxName
}
console.log({id : 1,...salaries})