addEventListener("resize",()=>{
    var opciones = document.querySelectorAll(".opcionPrenda");
    for (var i=0;i<opciones.length;i++){
        if (window.innerWidth<500){
            opciones[i].style.width = "90%";
        }else{
            opciones[i].style.width = "400px";
        }
    } 
});