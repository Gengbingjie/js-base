// let start = Date.now()
// let times = []
// let timer = setTimeout(function run(){
//     times.push(Date.now() - start)
//     console.log(times)
//     setTimeout(run)
// })

function printNumber(from,to){
    // setTimeout(function print(){
    //     if(from <= to){
    //         console.log(from)
    //         from++
    //         setTimeout(print,1000)
    //     }
    // },1000)
    console.log(from)
    let timer = setInterval(()=>{
        from++
        if(from == to){
            clearInterval(timer)
        }
        console.log(from)
    },1000)
}
printNumber(1,5)