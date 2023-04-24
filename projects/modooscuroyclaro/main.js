let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function(){
    let val = body.classList.toggle("dark");
    modo.innerHTML = body.classList.contains("dark") ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

    localStorage.setItem("modo",val)
})

let valor = localStorage.getItem("modo")

if (valor == "true"){
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}

// da fiaca comentar todo