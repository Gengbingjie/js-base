const truncateFloat = (value,digits = 2) => {
    if(typeof value !== 'string' && typeof value !== 'number') return value

    // if(!parseFloat(value) && parseFloat(value) !== 0) return
    
    // if(Number.isInteger(value)){
    //     return value
    // }
    
    // if(typeof value == 'string' && Number.isInteger(parseFloat(value))){
    //     return parseInt(value)
    // }
    if(typeof value === 'number') value = String(value)
    let re = new RegExp("(\\d+)\\.(\\d{1,"+ digits + "})")
    let result = value.match(re)
    return result ? parseFloat(result[0]) : parseFloat(value)
}
console.log(truncateFloat(123))
console.log(truncateFloat(123.9988))
console.log(truncateFloat('1231b'))
console.log(truncateFloat('123.9988', 3))
console.log(truncateFloat(123.5))
console.log(truncateFloat('123.5'))
console.log(truncateFloat(0))
console.log(truncateFloat('0'))
console.log(truncateFloat(null))
console.log(truncateFloat(undefined))
// console.log(truncateFloat(123))
// console.log(truncateFloat(123.4,4))
// console.log(truncateFloat(123.998,3))
/*
    0
    ‘0’
    123
    ‘123’
    123.9988
    ‘123.9988’
    []
    {}
    ‘aaa’
    ‘aa11.1122’
    null
    Undefined
*/