function reload() {

    location.reload();
    Flutter.postMessage("getMessage");


}

function getMessage(data) {

    const body = data?.body ?? '';
    const title = data?.title ?? '';

    alert(title + ' ' + body);

}