let arr = [2,5,4,8,7,9,10,6]
let data = [{
    id : 5,
    name : 5
},{
    id : 8,
    name : 8,
},{
    id : 2,
    name : 2
},{
    id : 6,
    name : 6
}]
let newArr = []
newArr = arr.filter(i => data.map(item=>item.id).includes(i))
data = data.sort(function(a,b){
    return newArr.indexOf(a.id) - newArr.indexOf(b.id)
})
console.log(data)
// data = data.map(item=>{
//     item.orderIndex = arr.findIndex(i=>item.id == i)
//     return item
// })
// newArr = data.sort(function(a,b){
//     return a.orderIndex - b.orderIndex
// })
// console.log(newArr)