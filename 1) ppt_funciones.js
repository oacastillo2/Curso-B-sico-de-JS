function validaOptUsuario(){
  optUsuario = prompt("Escoje con que quieres jugar: Piedra, Papel o Tijera").toLowerCase();
  while (optValida != true){
    if ((optUsuario == "piedra") || (optUsuario == "papel") || (optUsuario == "tijera"))
      optValida = true;
      else {
        optUsuario = prompt("Opción inválida, recuerda: Piedra, Papel o Tijera").toLowerCase();
      }
    }
  return optUsuario;
}

function maquina(){
  var optMaquinaNum = Math.floor(Math.random() * optMaquina.length);
  return optMaquina[optMaquinaNum];
}

/*function jugar(jugador,maquina){
  var result;
  if(jugador == maquina){
    result = "empate";
  }
  else if ((jugador == "piedra") && (maquina == "tijera")){
    result = "ganaste";
  }
  else if ((jugador == "piedra") && (maquina == "papel")){
    result = "perdiste";
  }
  else if ((jugador == "papel") && (maquina == "piedra")){
    result = "ganaste";
  }
  else if ((jugador == "papel") && (maquina == "tijera")){
    result = "perdiste";
  }
  else if ((jugador == "tijera") && (maquina == "papel")){
    result = "ganaste";
  }
  else if ((jugador == "tijera") && (maquina == "piedra")){
    result = "perdiste";
  }
  return result;
}*/


function jugar(jugador,maquina){
  var result;
  switch (jugador + "-" + maquina){
    case "piedra-piedra":
      result = "empate";
      console.log(jugador,maquina);
      break;
    case "papel-papel":
      result = "empate";
      console.log(jugador,maquina);
      break;
    case "tijera-tijera":
      result = "empate";
      console.log(jugador,maquina);
      break;
    case "piedra-tijera":
      result = "ganaste";
      console.log(jugador,maquina);
      break;
    case "piedra-papel":
      result = "perdiste";
      console.log(jugador,maquina);
      break;
    case "papel-piedra":
      result = "ganaste";
      console.log(jugador,maquina);
      break;
    case "papel-tijera":
      result = "perdiste";
      console.log(jugador,maquina);
      break;
    case "tijera-papel":
      result = "ganaste";
      console.log(jugador,maquina);
      break;
    case "tijera-piedra":
      result = "perdiste";
      console.log(jugador,maquina);
      break;
  }
  return result;
}
