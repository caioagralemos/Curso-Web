const fs = require("fs") // file system
const folderName = process.argv[2] || "Project" // pega os argumentos passados (o indice 2 tira os nativos)

    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.css`)
    fs.writeFileSync(`${folderName}/app.hs`)

//node firstScript.js Projetito