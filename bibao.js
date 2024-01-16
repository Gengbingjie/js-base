function createApp(...args){
    const app = ensureRenderer().createApp1(...args)
    return app
}

function ensureRenderer(){
    return createRenderer()
}

function createRenderer(){
    const render = () => {
        console.log('render function')
    }
    const hydrate = undefined
    return {
        render,
        hydrate,
        createApp1 : createAppAPI(render,hydrate)
    }
}

function createAppAPI(render, hydrate){
    return function createApp2(rootComponent, rootProps = null){
        const app = {
            mount(){
                console.log('mount')
            }
        }
        return app
    }
}

createApp({a : 1,b : 2}).mount()