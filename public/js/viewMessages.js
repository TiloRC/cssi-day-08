const getMessages = () => {
    const passcode = document.querySelector("#passcode");
    const messagesRef = firebase.database().ref();
    messagesRef.on("value", (snapshot) => {
        const data = snapshot.val()
        key = passcode.value
        console.log(data[key])
        message = document.querySelector("#message")
        if (data[key] ==undefined ) {
            alert("undefined")
        }
        message.innerHTML = data[key]

    } )
}