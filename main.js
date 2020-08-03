var Combinatorics = require("js-combinatorics");
var fs = require("fs");

const it = new Combinatorics.Combination(
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
  ],
  15
);

console.log(`Total de combinações: ${it.length}`);

for (const elem of it) {
  const value = elem.join(", ");

  console.log(`Combinação ${value} sendo escrita no arquivo`);

  fs.appendFileSync("log.txt", `${value}\n`);
}

console.log("Processo finalizado");

process.exit();
