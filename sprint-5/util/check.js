const isFail = (currentNum) => {
  const regExp369 = /[369]/;
  return regExp369.test(currentNum);
}

module.exports = isFail;