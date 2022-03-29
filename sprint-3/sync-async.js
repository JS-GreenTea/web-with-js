let runTime = 0;
const MS_PER_SEC = 1000;

function syncf(message, time) {
  runTime += time;
  setTimeout(() => {}, time);
  console.log(`${runTime / MS_PER_SEC} ${message}`);
}

function asyncf(message, time) {
  setTimeout(() => {
    console.log(`${(runTime + time) / MS_PER_SEC} ${message}`);
  }, time);
}

syncf("first", 1000);
asyncf("second", 1000);
syncf("third", 0);
asyncf("fourth", 1000);
