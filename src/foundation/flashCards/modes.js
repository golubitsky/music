import {
  MAJOR,
  SEVEN,
  MAJOR_SEVEN,
  SHARP,
  FLAT,
  HALF_DIMINISHED_SEVEN,
} from "foundation/constants.js";

const _ = require("lodash");

const DATA_PER_MODE = [
  [`I${MAJOR_SEVEN}`, "Ionian"],
  [`ii`, "Dorian", `(${FLAT}3, ${FLAT}7)`],
  [`iii${FLAT}9`, "Phrygian", `(${FLAT}2, ${FLAT}3, ${FLAT}6, ${FLAT}7)`],
  [`IV${MAJOR_SEVEN}${SHARP}11`, "Lydian", `(${SHARP}4)`],
  [`V${SEVEN}`, "Mixolydian", `(${FLAT}7)`],
  [`vi`, "Aeolian", `(${FLAT}3, ${FLAT}6, ${FLAT}7)`],
  [
    `vii${HALF_DIMINISHED_SEVEN}`,
    "Locrian",
    `(${FLAT}2, ${FLAT}3, ${FLAT}5, ${FLAT}6 , ${FLAT}7)`,
  ],
];

function cards({ subType }) {
  switch (subType) {
    case MAJOR:
      return _.map(DATA_PER_MODE, (data) => {
        const [chord, mode, flats] = data;
        return { front: chord, back: mode, backAdditional: flats };
      });
    default:
      throw new Error(`not implemented for subType=${subType}`);
  }
}

export { cards };
