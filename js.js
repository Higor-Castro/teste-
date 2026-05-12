function reload() {
    Flutter.postMessage("getMessage");
  
}
function getMessage(data) {

    const body = data?.message?.body ?? '';
    const title = data?.message?.title ?? '';

    alert(title + ' ' + body);
    location.reload();
}