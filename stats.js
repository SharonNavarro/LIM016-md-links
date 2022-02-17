const totalStat = (arrLinks) => {
  const totalLinks = arrLinks.length;
  return `Total: ${totalLinks}`;
};

const brokenLinkStat = (arrLinks) => {
  const brokenLinks = arrLinks.filter((elm) => elm.message === 'fail');
  return `Broken: ${brokenLinks.length}`;
};

const uniqueLinkStat = (arrLinks) => {
  const uniqueLinks = new Set(arrLinks.map((elm) => elm.href));
  return `Unique: ${uniqueLinks.size}`;
};

module.exports = {
  totalStat,
  brokenLinkStat,
  uniqueLinkStat,
};
