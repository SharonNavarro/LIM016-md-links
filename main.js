const fs = require('fs');

fs.readFile('./README.md', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

const Math = {};

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;

module.exports = Math;
// exports.add = add;
