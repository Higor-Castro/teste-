function reload() {
    location.reload;
    getMessage();
}
function getMessage(data) {

    const body = data?.message?.body ?? '';
    const title = data?.message?.title ?? '';

    alert(title + ' ' + body);
}