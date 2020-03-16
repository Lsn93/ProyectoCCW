$(document).ready(function(){
  $("button.botonNegocios").click(function(){
    $("table.tabla1").toggle();
  });
});

$(document).ready(function() {
    $("#id02").remove();
  });

function verURL() {
  document.getElementById("url").innerHTML = document.URL
}

function verDominio() {
  document.getElementById("dominio").innerHTML = document.domain;
}

function verFechaMod() {
  document.getElementById("fechaMod").innerHTML = document.lastModified;
}

function verTitulo() {
  document.getElementById("tituloDoc").innerHTML =
"El títilo de este documento es: " + document.title;
}

function reemplazarContenido() {
  document.open("patio","replace");
  document.write("<h2>Felicidades, Cambiaste el contenido, recarga la página para volver.</h2>");
  document.close();
}

function inhabilitarElemento() {
  document.getElementById("boton2").disabled = true;
}

function reiniciarValores() {
  document.getElementById("frm1").reset();
}

function inhabilitarLista() {
  document.getElementById("miSeleccion").disabled=true;
}
function habilitarLista() {
  document.getElementById("miSeleccion").disabled=false;
}

function cambiarTextoMayus() {
  var x = document.getElementById("pnombre");
  x.value = x.value.toUpperCase();
}