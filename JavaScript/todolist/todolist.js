command = prompt("What would you like to do?")
command = command.toLowerCase()
list = []
while(true){
    if (command != "new" && command != "list" && command != "delete" && command != "quit"){
        command = prompt("What would you like to do?")
    }
    else {
        if (command === "new"){
            newtodo = prompt("Name your new to-do: ")
            list.push(newtodo)
            console.log(`${newtodo} added to your list`)
        }
        else if (command === "list"){
            command.log(list)
        }
        else if (command === "delete"){
            deltodo = prompt("What to-do would you like to delete?")
        }
        else if (command === "quit"){
            break
        }
    }
}