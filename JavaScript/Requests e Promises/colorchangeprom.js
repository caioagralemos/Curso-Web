const delayedColorChanged = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            document.body.style.transition = "1s"
            resolve()
        }, delay)
    })
}

delayedColorChanged("blue", 1000)
    .then(() => delayedColorChanged("brown", 1000))
    .then(() => delayedColorChanged("green", 1000))
    .then(() => delayedColorChanged("purple", 1000))
    .then(() => delayedColorChanged("pink", 1000))
    .then(() => delayedColorChanged("rgb(4, 0, 16)", 1000))
