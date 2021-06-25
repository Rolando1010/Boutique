var limiteAnchoMenu = 690;
const subImagenesOpcion = document.querySelectorAll(".subImagenOpcion");

AdaptarInfo();

addEventListener("resize",()=>{
    AdaptarInfo();
});

function AdaptarInfo(){
    var ancho = "";
    if (window.innerWidth < limiteAnchoMenu){
        ancho = "94%";
    }else{
        ancho = "47%";
    }
    document.querySelector(".imagenesOpcion").style.width = ancho;
    document.querySelector(".infoOpcion").style.width = ancho;
}

addEventListener("click",(evento)=>{
    var seleccionado = evento.path[0];
    var clases = seleccionado.classList;
    for (var i=0;i<clases.length;i++){
        if ("subImagenOpcion"==clases[i]){
            var prev = seleccionado.outerHTML.replace("subImagenOpcion","imagenOpcion");
            var superior = document.querySelector(".imagenOpcion");
            seleccionado.outerHTML = superior.outerHTML.replace("imagenOpcion","subImagenOpcion");
            superior.outerHTML = prev;
            break;
        }
    }
});