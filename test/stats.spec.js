const stat = require("../src/stats");

const chalk = require("chalk");

const arrLinksOptionTrue = [
    {
      file: "C:\Users\USUARIO\Documents\Laboratoria\LIM016-md-links\test\c.md",
      href: "https://github.com/Laboratoria/course-parser",
      text: "course-parser",
      message: "Ok",
      status: 200,
    },
    {
      file: "C:\Users\USUARIO\Documents\Laboratoria\LIM016-md-links\test\c.md",
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions",
      text: " expresiones regulares (RegExp)",
      message: "Ok",
      status: 200,
    },
    {
      file: "C:\Users\USUARIO\Documents\Laboratoria\LIM016-md-links\test\c.md",
      href: "http://community.laboratoria.la/c/js",
      text: "foro comunidad",
      message: "Ok",
      status: 200,
    }
  ];

describe("totalStat", () => {
  it("deberia devolverme el numero total de links", () => {
    const result = stat.totalStat(arrLinksOptionTrue);
    expect(result).toEqual(`${chalk.rgb(168, 159, 241)('• Total: ')} 3`)
  });
});

describe("brokenLinkStat", () => {
    it("deberia devolverme el numero total de links rotos", () => {
      const result = stat.brokenLinkStat(arrLinksOptionTrue);
      expect(result).toEqual(`${chalk.rgb(168, 159, 241)('• Broken: ')} 0`)
    });
});

describe("uniqueLinkStat", () => {
    it("deberia devolverme el numero total de links unicos", () => {
      const result = stat.uniqueLinkStat(arrLinksOptionTrue);
      expect(result).toEqual(`${chalk.rgb(168, 159, 241)('• Unique: ')} 3`)
    });
});
