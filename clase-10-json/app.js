let bicicletasImportadas = require("./datosBici.js");

let dhBici = {

    bicicletas: bicicletasImportadas,

    buscarFind: function (idbuscar){

        let res = this.bicicletas.find ( (bici) => {
            return idbuscar === bici.id
        })

        if (res) {
            return res
        } else {
            return null
        }
    },

    
        // 2 - b
        venderBici: function (idABuscar) {
            let biciBuscada = this.buscarBici(idABuscar);
            if (biciBuscada != null) {
                biciBuscada.vendida = true;
                return biciBuscada
            } else {
                return("Bicicleta no encontrada")
            }
        },

    // 2 - a
    buscarBici: function (idABuscar) {
        let bicicletaADevolver = this.bicicletas.filter(bicicleta => {
            return bicicleta.id == idABuscar
        })
        if (bicicletaADevolver.length > 0) {
            return bicicletaADevolver[0]
        } else {
            return null
        }
    },


    // 2 - c
    biciParaLaVenta: function () {
       let bicicletasSinVender = this.bicicletas.filter(function(bicicleta) {
            return bicicleta.vendida == false;
       })

       return bicicletasSinVender;
    },

    // 2 - d
    totalDeVentas: function () {
        let bicicletasVendidas = this.bicicletas.filter(function(bicicleta) {
             return bicicleta.vendida == true;
        })

        let ventaTotal = bicicletasVendidas.reduce(function(total, actual) {
            return total + actual.precio
        }, 0)
        
        return ventaTotal;
    },
}

console.log(dhBici.buscarFind(10)); 

// 2 - b
/* console.log(dhBici.venderBici(7)); */

// 2 - c
/* console.log(dhBici.biciParaLaVenta()); */

// 2 - d
/* console.log(dhBici.totalDeVentas()); */