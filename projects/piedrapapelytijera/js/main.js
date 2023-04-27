let atqPlayer
let atqEnemy

let spanAtqPlayer = document.getElementById("atq-player").innerHTML

function iniciarJuego() {
    let btnMascotaPlayer = document.getElementById("btn-mascota")
    btnMascotaPlayer.addEventListener("click", seleccionarMascotaPlayer)

    btnFuego = document.getElementById("btn-fuego")
    btnFuego.addEventListener("click", atqFuego)
    btnAgua = document.getElementById("btn-agua")
    btnAgua.addEventListener("click", atqAgua)
    btnTierra = document.getElementById("btn-tierra")
    btnTierra.addEventListener("click", atqTierra)
}

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
    let spanEnemy = document.getElementById("nom-enemigo")
    let ataqueRandom = random_(1, 3)

    if (ataqueRandom == 1) { spanEnemy.innerHTML = "HIPODOGE" }
    else if (ataqueRandom == 2) { spanEnemy.innerHTML = "CAPIPEPO" }
    else if (ataqueRandom == 3) { spanEnemy.innerHTML = "RATIGUEYA" }
    else { alert("ERROR") }
}

function ataqueEnemy() {
    let spanAtqEnemy = document.getElementById("atq-enemigo").innerHTML

    rta = random_(1, 3)

    if (rta == 1) {
        atqEnemy = "FUEGO 🔥"
        spanAtqEnemy= "FUEGO 🔥"
    }
    else if (rta == 2) {
        atqEnemy = "AGUA 💧"
        spanAtqEnemy = "AGUA 💧"
    }
    else if (rta == 3) {
        atqEnemy = "TIERRA 🌱"
        spanAtqEnemy = "TIERRA 🌱"
    }
}

function atqFuego() {
    atqPlayer = "FUEGO 🔥"
    spanAtqPlayer = "FUEGO 🔥"
    ataqueEnemy()
}

function atqAgua() {
    atqPlayer = "AGUA 💧"
    spanAtqPlayer = "AGUA 💧"
    ataqueEnemy()
}

function atqTierra() {
    atqPlayer = "TIERRA 🌱"
    spanAtqPlayer = "TIERRA 🌱"
    ataqueEnemy()
}

window.addEventListener("load", iniciarJuego)
