const process = require('process');

const api = require('./api');

const path = process.argv[2];
const options = {
  validate: false,
};

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (api.routeExists(path)) { 
    api.absolutePath(path);
    if ((api.recursiveFunction(path).length) !== 0) {
      const arrLinks = api.toHtmlAndExtractLinks(path);
      if (options.validate === true) {
        api.linkStatus(arrLinks)
          .then((res) => {
            resolve(res);
          });
      } else {
        resolve(arrLinks);
      }
    } else {
      reject(
        console.log('No se encontraron archivos .md'),
        process.exit(0),
      );
    }
  } else {
    reject(
      console.log('La ruta no existe'),
      process.exit(0),
    );
  }
});

mdLinks(path, options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

module.exports = {
  mdLinks,
};
