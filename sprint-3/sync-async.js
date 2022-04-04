let start = new Date().getTime();
function syncf(numOrder, delayTime) {
  let tmpStart = new Date().getTime();
  let end = 0;
  let result = 0;

  while (end - tmpStart < delayTime) {
    end = new Date().getTime();
  }

  result = end - start;
  result = parseInt(result / 1000);

  console.log(result, numOrder);
}

function asyncf(numOrder, delayTime) {
  let end = 0;
  let tmpTime = 0;

  setTimeout(() => {
    end = new Date().getTime();
    tmpTime = end - start;
    tmpTime = parseInt(tmpTime / 1000);

    console.log(tmpTime, numOrder);
  }, delayTime);
}

syncf("first", 1000);
asyncf("second", 1000);
syncf("third", 0);
asyncf("fourth", 1000);
