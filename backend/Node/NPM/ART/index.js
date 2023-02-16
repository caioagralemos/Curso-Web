let colors = require("colors")
let figlet = require("figlet")

figlet('Nonstop', function(err, data) {
    if (err){
        console.log("Error: ", err)
    }
    console.log(data.rainbow)
})
