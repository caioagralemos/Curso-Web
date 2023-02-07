const mymath = {
    PI: 3.1415,
    square: function(num){
        return num * num
    },
    sum: function(n1, n2){
        return n1 + n2
    },
    subtract: function(n1, n2){
        return n1 - n2
    },
    multiply: function(n1, n2){
        return n1 * n2
    },
    divide: function(n1, n2){
        return n1 / n2
    }
}

mymath.divide(10,2) // 5 

const doggo = {
    name: "Luke",
    gender: "Male",
    breed: "French Bulldog",
    bark: function() {
        // this.name relativo ao objeto pai!
        console.log(`${this.name} barked! BARK BARK`)
    }
}