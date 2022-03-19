Array.prototype.customReduce = function (callback, initialValue) {
  const array = Object(this);
  const length = array.length;

  let index = 0;
  let accumulator = initialValue ?? array[index++];
  let currentValue = array[index];

  while (index < length) {
    currentValue = array[index];
    accumulator = callback(accumulator, currentValue, index, array);
    index++;
  }

  return accumulator;
};

module.exports = Array;
