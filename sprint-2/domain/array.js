Array.prototype.customReduce = function (inputValue) {
  const list = [...inputValue];
  const action = list[0];
  const remainList = list.splice(0, 1);
  return action, remainList;
};

module.exports = Array;
