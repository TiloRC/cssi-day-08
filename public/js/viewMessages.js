const getMessages = () => {
    const passcode = document.querySelector("#passcode");
    const messagesRef = firebase.database().ref();
    messagesRef.on("value", (snapshot) => {
        const data = snapshot.val()
        for (let key in data){
            console.log(data[key].passcode)
            if ( passcode.value === data[key].passcode ) {
                message.innerHTML =  data[key].message
                break
            }
        error_message = document.querySelector("#error_message")
        error_message.classList.remove("hidden")
        error_message.innerHTML = "No such passcode"
        message.innerHTML = ""

        }
        //key = passcode.value
        //console.log(data[key])
        //message = document.querySelector("#message")
        // if (data[key] ==undefined ) {
        //     message = document.querySelector("#error_message")
        //     message.classList.remove("hidden")
        //     message.innerHTML = "No such passcode"
        // }

    } )
}