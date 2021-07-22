const onSubmit = () => {
    console.log("submit botton clicked");
    const passcodeInput = document.querySelector("#passcode").value;
    const messageInput = document.querySelector("#message").value;
    const payload = {
        passcode: passcodeInput,
        message: messageInput
    };
    firebase.database().ref().push(payload);

}