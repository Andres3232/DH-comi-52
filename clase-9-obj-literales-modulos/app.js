// Microdesafio 1

let peliculasFavoritas = require("./peliculas.js");

for (let i = 0; i < peliculasFavoritas.length; i++) {
    console.log("");
    console.log("Pelicula en la posición " + i + ":")
    console.log(peliculasFavoritas[i]);
    console.log("");
} 



// Microdesafio 2

let fs = require("fs");

let rutaArchivo = "./mensaje.txt";

let textoArchivo = fs.readFileSync(rutaArchivo,"utf-8");

console.log(textoArchivo)   