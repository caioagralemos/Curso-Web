// function hex (r,g,b) {
//     return '#' + ((1 << 24) + (r<<16) + (g << 8) + b).toString(16).slice(1)
// }
// function rgb(r,g,b) {
//     return `rgb(${r}, ${g}, ${b})`
// }

// hex(255,100,25)

function makeColor (r,g,b) {
    // Factory Function
    // os métodos são definidos cada vez que um objeto é criado
    const color = {}
    color.r = r
    color.g = g
    color.b = b
    color.rgb = function () {
        return `rgb(${this.r}, ${this.g}, ${this.b})`  
    }
    color.hex = function () {
        return '#' + ((1 << 24) + (this.r<<16) + (this.g << 8) + this.b).toString(16).slice(1)
    }
    return color
}

const myColor = makeColor(100,100,40)
myColor.hex() // "#646428"

// Protótipos

function Color(r,g,b) {
    this.r = r
    this.g = g
    this.b = b
    console.log(this)
}

new Color(255,255,255) // new cria um novo objeto baseado no seu protótipo

Color.prototype.rgb = function () {
    // definindo métodos
    const {r,g,b} = this // trazendo as variáveis (ao invés de usar r.this, g.this, b.this)
    return `rgb(${r}, ${g}, ${b})` 
}

Color.prototype.rgba = function (opacity = 1.0) {
    const {r,g,b} = this
    return `rgba(${r}, ${g}, ${b}, ${opacity})` 
}

Color.prototype.hex = function () {
    const {r,g,b} = this // trazendo as variáveis (ao invés de usar r.this, g.this, b.this)
    return '#' + ((1 << 24) + (r<<16) + (g << 8) + b).toString(16).slice(1)
}