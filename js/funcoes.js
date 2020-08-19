function downloadKit() {

    var nome = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;

    const regexNome = /^\D{2,}\s[\D\s]{2,}$/;
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValidNome = regexNome.test(nome.toLowerCase());
    const isValidEmail = regexEmail.test(email.toLowerCase());

    if (isValidNome && isValidEmail) {
        var a = document.createElement("a");
        a.href = "https://benepravc.netlify.app/KitBenê.zip";
        a.target = "_blank"
        a.download = "KitBenê.zip";
        document.body.appendChild(a);
        a.click();
    }
}

function copyToClipboard(str) {
    alert("Link copiado!")

    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};