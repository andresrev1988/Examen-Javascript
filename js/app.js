function cambiarTamañoAccionTecla(elemento){
    if(elemento.id=="mas"){
      elemento.style.height = "95%";
    }else{
      elemento.style.height = "61px";
    }
}
function retornarTamañoAccionTecla(elemento){
  if(elemento.id=="mas"){
    elemento.style.height = "100%";
  }else{
    elemento.style.height = "62.91px";
  }
}
function PresionaTecla(boton){
  var tecla=boton.id;
  switch (tecla) {

    case "on":
        alert("on");
        break;
    case "sign":
        alert("sign");
        break;
    case "raiz":
        alert("raiz");
        break;
    case "dividido":
        alert("dividido");
        break;
    case "por":
        alert("por");
        break;
    case "menos":
        alert("resta");
        break;
    case "mas":
        alert("suma");
        break;
    case "igual":
        alert("igual");
        break;
    default:
        insertaNumero(boton);
      }
}

function insertaNumero(boton){
  tecla = boton.id;
      var pantalla = document.getElementById("display").innerHTML;
      var numero = "0";
      //valida punto
      var flag = true;
      if (pantalla.indexOf('.') > -1){
        flag = false;
      }
      //valida el 0
      if(pantalla == "0"){
        if(tecla=="punto"&&flag){
          numero="0.";
        }else{
          numero = tecla;
        }
      }else{
        if(tecla=="punto"&&flag){
          numero = pantalla + ".";
        }else{
          numero = pantalla + tecla;
        }
      }
      //escribe el numero en la pantalla
      if(numero.length<=8){
          document.getElementById("display").innerHTML=numero;
      }
}
////////////////////////
var Calculadora = {
  init: function(){
    this.asignarEventosBotones('tecla');
  },
  asignarEventosBotones: function(selector){
      var botonesPagina = document.getElementsByClassName(selector);
      for (var i = 0; i < botonesPagina.length; i++) {
        botonesPagina[i].onmousedown = this.eventoPresionaTecla;
        botonesPagina[i].onmouseup= this.eventoSueltaTecla;
      }
  },
    eventoPresionaTecla: function(event){
    cambiarTamañoAccionTecla(event.target);
  },
  eventoSueltaTecla: function(event){
    retornarTamañoAccionTecla(event.target);
    //solo inserta el numero cuando se suelte el click del mouse
    PresionaTecla(event.target);
  },
}

Calculadora.init();
