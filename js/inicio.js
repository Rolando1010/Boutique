//Ejemplos

const ejemplos = document.querySelector(".ejemplos");

addEventListener("resize",()=>{
    AjustarEjemplos();
})

AjustarEjemplos();
    
function AjustarEjemplos(){
    console.log(ejemplos.clientWidth);
    const contenedoresEjemplo = document.querySelectorAll(".contenedorEjemplo");
    for(var i=0;i<contenedoresEjemplo.length;i++){
        if (ejemplos.clientWidth<300){
            contenedoresEjemplo[i].style.width=(ejemplos.clientWidth*0.9).toString()+"px";
        }
        if (ejemplos.clientWidth<700){
            contenedoresEjemplo[i].style.marginLeft=((ejemplos.clientWidth-contenedoresEjemplo[i].clientWidth)/2).toString()+"px";
        }
        if (ejemplos.clientWidth>300){
            contenedoresEjemplo[i].style.width = "300px";
        }
        if (ejemplos.clientWidth<700){
            contenedoresEjemplo[i].style.marginLeft = "20px";
        }
    }
}

//Slider

const imagenSlider = document.querySelector(".imagenSlider");

const imagenes = ["img1.jpg","img2.jpg","img3.jpg"]
const textoImagenes = ["AAAAAAAAAA","BBBBBBBB","CCCCCCCCCCC"];
var opcionesSlider = [];

const menuSlider = document.querySelector(".menuSlider");
const slider = document.querySelector(".slider");
const textoSlider = document.querySelector(".textoSlider");

var actualPos = 0

iniciarSlider();

function iniciarSlider(){
    for (var i=0;i<imagenes.length;i++){
        opcionSlider = "<div class='opcionSlider'></div>";
        menuSlider.innerHTML += opcionSlider
    }
    imagenSlider.src = "img/"+imagenes[actualPos];
    textoSlider.textContent = textoImagenes[actualPos];
    opcionesSlider = document.querySelectorAll(".opcionSlider");
    opcionesSlider[actualPos].style.backgroundColor = "#9e092c"
}

document.querySelector(".menuSlider").addEventListener("click",(evento)=>{
    opcionesSlider[actualPos].style.backgroundColor = "grey";
    var seleccionado = evento.path[0];
    for(var i=0;i<opcionesSlider.length;i++){
        if (seleccionado==opcionesSlider[i]){
            actualPos=i;
            break;
        }
    }
    imagenSlider.src = "img/"+imagenes[actualPos];
    textoSlider.textContent = textoImagenes[actualPos];
    opcionesSlider[actualPos].style.backgroundColor = "#9e092c";
});

setInterval(function(){
    opcionesSlider[actualPos].style.backgroundColor = "grey";
    actualPos+=1
    if (actualPos==imagenes.length){
        actualPos=0;
    }
    imagenSlider.src = "img/"+imagenes[actualPos];
    textoSlider.textContent = textoImagenes[actualPos];
    opcionesSlider[actualPos].style.backgroundColor = "#9e092c";
}, 5000);