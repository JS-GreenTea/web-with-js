Array.prototype.customReduce = function(callback, initialValue = 0) {
  const array = Object(this);
  const length = array.length;
  let accumulator = array[0];
  let index = 1;

  if (initialValue !== 0) {
    accumulator = initialValue;
    index = 0;
  }

  while(index < length) {
    let currentValue = array[index];
    accumulator = callback(accumulator, currentValue, index, array);
    index++;
  }
  return accumulator;
};

module.exports = Array;
