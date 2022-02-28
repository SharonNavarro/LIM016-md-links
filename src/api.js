/* eslint-disable no-param-reassign */
const fs = require('fs');

const path = require('path');

const marked = require('marked');

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const fetch = require('node-fetch');

const routeExists = (routeParameter) => fs.existsSync(routeParameter); 

const absolutePath = (routeParameter) => (path.isAbsolute(routeParameter) ? routeParameter : path.resolve(routeParameter));

const routeDirectory = (parameter) => fs.lstatSync(parameter).isDirectory();

const routeFile = (routeParameter) => fs.lstatSync(routeParameter).isFile();

const readDirectory = (routeParameter) => fs.readdirSync(routeParameter);

const readExtName = (parameter) => path.extname(parameter);

const convertToAbsolute = (routeParameter, file) => path.resolve(routeParameter, file);

const recursiveFunction = (routeParameter) => {
  const arr = [];
  let pathChildren = '';
  let onlyMd = [];
  const startingPoint = (routeParameter) => {
    if (routeFile(routeParameter)) {
      arr.push(path.resolve(routeParameter));
    } else {
      readDirectory(routeParameter).map((file) => {
        pathChildren = convertToAbsolute(routeParameter, file);
        return routeDirectory(pathChildren)
          ? startingPoint(pathChildren)
          : arr.push(pathChildren);
      });
    }
    onlyMd = arr.filter((el) => readExtName(el).substring(1) === 'md');
  };
  startingPoint(routeParameter);
  return onlyMd;
};

const toHtmlAndExtractLinks = (routeParameter) => {
  const arrDom = [];
  recursiveFunction(routeParameter).forEach((elm) => {
    const readFiles = fs.readFileSync(elm, 'utf8');
    const fileToHtml = marked.parse(readFiles);
    const dom = new JSDOM(fileToHtml).window.document.querySelectorAll('a');
    dom.forEach((el) => {
      if (el.href.slice(0, 3) === 'htt') {
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

const linkStatus = (arrLinks) => {
  const linksStatus = arrLinks.map((el) => new Promise((resolve) => {
    const fetchLink = () => fetch(el.href)
      .then((response) => {
        if (response.status >= 200 && response.status < 400) {
          el.message = 'Ok';
          el.status = response.status;
          resolve(el);
        } else {
          el.message = 'Fail';
          el.status = response.status;
          resolve(el);
        }
      }).catch(() => {
        el.message = 'Fail';
        el.status = 'Error request';
        resolve(el);
      });
    fetchLink();
  })
  
  );
  return Promise.all(linksStatus);
};

module.exports = {
  routeExists,
  absolutePath,
  recursiveFunction,
  toHtmlAndExtractLinks,
  linkStatus,
  routeDirectory,
  routeFile,
  readDirectory,
  readExtName,
  convertToAbsolute,
};
