function iniciarJuego() {
    let btnMascotaPlayer = document.getElementById("btn-mascota")
    btnMascotaPlayer.addEventListener("click", seleccionarMascotaPlayer)
}

window.addEventListener("load", iniciarJuego)

function random_(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaPlayer() {
    let hipodoge = document.getElementById("hipodoge")
    let capipepo = document.getElementById("capipepo")
    let ratigueya = document.getElementById("ratigueya")

    if (hipodoge.checked) { mascota = "HIPODOGE" }
    else if (capipepo.checked) { mascota = "CAPIPEPO" }
    else if (ratigueya.checked) { mascota = "RATIGUEYA" }
    else { alert("Selecciona una mascota") }

    let spanMascota = (document.getElementById("nom-mascota").innerHTML = mascota)

    seleccionarMascotaPC()
}

function seleccionarMascotaPC() {
    let spanEnemigo = document.getElementById("nom-enemigo")
    let ataqueRandom = random_(1, 3)

    if (ataqueRandom == 1) { spanEnemigo.innerHTML = "HIPODOGE" }
    else if (ataqueRandom == 2) { spanEnemigo.innerHTML = "CAPIPEPO" }
    else if (ataqueRandom == 3) { spanEnemigo.innerHTML = "RATIGUEYA" }
    else { alert("ERROR") }
}

