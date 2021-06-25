var limiteAnchoMenu = 690;
var menuPlegado = false;
var menuVerticalAbierto = false;

const barraMenu = document.querySelector(".barra");
const iconoBarra = document.querySelector(".fa-bars");
const menuVertical = document.querySelector(".menuVertical");
const fondoMenuVertical = document.querySelector(".fondoMenuVertical");

const menu = document.querySelector(".menu");
const tituloMenu = document.querySelector(".titulo");
const opcionesMenu = document.querySelectorAll(".opcion");

if (window.innerWidth>limiteAnchoMenu){
    menuPlegado = true;
}

PlegarMenu();

addEventListener("resize",()=>{
    PlegarMenu();
    AdaptarMenuVertical();
    if (window.innerWidth>limiteAnchoMenu){
        CerrarMenuVertical();
    }
});

function PlegarMenu(){
    var anchoNavegador = window.innerWidth;
    if (!menuPlegado){
        if (anchoNavegador<limiteAnchoMenu){
            for (var i=0;i<opcionesMenu.length;i++){
                if (opcionesMenu[i]!=tituloMenu){
                    menu.removeChild(opcionesMenu[i]);
                }
            }
            tituloMenu.style.borderRight="0px solid #fcfcfc";
            menu.appendChild(barraMenu);
            menuPlegado = true;
        }
    }else{
        if (anchoNavegador>limiteAnchoMenu){
            for(var i=0;i<opcionesMenu.length;i++){
                if (tituloMenu!=opcionesMenu[i]){
                    menu.appendChild(opcionesMenu[i]);
                }
            }
            tituloMenu.style.borderRight="1px solid #9e092c";
            menu.removeChild(barraMenu);
            menuPlegado = false;
        }
    }
    var anchoRestante = menu.clientWidth-(document.querySelector(".logo").clientWidth+tituloMenu.clientWidth);
        barraMenu.style.width = (anchoRestante).toString()+"px";
}

iconoBarra.addEventListener("click",()=>{
    MostrarMenuVertical();
});

function MostrarMenuVertical(){
    if (!menuVerticalAbierto){
        fondoMenuVertical.style.display = "flex";
        fondoMenuVertical.style.opacity = 1;
        AdaptarMenuVertical();
        menuVerticalAbierto = true;
    }
    else{
        CerrarMenuVertical();
    }
}

function CerrarMenuVertical(){
    fondoMenuVertical.style.display = "none";
    fondoMenuVertical.style.opacity = 0;
    menuVerticalAbierto = false;
}

function AdaptarMenuVertical(){
    fondoMenuVertical.style.height = (alturaBody()-menu.clientHeight).toString()+"px";
    menuVertical.style.marginLeft = (window.innerWidth*0.955-200).toString()+"px";
}

fondoMenuVertical.addEventListener("click",(evento)=>{
    if (evento.path[0]==fondoMenuVertical){
        CerrarMenuVertical();
    }
});

function alturaBody(){
    var body = document.body, html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    return height;
}