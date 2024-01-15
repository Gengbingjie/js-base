function A(){}
function B(){}

A.prototype = B.prototype = {}

let a = new A()
console.log(a.__proto__)