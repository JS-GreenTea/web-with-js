/*
reduce 함수
구문 : arr.reduce(callback[, initialValue])
매개변수
- callback : 배열의 각 요소에 대해 실행할 함수. 다음의 4가지 인수를 받는다.
  - accumulator : 콜백의 반환값을 누적한다. 콜백의 첫번째 호출이면서 initialValue를 제공한 경우 initialValue의 값임.
  - currentValue : 처리할 현재 요소
  - currentIndex(optional) : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작한다.
  - array(optional) : reduce()를 호출한 배열
- initialValue(optional) : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫번째 요소를 사용.
반환 값
누적 계산의 결과 값
 */

Array.prototype.customReduce = function (callback, initialValue = 0) {
  let array = this.Array;

  if (isReturnSingleValueCondition(array, arguments.length)) return array[0];

  let { accumulator, currentValue, currentIndex } = initializeByHasInitialValue(
    arguments.length,
    initialValue,
    array
  );

  while (currentIndex !== array.length) {
    accumulator = callback(accumulator, currentValue);
    currentValue = array[++currentIndex];
  }

  return accumulator;
};

function initializeByHasInitialValue(argsLength, initialValue, arr) {
  let accumulator;
  let currentValue;
  let currentIndex;

  if (argsLength === 2) {
    accumulator = initialValue;
    currentValue = arr[0];
    currentIndex = 0;
  }
  // initialValue 미제공
  else if (argsLength === 1) {
    accumulator = arr[0];
    currentValue = arr[0];
    currentIndex = 1;
  }

  return { accumulator, currentValue, currentIndex };
}

function isArrayHasOneElement(arr) {
  return arr.length === 1;
}

function isNotGiveInitialValue(argsLength) {
  return argsLength === 1;
}

function isReturnSingleValueCondition(array, argsLength) {
  return (
    (isArrayHasOneElement(array) && !isNotGiveInitialValue(argsLength)) ||
    (isArrayHasOneElement(array) && isNotGiveInitialValue(argsLength))
  );
}
module.exports = Array;
