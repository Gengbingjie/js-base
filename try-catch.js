// <!-- <script> -->
    let json = `{ "name": "John", "age": 30 }`;
    try{
        user = JSON.parse(json)
        // if(!user.name){
        //     throw new SyntaxError("数据不全：没有 name")
        // }
        balabala()
        // console.log(user.name)
    }catch(err){
        if(err instanceof ReferenceError){
            console.log('ReferenceError')
        }else{
            throw err
        }
        //发送一个新的网络请求
        //向访问者建议一个替代方案
        //将有关错误信息发送给记录日志的设备
    }
    function func(){
        try{
            return 1
        }finally{
            console.log('finally')
        }
    }
    console.log(func())

    
// <!-- </script> -->