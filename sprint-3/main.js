const Shop = require("./domain/shop");

function main() {
  const lotteRia = new Shop();
  lotteRia.order(3);
}

main();
