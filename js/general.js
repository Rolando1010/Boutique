document.head.innerHTML+=`
<link href="css/menu.css" rel="stylesheet">
<link href="css/pie.css" rel="stylesheet">
<link href="css/estilo.css" rel="stylesheet">
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
<link rel="icon" href="img/logo.ico">`;

document.body.innerHTML=`<ul class="menu">
<li><a href="index.html"><img class="logo" src="img/logo.png"></a></li>
<li class="opcion titulo"><a href="index.html">Boutique</a></li>
<li class="opcion"><a href="catalogo.html">Catálogo</a></li>
<li class="opcion"><a href="nuevo.html">Nuevo</a></li>
<li class="opcion"><a href="registro.html">Registro</a></li>
<li class="opcion"><a href="iniciosesion.html">Inicio de Sesión</a></li>
<li class="barra"><a href="#"><i class="fas fa-bars fa-4x"></i></a></li>
</ul>

<div class="fondoMenuVertical">
<ul class="menuVertical">
    <li class="opcionV"><a href="catalogo.html">Catálogo</a></li>
    <li class="opcionV"><a href="nuevo.html">Nuevo</a></li>
    <li class="opcionV"><a href="registro.html">Registro</a></li>
    <li class="opcionV"><a href="iniciosesion.html">Inicio de Sesión</a></li>
</ul>
</div>`+document.body.innerHTML;

document.body.innerHTML+=`<div class="pie">
        <div class="medioContacto">
            <h2 class="contacto">Contacto:</h2>
            <a href="#"><i class="fas fa-envelope"></i><h3 class="medio">boutique@gmail.com</h3></a>
            <br>
            <a href="#"><i class="fas fa-phone-alt"></i><h3 class="medio">+506 88888888</h3></a>
            <br>
            <a href="#"><i class="fab fa-facebook-f"></i><h3 class="medio espacio-face">Boutique</h3></a>
            <br>
            <a href="#"><i class="fab fa-instagram"></i></i><h3 class="medio espacio-inst">Boutique</h3></a>
        </div>
        <div class="finalPie">
            <a href="#"><p class="final">© Boutique 2021</p></a> 
        </div>
    </div>`

document.write('<script src="js/menu.js"></script>');