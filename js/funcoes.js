function downloadKit() {
    var a = document.createElement("a");
    a.href = "https://benepravc.netlify.app/KitBenê.zip";
    a.target = "_blank"
    a.download = "KitBenê.zip";
    document.body.appendChild(a);
    a.click();
}