function reload() {
    Flutter.postMessage("getMessage");
  
}
function getMessage(data) {

    const body = data?.body ?? '';
    const title = data?.title ?? '';
    alert(data);

    alert(title + ' ' + body);
    location.reload();
}