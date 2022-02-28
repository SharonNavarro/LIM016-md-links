const md = require("../src/mdLinks");

const arrLinksOptionFalse = [
  {
    file: "C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\test\\prueba-1\\carpeta1\\tres.md",
    href: "https://docs.npmjs.com/cli/install",
    text: "docs oficiales de npm install acá",
  },
  {
    file: "C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\test\\prueba-1\\carpeta1\\tres.md",
    href: "https://github.com/Laboratoria/course-parser",
    text: "course-parser",
  },
  {
    file: "C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\test\\prueba-1\\dos.md",
    href: "https://es.wikipedia.org/wiki/Markdown",
    text: "Markdown",
  },
  {
    file: "C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\test\\prueba-1\\dos.md",
    href: "https://nodejs.org/",
    text: "Node.js",
  },
  {
    file: "C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\test\\prueba-1\\dos.md",
    href: "https://developers.google.com/v8/",
    text: "motor de JavaScript V8 de Chrome",
  },
  {
    file: "C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\test\\prueba-1\\dos.md",
    href: "https://www.npmjs.com/",
    text: "Sitio oficial de npm (en inglés)",
  },
];

const arrLinksOptionTrue = [
  {
    file: "C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\test\\prueba-1\\carpeta1\\tres.md",
    href: "https://docs.npmjs.com/cli/install",
    text: "docs oficiales de npm install acá",
    message: "Ok",
    status: 200,
  },
  {
    file: "C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\test\\prueba-1\\carpeta1\\tres.md",
    href: "https://github.com/Laboratoria/course-parser",
    text: "course-parser",
    message: "Ok",
    status: 200,
  },
  {
    file: "C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\test\\prueba-1\\dos.md",
    href: "https://es.wikipedia.org/wiki/Markdown",
    text: "Markdown",
    message: "Ok",
    status: 200,
  },
  {
    file: "C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\test\\prueba-1\\dos.md",
    href: "https://nodejs.org/",
    text: "Node.js",
    message: "Ok",
    status: 200,
  },
  {
    file: "C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\test\\prueba-1\\dos.md",
    href: "https://developers.google.com/v8/",
    text: "motor de JavaScript V8 de Chrome",
    message: "Ok",
    status: 200,
  },
  {
    file: "C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\test\\prueba-1\\dos.md",
    href: "https://www.npmjs.com/",
    text: "Sitio oficial de npm (en inglés)",
    message: "Ok",
    status: 200,
  },
];

describe("mdLinks", () => {
  it("deberia devolverme un array de objetos sin la peticion HTTP/S con {validate: false}", () => {
    return expect(
      md.mdLinks("./test/prueba-1", { validate: false })
    ).resolves.toEqual(arrLinksOptionFalse);
  });
});

describe("mdLinks", () => {
  it("deberia devolverme un array de objetos con la peticion HTTP/S con {validate: true}", () => {
    return expect(
      md.mdLinks("./test/prueba-1", { validate: true })
    ).resolves.toEqual(arrLinksOptionTrue);
  });
});

describe("mdLinks", () => {
  it("deberia devolverme como mensaje de error 'No Markdown (.md) files found' si el array de archivos .md esta vacio", () => {
    return expect(
        md.mdLinks("./test/prueba-1/carpeta2", { validate: true })
      ).rejects.toMatch('No Markdown (.md) files found');
  });
});

describe("mdLinks", () => {
  it("deberia devolverme como mensaje de error 'The path do not exist. Did you mean --help?' si el path ingresado no existe", () => {
    return expect(
      md.mdLinks("./testeo/pruebaaa", { validate: true })
    ).rejects.toMatch('The path do not exist. Did you mean --help?');
  });
});
