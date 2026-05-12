function reload() {
    location.reload;
    getMessage();
}

function getMessage(data) {

    alert(
        data.message.body +
        ' ' +
        data.message.title
    );
}