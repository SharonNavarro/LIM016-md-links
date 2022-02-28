// Archivo js de prueba
// const http = require('http');

// http.createServer((req, res) => {
//   res.write('<h1>Hola Mundo</h1>');
// }).listen(3000);

// fs.readFile('./README.md', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// const Math = {};

// function add(a, b) {
//   return a + b;
// }

// function substract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// Math.add = add;
// Math.substract = substract;
// Math.multiply = multiply;

// module.exports = Math;
// exports.add = add;
//Es la ruta  un directorio?
// const rutaDirectorio = (ruta) => fs.statSync(ruta).isDirectory();    // preguntamos si la ruta es un directorio

//Recursividad..... te devuelve un arreglo con los archivos de la ruta
// const listaDirectorios = ruta => {
//     let arrayDirectorio = [];
//     if(rutaArchivo(ruta)) {                 //si la ruta es un archivo
//         arrayDirectorio.push(ruta);         //agrega el archivo al arrayDirectorio
//     }else {
//         const contenidoDirectorio = fs.readdirSync(ruta);   //Extrae las rutas del directorio
//         contenidoDirectorio.forEach(file => {               //Iterar las rutas del directorio
//             const rutaDirectorio = path.join(ruta,file);     //Obtengo la ruta absoluta al archivo  
//             arrayDirectorio = arrayDirectorio.concat(listaDirectorios(rutaDirectorio))   
//             //Concatena los archivos de array directorio con ruta directorio
//         })
//     }
//     return arrayDirectorio;
//     //console.log(arrayDirectorio);  
// };
