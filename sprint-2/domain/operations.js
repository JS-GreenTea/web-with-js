const add = (array) => array.customReduce((acc, cur) => acc + cur);
const count = (array) => array.customReduce((acc, cur) => acc + 1, 0);

module.exports = { add, count };
