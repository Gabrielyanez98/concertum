//document.addEventListener("click", botonDelete())
function botonDelete (e) {
    e.preventDefault();
    console.log("Hola")
    
    let miElemento = document.createElement("div");
    let miTexto = document.createTextNode("hola")
    miElemento.appendChild(miTexto)
    let cojoId = document.getElementById("seccion")
    document.body.insertBefore(miElemento,cojoId)
    /* document.getElementById("seccion").appendChild() ="   <button class='btn btn-primary mb-3' id='delete' onclick='botonDelete(event)'>-</button>  </section>" */
}
 /* document.getElementById("delete");
if (botonDelete){
    console.log("hola")
} */