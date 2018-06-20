function click() {
    var ok = document.getElementById("ok");
    ok.onclick = cambiarimagen;
}

function cambiarimagen() {
    var pokeballImg, i = 1;
    if (i == 1) {
        pokeballImg = document.getElementById("icon01");
        i = 2;
    } else {
        pokeballImg.src = "img/Totodile.png";
        i = 1;
    }

}

window.onload = click;