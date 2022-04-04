let start = new Date().getTime();
function syncf(numOrder, delayTime) {
  let functionStart = new Date().getTime();
  let functionEnd = 0;
  let result = 0;

  while (functionEnd - functionStart < delayTime) {
    functionEnd = new Date().getTime();
  }

  result = functionEnd - start;
  result = parseInt(result / 1000);

  console.log(result, numOrder);
}

function asyncf(numOrder, delayTime) {
  let functionEnd = 0;
  let result = 0;

  setTimeout(() => {
    functionEnd = new Date().getTime();
    result = functionEnd - start;
    result = parseInt(result / 1000);

    console.log(result, numOrder);
  }, delayTime);
}

syncf("first", 1000);
asyncf("second", 1000);
syncf("third", 0);
asyncf("fourth", 1000);
