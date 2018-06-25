function click() {
    var ok = document.getElementById("ok");
    ok.onclick = cambiarimagen;
}

function cambiarimagen() {
    var pokeballImg = document.getElementById("icon01");
    pokeballImg.src = "img/Totodile.png";
}

window.onload = click;