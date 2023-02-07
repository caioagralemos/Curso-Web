guess = prompt("Seu chute entre 0 e 100: ")
parseInt(guess)
let aleatorio = Math.ceil(Math.random() * 101)
contador = 0

while(true){
    if (guess == aleatorio){
        contador += 1
        break
    }
    else if (guess > aleatorio){
        guess = prompt("Menor que isso! Tente de novo: ")
        parseInt(guess)
        contador += 1
    }
    else if (guess < aleatorio){
        guess = prompt("Maior que isso! Tente de novo: ")
        parseInt(guess)
        contador += 1
    }
}
alert(`Acertou! Você precisou de ${contador} tentativas.`)
