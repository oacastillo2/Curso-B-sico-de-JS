function auto(marca, modelo, annio){
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var marcas = ["Tesla", "BMW", "Mercedes Benz", "Jaguar", "Ferrari", "Masserati"];
var modelos = ["S", "E", "X", "Y"];
var annio = 2020;
var cantAutos = 30;
var seguimos = true;
var autosGuardados = [];

while (seguimos){
  for (marca of marcas){
    for (modelo of modelos) {
      var NuevoAuto = new auto(marca, modelo, annio);
      autosGuardados.push(NuevoAuto);
      cantAutos--;
      if (cantAutos == 0){
        seguimos = false;
        break;
      }
    }
    if (cantAutos == 0){
      break;
    }
  }
}

var carrosFiltrados = autosGuardados.filter(function(carro){
  return carro.marca == "Tesla";
});
var carrosMapeados = autosGuardados.map(function(automovil){
  return automovil.marca;
});
var carrosParaCada = autosGuardados.forEach(function(automovil){
 console.log(automovil.marca);
});
var encuentraCarrito = autosGuardados.find(function(carrito){
  return carrito.marca == "Tesla";
});


console.log(carrosParaCada);
