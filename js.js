window.addEventListener('load', () => {

    const primeiraCarga = sessionStorage.getItem('primeiraCarga');

    if (primeiraCarga === null) {

        sessionStorage.setItem('primeiraCarga', '1');

        return;
    }

    Flutter.postMessage("getMessage");

});

function reload() {

    location.reload();

}

function getMessage(data) {

    const title = data?.title ?? '';

    if (title.includes("Tela 1")) {

        window.location.href = "tela1.html";

    }
    else if (title.includes("Tela 2")) {

        window.location.href = "tela2.html";

    }

}