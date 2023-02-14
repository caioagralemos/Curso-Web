class Animal {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    eat() {
        console.log(`${this.name} is eating!`)
    }
}

class Cat extends Animal {
    constructor(name, age, livesLeft = 7){
        super(name, age) // a função super chama o constructor da classe mãe
        this.livesLeft = livesLeft
    }
    meow(){
        console.log(`${this.name} says MEOW!`)
    }
}

class Dog extends Animal {
    bark(){
        console.log(`${this.name} says BARK!`)
    }
    eat(){
        // sobrescreve a função de animal (em caso de duas, sempre usa a mais especifica)
        console.log(`${this.name} scarfs his food!`)
    }
}

let Gordinho = new Dog("Luke", 6)