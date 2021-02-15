import {
  MAJOR,
  MINOR,
  SEVEN,
  MAJOR_SEVEN,
  SHARP,
  FLAT,
  HALF_DIMINISHED_SEVEN,
} from "foundation/constants.js";

const _ = require("lodash");

const MAJOR_DATA = [
  [`I${MAJOR_SEVEN}`, "Ionian"],
  [`ii`, "Dorian", `${FLAT}3, ${FLAT}7`],
  [`iii${FLAT}9`, "Phrygian", `${FLAT}2, ${FLAT}3, ${FLAT}6, ${FLAT}7`],
  [`IV${MAJOR_SEVEN}${SHARP}11`, "Lydian", `${SHARP}4`],
  [`V${SEVEN}`, "Mixolydian", `${FLAT}7`],
  [`vi`, "Aeolian", `${FLAT}3, ${FLAT}6, ${FLAT}7`],
  [
    `vii${HALF_DIMINISHED_SEVEN}`,
    "Locrian",
    `${FLAT}2, ${FLAT}3, ${FLAT}5, ${FLAT}6 , ${FLAT}7`,
  ],
];

// TODO separate out from degree and add "function"?
const MELODIC_MINOR_DATA = [
  [`i${MAJOR_SEVEN}`, "minor-major", `${FLAT}3`],
  [`iisus${FLAT}9`, `Dorian ${FLAT}2`, `${FLAT}2, ${FLAT}3, ${FLAT}7`],
  [`III${MAJOR_SEVEN}${SHARP}5`, "Lydian augmented", `${SHARP}4, ${SHARP}5`],
  [`IV${SEVEN}${SHARP}11`, "Lydian dominant", `${SHARP}4, ${FLAT}7`],
  [`i${MAJOR_SEVEN}/V`, `Mixolydian ${FLAT}6`, `${FLAT}6, ${FLAT}7`],
  [
    `vi${HALF_DIMINISHED_SEVEN}`,
    `half-diminished`,
    `${FLAT}3, ${FLAT}5, ${FLAT}6, ${FLAT}7`,
  ],
  [
    `VII${SEVEN}alt`,
    `Altered/dim. whole-tone`,
    `(${FLAT}2, ${FLAT}3, ${FLAT}5, ${FLAT}5, ${FLAT}6, ${FLAT}7)`,
  ],
];

function cards({ subType }) {
  let data;
  switch (subType) {
    case MAJOR:
      data = MAJOR_DATA;
      break;
    case `mel. ${MINOR}`:
      data = MELODIC_MINOR_DATA;
      break;
    default:
      throw new Error(`not implemented for subType=${subType}`);
  }

  return _.map(data, (item) => {
    const [chord, mode, accidentals] = item;
    return { front: chord, back: mode, backAdditional: accidentals };
  });
}

export { cards };
