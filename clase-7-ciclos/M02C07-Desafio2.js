// Tabla de multiplicar

// Retornando el texto al final
// Explicar \n (salto de linea)
function tablaDeMultiplicar2() {
    let tablas = "     Tabla de multiplicar\n";

    for (let tabla = 1; tabla <= 10; tabla++) {
        tablas += " --------------------\n";
        let num = 1;
        do {
            tablas += " "+ tabla +" * "+ num +" = " + tabla * num + "\n";
            num++;
        } while (num <= 10);
    }

    return tablas;
}

console.log(tablaDeMultiplicar2());



function imprimirTablasMultiplicar() {
    for (let i = 1; i <= 10; i++) {
      console.log(`Tabla del ${i}:`);
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
      console.log('-----------------------');
    }
  }
  
  // Llamada a la función
  imprimirTablasMultiplicar();