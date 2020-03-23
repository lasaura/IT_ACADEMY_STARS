function estrella(value) {
    clearEstrella(); //vacia clase active
    addEstrellas(value); //añade clase active
}

function clearEstrella() { //primer paso limpiar todos los rates
    for(var i=1; i<=5; i++) {
        document.getElementById("star" +i).classList.remove("active");
    }
}

function addEstrellas(value) { //despues de limpiar, pongo los active nuevos
    for(var i=1; i<=value; i++) {
        document.getElementById("star" +i).classList.add("active");
    }
}

window.addEventListener("click", function(e) { //capturo cualquier click en cualquier sitio "e" es el nombre argument
    if(!document.getElementById("rate").contains(e.target)) { //si el click NO está dentro del div, limpiar todo
        clearRates();
    }
})