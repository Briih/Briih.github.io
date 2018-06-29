function click() {
    var ok = document.getElementById("icon01");
    ok.onclick = cambiarimagen;
}

function cambiarimagen() {
    var nuevo = document.getElementById("icon01");
    nuevoI.src = "examen2018/nuevo.html";
}

window.onload = click;