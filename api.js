const fs = require('fs');

const path = require('path');

const process = require('process');

const marked = require('marked');

const cheerio = require('cheerio');

const route = process.argv[2];

const routeExists = (x) => fs.existsSync(x); 

if (routeExists(route)) {
  console.log('La ruta existe');
} else {
  console.log('La ruta no existe');
  process.exit(0);
}

const isAbsolutePath = (x) => path.isAbsolute(x);

const absolutePath = (routeParameter) => {
  let pathAlreadyAbsolute;
  if (isAbsolutePath(routeParameter) === false) {
    pathAlreadyAbsolute = path.resolve(routeParameter);
    console.log('se convirtio en absoluta: ', pathAlreadyAbsolute);
  }
  return pathAlreadyAbsolute;
};

console.log(absolutePath(route));

const arr = [];
let pathChildren = '';
let onlyMd = [];

const recursiveFunction = (route) => {
  if (fs.lstatSync(route).isFile()) {
    arr.push(route);
  } else {
    fs.readdirSync(route).map((file) => {
      pathChildren = path.resolve(route, file);
      return fs.lstatSync(pathChildren).isDirectory()
        ? recursiveFunction(pathChildren)
        : arr.push(pathChildren);
    });
  }
  onlyMd = arr.filter((el) => path.extname(el).substring(1) === 'md');
  return onlyMd;
};

recursiveFunction(route);
console.log('array: ', onlyMd);

// Funcion para leer un archivo y mostrarlo en la consola
// // const readFiles = (route) => fs.readFileSync(route, 'utf8');

const toHtmlAndExtractLinks = () => {
  const linksArray = [];
  onlyMd.forEach((elm) => {
    const readFiles = fs.readFileSync(elm, 'utf8');
    const fileToHtml = marked.parse(readFiles);
    const $ = cheerio.load(fileToHtml);
    const onlyHref = $('a');
    const lengthHref = onlyHref.length;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < lengthHref; i++) {
      linksArray.push(onlyHref[i].attribs.href);
    }
  });
  console.log('array de links: ', linksArray);
  return linksArray;
};

toHtmlAndExtractLinks();
