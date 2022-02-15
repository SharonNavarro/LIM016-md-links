const fs = require('fs');

const path = require('path');

const process = require('process');

const marked = require('marked');

// const cheerio = require('cheerio');

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

// const fetch = require('node-fetch');

const axios = require('axios');

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

absolutePath(route);

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

const toHtmlAndExtractLinks = () => {
  const arrDom = [];
  onlyMd.forEach((elm) => {
    const readFiles = fs.readFileSync(elm, 'utf8');
    const fileToHtml = marked.parse(readFiles);
    const dom = new JSDOM(fileToHtml).window.document.querySelectorAll('a');
    dom.forEach((el) => {
      if (el.href.slice(0, 5) === 'https') {
        arrDom.push({
          href: el.href,
          text: (el.textContent).slice(0, 50),
          file: elm,
        });
      }
    });
  });
  return arrDom.flat(1);
};

console.log(toHtmlAndExtractLinks());

const linkStatus = () => {
  toHtmlAndExtractLinks().forEach((el) => {
    console.log(el.href);
    axios.get(el.href)
      .then((response) => {
        console.log(response.status);
        console.log(response.statusText);
      })
      .catch((error) => {
        console.log('status: ', error.toJSON().status);
        console.log('code: ', error.toJSON().code);
      });
  });
};

linkStatus();

// const validarLinksStatus = (links) => {
//   let myPromises = links.map((elem) => new Promise( (resolve) => {   //Iteramos los link con promesa
//     return fetch(elem.href)                                    //Hacemos una peticion al link y devuelve una promesa
//           .then((response) => {                                    
//             if (response.status >= 200 && response.status <= 299){  //Si la respuesta tiene un status entre 200 y 299
//                   elem.status = response.status,                     //me da la respuesta con el status
//                   elem.ok = "OK";                                     // Te devuelve ok
//                   resolve(elem);                                     //resuelve la promesa
//               } else {
//                   elem.status = response.status,
//                   elem.ok = 'FAIL';
//                   resolve(elem);
//               }
//           })
//           .catch((err) => {                                          //Si la promesa fallo
//               elem.status = err.status,
//         elem.ok = 'FAIL';
//         resolve(elem);
//       });  
//   }));
//   return Promise.all(myPromises)
// //   .then((res) => {
//       //console.log(res);
//       return res;
//     })
//     .catch((err)=>{
//       //console.log(err);
//       return err;
//     });
// };
