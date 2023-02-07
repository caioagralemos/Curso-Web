const listinha = []
while(true){
    let command = prompt("What would you like to do?")
    command = command.toLowerCase()
    if (command == "quit") {
        alert("You've successfully quitted the program!")
        break
    }
    else if (command != "new" && command != "list" && command != "delete"){
        continue
    }
    else {
        if (command === "new"){
            newtodo = prompt("Name your new to-do: ")
            listinha.push(newtodo)
            alert(`${newtodo} added to your list`)
        }
        else if (command === "list"){
            let string = "**********\n"
            for (let elemento in listinha){
                string = string + `- ${listinha[elemento]}\n`
            }
            string = string + "**********"
            alert(string)
            continue
        }
        else if (command === "delete"){
            deltodo = prompt("What to-do would you like to delete?")
            let eai = listinha.indexOf(deltodo)
            if (eai != -1){
                listinha.splice(eai, 1)
                alert(`${deltodo} removed from your list`)
            }
            else{
                alert(`Error 404 not found\nThere is no ${deltodo} on your list`)
            }
            continue
        }
    }
}