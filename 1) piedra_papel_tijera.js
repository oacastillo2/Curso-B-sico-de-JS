var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";
var optValida = false;
var optUsuario;
var optMaquina = ["piedra", "papel", "tijera"];

for (var i = 1; i < 4; i++){
  document.write(`Iteración: ${i} ` + jugar(validaOptUsuario(), maquina()) + "<br>");
}
