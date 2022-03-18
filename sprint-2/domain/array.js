Array.prototype.customReduce = function(callback, initialValue = 0) {
  let array = Object(this);
  const length = array.length;
  let accumulator = array[0];
  let index = 1;


  if (initialValue !== 0) {
    accumulator = initialValue;
    index = 0;
  }

  while(index < length) {
    let currentValue = array[index];
    accumulator = callback(accumulator, currentValue, currentIndex = index, array = array);
    index++;
  }
  return accumulator;
};

module.exports = Array;
