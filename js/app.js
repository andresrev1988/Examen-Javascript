function cambiarTamañoAccionTecla(elemento){
    elemento.style.height = "61px";
}
function retornarTamañoAccionTecla(elemento){
  elemento.style.height = "62.91px";
}
function cambiarTamañoAccionMAS(elemento){
    elemento.style.height = "95%";
}
function retornarTamañoAccionMAS(elemento){
  elemento.style.height = "100%";
}
/////////////////////////////
var Calculadora = {
  init: function(){
    this.asignarEventosBotones('tecla');
  },
  asignarEventosBotones: function(selector){
      var botonesPagina = document.getElementsByClassName(selector);
      for (var i = 0; i < botonesPagina.length; i++) {
        if(botonesPagina[i].id=="mas"){
          botonesPagina[i].onmousedown = this.eventoClickMAS;
          botonesPagina[i].onmouseup = this.eventoSueltaMAS;
        }else{
        botonesPagina[i].onmousedown = this.eventoClickTecla;
        botonesPagina[i].onmouseup = this.eventoSueltaTecla;
        }
      }
  },
  eventoClickTecla: function(event){
    cambiarTamañoAccionTecla(event.target);
  },
  eventoSueltaTecla: function(event){
    retornarTamañoAccionTecla(event.target);
  },
  eventoClickMAS: function(event){
    cambiarTamañoAccionMAS(event.target);
  },
  eventoSueltaMAS: function(event){
    retornarTamañoAccionMAS(event.target);
  }
}

Calculadora.init();
