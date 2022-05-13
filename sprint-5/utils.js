const is369In = (num) => {
  return (
    num
      .toString()
      .split("")
      .findIndex((num) => num != 0 && num % 3 === 0) !== -1
  );
};

module.exports = { is369In };
