// Classes

class Cor {
    constructor(r,g,b, name = "cor"){
        // constructor(params)
        // assim como init em swift ou python
        this.r = r
        this.g = g
        this.b = b
        this.name = name
    }
    greet(){
        // definindo métodos (também são definidos apenas 1 vez, e não para cada objeto)
        console.log(`Essa cor é ${this.name}`)
    }
    rgb(){
        const {r,g,b} = this
        return `rgb(${r},${g},${b})`
    }
    rgba(a = 1.0){
        const {r,g,b} = this
        return `rgb(${r},${g},${b}, ${a})`
    }
    hex(){
        const {r,g,b} = this
        return '#' + ((1 << 24) + (r<<16) + (g << 8) + b).toString(16).slice(1)
    }
}

const preto = new Cor(1,1,1, "preto") // instanciando novo objeto