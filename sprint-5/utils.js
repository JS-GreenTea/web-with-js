const is369In = (num) => {
  return (
    num
      .toString()
      .split("")
      .findIndex((num) => num != 0 && num % 3 === 0) !== -1
  );
};

const joinName = (players) => {
  return players.map((obj) => obj.name).join(",");
};

module.exports = { is369In, joinName };
