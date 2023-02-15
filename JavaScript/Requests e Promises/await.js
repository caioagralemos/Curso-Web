// await só pode ser utilizado em func assincronas (async)
// await vai pausar a ex. de uma func esperando que a promise seja resolved

const delayedColorChanged = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            document.body.style.transition = "1s"
            resolve()
        }, delay)
    })
}

// delayedColorChanged("blue", 1000)
//     .then(() => delayedColorChanged("brown", 1000))
//     .then(() => delayedColorChanged("green", 1000))
//     .then(() => delayedColorChanged("purple", 1000))
//     .then(() => delayedColorChanged("pink", 1000))
//     .then(() => delayedColorChanged("rgb(4, 0, 16)", 1000))

    async function rainbow(){
        // se definirmos várias func aqui, todas serão executadas ao msm tempo
        // await faz com que as proximas func só sejam executadas dps que a
        // promessa for cumprida
        await delayedColorChanged("red", 1000)
        await delayedColorChanged("blue", 1000)
        await delayedColorChanged("purple", 1000)
        await delayedColorChanged("rgb(4, 0, 16)", 1000)
        return "ALL DONE" // retorno da func async da func como resolved
    }