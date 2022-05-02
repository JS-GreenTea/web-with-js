const { Shop } = require("./domain/shop");

function main() {
  const lotteria = new Shop(3);
  lotteria.order([
    "햄버거",
    "치즈버거",
    "치즈버거",
    "햄버거",
    "치킨버거",
    "치킨버거",
    "햄버거",
    "치즈버거",
  ]);
}

main();
