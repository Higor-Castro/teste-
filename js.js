window.addEventListener('load', () => {

    const primeiraCarga = sessionStorage.getItem('primeiraCarga');

    if (!primeiraCarga) {
        sessionStorage.setItem('primeiraCarga', 'false');
        return;
    }
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