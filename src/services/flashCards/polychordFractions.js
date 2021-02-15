import { SHARP, FLAT, SEVEN } from "../../foundation/constants.js";

const CARDS = [
  [`13${SHARP}11`, `II/I${SEVEN}`],
  [`7${SHARP}9`, `${FLAT}III/I`],
  [`7${FLAT}9${FLAT}5`, `${FLAT}V/I`],
  [`13${FLAT}9`, `VI/I${SEVEN}`],
  [`7${SHARP}9${SHARP}5`, `${FLAT}VI/I${SEVEN}`],
];

function cards() {
  return CARDS.map(function (cardValues) {
    return {
      front: cardValues[0],
      back: cardValues[1],
    };
  });
}

export { cards };
