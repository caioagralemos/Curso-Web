const argumento = process.argv[2] 
const langs = require('langs')
const franc = require("franc")
const colors = require("colors")

let answer = franc(argumento)

if (answer == "und") {
    console.log("We couldn't identify your language. Try a longer piece of text".red)
}
else {
    lang = String(langs.where("3", answer)["name"])
    console.log(`Our best guess is: ${lang.green}`)
}

