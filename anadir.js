var ncanciones = 0

function poner() {
    //ncanciones identifica la cancion que se esta creando
    ncanciones++;
    //queremos crear esto
    var divgroup = document.createElement("div");
    divgroup.setAttribute("class", "row justify-content-center");
    divgroup.setAttribute("id", "cancion-" + ncanciones);

    var placeHolder = document.createElement("input");
    placeHolder.setAttribute("type", "text");
    placeHolder.setAttribute("name", "cancion" + ncanciones);
    placeHolder.setAttribute("class", "form-control");
    placeHolder.setAttribute("placeholder", "cancion" + ncanciones);

    var divPlaceHolder = document.createElement("div");
    divPlaceHolder.setAttribute("class", "col-auto");

    var divbutton = document.createElement("div");
    divbutton.setAttribute("class", "col-auto");


    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary mb-3");
    button.setAttribute("type", "button");
    button.setAttribute("id", ncanciones.toString());
    button.setAttribute("onClick", "quitar(this.id)");
    button.textContent = '-';

    divgroup.appendChild(divPlaceHolder);
    divPlaceHolder.appendChild(placeHolder);
    divgroup.appendChild(divbutton)
    divbutton.appendChild(button);
    //lo ponemos todo dentro del div form-group
    document.getElementById("debajo").appendChild(divgroup)
    var valor = document.getElementById("hidden").value
    document.getElementById("hidden").setAttribute("value", valor + ',' + ncanciones)

}
function quitar(elem_id) {
    //elem_id indica el boton que ha sido clicado para poder eliminar el div en el que se encuentra
    document.getElementById("cancion-" + elem_id).remove();
    var resul = "";
    var valor = document.getElementById("hidden").value;
    valor.split(',').forEach(num => {
        if(num!==elem_id){
            if(resul.length>0){
                resul+= ','+num
            }else{
                resul+=num
            }    
        }    
    });
    document.getElementById("hidden").setAttribute("value", resul)

}
