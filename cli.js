#!/usr/bin/env node

/* eslint-disable no-constant-condition */
const chalk = require('chalk');
const figlet = require('figlet');

const mdLinks = require('./src/mdLinks');
const stats = require('./src/stats');
const resTemplate = require('./src/responseTemplates');

const command = process.argv;
const path = process.argv[2];
const option1 = command[3];
const option2 = command[4];

const banner = () => figlet.textSync('sanmdlinks', {
  font: 'ogre',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 110,
  whitespaceBreak: true,
});
console.log(chalk.bold.magenta.rgb(249, 13, 111)(banner()));

switch (command.length) {
  case 2:
    console.log(chalk.rgb(168, 159, 241)(resTemplate.introMessage));
    break;

  case 3:
    if (path === '--h' || path === '--help') {
      console.log(resTemplate.helpMessage);
    } else {
      mdLinks.mdLinks(path, { validate: false })
        .then((res) => resTemplate.validateFalseMessage(res))
        .catch((err) => console.log(err));
    }
    break;

  case 4:
    if (option1 === '--validate' || option1 === '--v') {
      mdLinks.mdLinks(path, { validate: true })
        .then((res) => resTemplate.messageSuccces(res))
        .catch((err) => console.log(err));
    } else if (option1 === '--stats' || option1 === '--s') {
      mdLinks.mdLinks(path, { validate: true })
        .then((res) => console.log(stats.totalStat(res), stats.uniqueLinkStat(res)))
        .catch((err) => console.log(err));
    } else if (option1 === '--h' || option1 === '--help') {
      console.log(resTemplate.helpMessage);
    } else {
      console.log(resTemplate.helpMessage);
    }
    break;

  case 5:
    if ((option1 === '--validate' || '--v') && (option2 === '--stats' || '--v')) {
      mdLinks.mdLinks(path, { validate: true })
        .then((res) => console.log(stats.totalStat(res), stats.uniqueLinkStat(res), stats.brokenLinkStat(res)))
        .catch((err) => console.log(err));
    }
    break;

  default:
    console.log(resTemplate.helpMessage);
    break;
}
