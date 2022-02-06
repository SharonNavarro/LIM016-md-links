const fs = require('fs');

const path = require('path');

const exit = require('process');

const ruta = process.argv[2];

const existeRuta = (x) => fs.existsSync(x); 

if (existeRuta(ruta)) {
  console.log('El archivo existe');
} else {
  console.log('El archivo no existe');
  exit();
}

console.log(path.extname(ruta).substring(1));

// Funcion para leer un archivo y mostrarlo en la consola
fs.readFile(ruta, 'utf8', (err) => {
  if (err) throw err;
  console.log('OK: ', (ruta));
//   console.log(data)
});

const esRutaAbsoluta = (ruta) => path.isAbsolute(ruta);

// Convierte la ruta en absoluta
const rutaAbsoluta = (ruta) => {
  let x;
  if (esRutaAbsoluta(ruta) === false) {
    x = path.resolve(ruta);
    console.log('se convirtio en absoluta: ', x);
  }
  return x;
};

console.log(rutaAbsoluta(ruta));

const traverseSync = (ruta) => ({
  path: ruta,
  children: fs.readdirSync(ruta).map((file) => {
    const Path = path.join(ruta, file);
    return fs.lstatSync(Path).isDirectory()
      ? traverseSync(path)
      : { path };
  }),
});
console.log(traverseSync(ruta));
