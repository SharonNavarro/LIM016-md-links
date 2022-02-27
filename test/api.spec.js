const api = require('../src/api');

describe('routeExists', () => {
  it('deberia devolver true cuando exista la ruta', () => {
    const result = api.routeExists('./tres.md')
    expect(result).toEqual(true);
  });

  it('deberia devolver false cuando no exista la ruta', () => {
    const result = api.routeExists('./routeNonExist.md')
    expect(result).toEqual(false);
  });
});

describe('absolutePath', () => {
  it('deberia devolver la ruta en absoluta', () => {
    const result = api.absolutePath('./tres.md')
    expect(result).toEqual('C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\tres.md');
  });
});

describe('routeDirectory', () => {
  it('deberia devolver true si la ruta es un directorio', () => {
    const result = api.routeDirectory('./prueba-1')
    expect(result).toEqual(true);
  });

  it('deberia devolver false si la ruta no es un directorio', () => {
    const result = api.routeDirectory('./tres.md')
    expect(result).toEqual(false);
  });
});

describe('routeFile', () => {
  it('deberia devolver true si la ruta es un archivo', () => {
    const result = api.routeFile('./tres.md')
    expect(result).toEqual(true);
  });

  it('deberia devolver false si la ruta no es un archivo', () => {
    const result = api.routeFile('./prueba-1')
    expect(result).toEqual(false);
  });
});

describe('readDirectory', () => {
  it('deberia devolver true si la ruta es un archivo', () => {
    const result = api.readDirectory('./prueba-1')
    expect(result).toEqual(["carpeta1", "carpeta2", "dos.md", "texto.txt"]);
  });
});

describe('readExtName', () => {
  it('deberia devolver la extension del archivo', () => {
    const result = api.readExtName('./tres.md')
    expect(result).toEqual('.md');
  });
});

describe('recursiveFunction', () => {
  it('deberia devolver un arreglo de archivos .md', () => {
    const result = api.recursiveFunction('./prueba-1')
    expect(result).toEqual([
      'C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\prueba-1\\carpeta1\\tres.md',
      'C:\\Users\\USUARIO\\Documents\\Laboratoria\\LIM016-md-links\\prueba-1\\dos.md'
    ]);
  });
});

describe('toHtmlAndExtractLinks', () => {
  it('deberia devolver un arreglo de objetos con las propiedades href, text, file', () => {
    const result = api.toHtmlAndExtractLinks('./tres.md')
    expect(result).toEqual([
      {
        href: 'https://docs.npmjs.com/cli/install',
        text: 'docs oficiales de npm install acá',
        file: './tres.md'
      },
      {
        href: 'https://github.com/Laboratoria/course-parser',
        text: 'course-parser',
        file: './tres.md'
      }
    ]);
  });
});

const arrayLink = [{
  href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions',
  text: 'Funciones Anónimas',
  file: 'C:\\Users\\SHARON\\md-links\\src\\README.md'
}];

const arrayLinkResolve = [{
  'href': 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions',
  'text': 'Funciones Anónimas',
  'file': 'C:\\Users\\SHARON\\md-links\\src\\README.md',
  'message': 'Ok',
  'status': 200
}];

describe('linkStatus', () => {
  it('Debería retornar el array de links con la peticion HTTPS con "ok" y 200', () => {
    return api.linkStatus(arrayLink)
      .then((res) => {
        expect(res).toEqual(arrayLinkResolve);
      })
  });
});

const arrayLinkBroken = [{
  href: 'https://developeron.mozilla.org',
  text: 'no existe',
  file: 'C:\\Users\\SHARON\\md-links\\src\\README.md'
}]

const arrayLinkBrokenErrorRequest = [{
  'href': 'https://developeron.mozilla.org',
  'text': 'no existe',
  'file': 'C:\\Users\\SHARON\\md-links\\src\\README.md',
  'message': 'Fail',
  'status': 'Error request'
}];

describe('linkStatus', () => {
  it('Debería retornar el array de links con la peticion HTTPS con "Fail" y "Error request"', () => {
    return api.linkStatus(arrayLinkBroken)
      .then((res) => {
        expect(res).toEqual(arrayLinkBrokenErrorRequest);
      });
  });
});

const anotherArrayLinkBroken = [{
  href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
  text: 'Linea de comando CLI',
  file: 'C:\\Users\\SHARON\\md-links\\src\\README.md'
}]

const anotherArrayLinkBrokenStatusCode = [{
  'href': 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
  'text': 'Linea de comando CLI',
  'file': 'C:\\Users\\SHARON\\md-links\\src\\README.md',
  'message': 'Fail',
  'status': 503,
}];

describe('linkStatus', () => {
  it('Debería retornar el array de links con la peticion HTTPS con "Fail" y su código respectivo', () => {
    return api.linkStatus(anotherArrayLinkBroken)
      .then((res) => {
        expect(res).toEqual(anotherArrayLinkBrokenStatusCode);
      });
  });
});

