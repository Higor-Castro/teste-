function reload() {
    location.reload();
    getMessage();
  
}
function getMessage(data) {
    Flutter.postMessage("getMessage");
    const body = data?.body ?? '';
    const title = data?.title ?? '';
    alert(JSON.stringify(data));

    alert(title + ' ' + body);
   
}