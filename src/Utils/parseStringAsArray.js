module.exports = function parseStringAsarray(arrayString) {
  return arrayString.split(',').map(tech => tech.trim());
};
