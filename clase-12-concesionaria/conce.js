const autosImportados = require("./autos");

let concesionaria = {
   autos: autosImportados,
   buscarAuto: function (patente) {
      let autoEncontrado = this.autos.find((auto) => auto.patente == patente);
      if (autoEncontrado) {
         return autoEncontrado
      } else {
         return null
      }
   },
   venderAuto: function (patente) {
      let auto = this.buscarAuto(patente);
      if (auto) {
         auto.vendido = true;
      }
   },
   autosParaLaVenta: function () {
      return this.autos.filter((auto) => auto.vendido == false);
   },
  autosNuevos: function () {
    return this.autosParaLaVenta().filter((auto) => auto.km < 100);
  },
  listaDeVentas: function () {
    let autosVendidos = this.autos.filter((auto) => auto.vendido == true);
    return autosVendidos.map((auto) => auto.precio);
  },
  totalDeVentas: function () {
    return this.listaDeVentas().reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  },

  puedeComprar: function (auto, persona) {
    let pagoPorCuotaDelAuto = auto.precio / auto.cuotas;
    if (
      persona.capacidadDePagoEnCuotas >= pagoPorCuotaDelAuto &&
      persona.capacidadDePagoTotal >= auto.precio
    ) {
      return true;
    } else {
      return false;
    }
  },
  autosQuePuedeComprar: function(persona){
    let autos = this.autosParaLaVenta();
    let posibles = autos.filter((auto)=>{
      return this.puedeComprar(auto, persona)
    })
    return posibles 
 }
};

// autosQuePuedeComprar: function (persona){
//     let autosALaVenta = this.autosParaLaVenta();
//     let puedeComprar = this.puedeComprar;
//     let autosQuePuedeComprar = autosALaVenta.filter((auto) => {
//        return puedeComprar (auto, persona);
//     });
//     return autosQuePuedeComprar;
//  }

//  autosQuePuedeComprar: function(persona){
//     let autos = this.autosParaLaVenta();
//     let posibles = autos.filter((auto)=>{
//       return this.puedeComprar(auto, persona)
//     })
//     return posibles 
//  }