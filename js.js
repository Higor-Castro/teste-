let primeiraCarga = true;

window.addEventListener('load', () => {

    if (primeiraCarga) {

        primeiraCarga = false;
        alert(1);

        return;
    }
    alert(2);
    Flutter.postMessage("getMessage");

});

function reload() {

    location.reload();

}

function getMessage(data) {

    const body = data?.body ?? '';
    const title = data?.title ?? '';

    alert(title + ' ' + body);

}