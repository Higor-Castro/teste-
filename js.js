function reload() {
    Flutter.postMessage("getMessage");
  
}
function getMessage(data) {

    const body = data?.body ?? '';
    const title = data?.title ?? '';
    alert(JSON.stringify(data));

    alert(title + ' ' + body);
   
}