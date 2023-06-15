// 1
const operacionesBancarias = [1000,2000,-500,5000,-2000,2800,-400,10500,-4700,-3800];

// Saldo Bancario
const calcularSaldoTotal =(operaciones)=> {
    let saldoDepositos = 0;
    let saldoRetiros = 0;
  
    // for (let i = 0; i < operaciones.length; i++) {
    //   if (operaciones[i] > 0) {
    //     saldoDepositos += operaciones[i];
    //   } else {
    //     saldoRetiros += operaciones[i];
    //   }
    // }

    // for (let i = 0; i < operaciones.length; i++) {
    //   (operaciones[i] > 0) 
    //     ? saldoDepositos += operaciones[i]
    //     : saldoRetiros += operaciones[i];
    //   }

    //   for (const operacion of operaciones) {
    //     (operacion > 0) 
    //     ? saldoDepositos += operacion
    //     : saldoRetiros += operacion;
        
    //   }
  
    const saldoActual = saldoDepositos + saldoRetiros;
  
    return {
      saldoDepositos,
      saldoRetiros,
      saldoActual
    };
  }
  
  // Paso 3: Crear una función para mostrar los resultados
  const mostrarResultados = (nombre, apellido, operaciones) => {
    const saldo = calcularSaldoTotal(operaciones);
    console.log(`Estimada ${nombre} ${apellido}:`);
    console.log(`El monto total de los depósitos es de: $${saldo.saldoDepositos}.`);
    console.log(`El monto total de los retiros es de: $${Math.abs(saldo.saldoRetiros)}.`);
    console.log(`Por lo tanto, su saldo actual en la cuenta es de: $${saldo.saldoActual}.`);
  }
  
  // Paso 4: Invocar la función y mostrar los resultados
  mostrarResultados("Gloria", "Medina", operacionesBancarias);

// // 2
// function calcularSaldo(operaciones) {
//     // Declaramos acumuladores
//     let depositos = 0;
//     let retiros = 0;

//     // Iteramos sobre las operaciones
//     for (operacion of operaciones) {
//         if (operacion > 0) { // Evaluamos la condición
//             depositos += operacion;
//         } else {
//             retiros += operacion;
//         }
//     }

//     // Retornamos según solicita la consigna
//     return [
//         depositos,
//         retiros,
//         depositos - retiros // saldo actual del cliente
//     ];
// }

// // 3
// function estadoDeCuenta(nombre, apellido, movimientos, callback) {
//     resultados = callback(movimientos);
//     return [
//         nombre + " " + apellido,
//         resultados[0],
//         resultados[1],
//         resultados[2]
//     ]
// }

// // Probamos la función
// let estado = estadoDeCuenta("Gloria", "Medina", operacioneBancarias, calcularSaldo);
// console.log("Estimada "+ estado[0] +":"); 
// console.log("El monto total de los depósitos es de: $"+ estado[1] +".");
// console.log("El monto total de los retiros es de: $"+ estado[1] +".");
// console.log("Por lo tanto, su saldo actual en la cuenta es de: $"+ estado[1] +".");
