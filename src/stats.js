const chalk = require('chalk');

const totalStat = (arrLinks) => {
  const totalLinks = arrLinks.length;
  return `${chalk.rgb(168, 159, 241)('• Total: ')} ${totalLinks}`;
};

const brokenLinkStat = (arrLinks) => {
  const brokenLinks = arrLinks.filter((elm) => elm.message === 'Fail');
  return `${chalk.rgb(168, 159, 241)('• Broken: ')} ${brokenLinks.length}`;
};

const uniqueLinkStat = (arrLinks) => {
  const uniqueLinks = new Set(arrLinks.map((elm) => elm.href));
  return `${chalk.rgb(168, 159, 241)('• Unique: ')} ${uniqueLinks.size}`;
};

module.exports = {
  totalStat,
  brokenLinkStat,
  uniqueLinkStat,
};
