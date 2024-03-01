function a(){
    const context = {
        app : null
    }
    const app = (context.app={
        id : 1
    })
    return app
}
console.log(a())