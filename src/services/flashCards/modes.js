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
  ["I", `I${MAJOR_SEVEN}`, "Ionian", ""],
  ["II", `ii${SEVEN}`, "Dorian", `${FLAT}3, ${FLAT}7`],
  ["III", `iii${FLAT}9`, "Phrygian", `${FLAT}2, ${FLAT}3, ${FLAT}6, ${FLAT}7`],
  ["IV", `IV${MAJOR_SEVEN}${SHARP}11`, "Lydian", `${SHARP}4`],
  ["V", `V${SEVEN} Vsus`, "Mixolydian", `${FLAT}7`],
  ["VI", `vi`, "Aeolian", `${FLAT}3, ${FLAT}6, ${FLAT}7`],
  [
    "VII",
    `vii${HALF_DIMINISHED_SEVEN}`,
    "Locrian",
    `${FLAT}2, ${FLAT}3, ${FLAT}5, ${FLAT}6 , ${FLAT}7`,
  ],
];

const MELODIC_MINOR_DATA = [
  ["I", `i${MAJOR_SEVEN}`, "minor-major", `${FLAT}3`],
  ["II", `Vsus${FLAT}9`, `Dorian ${FLAT}2`, `${FLAT}2, ${FLAT}3, ${FLAT}7`],
  [
    "III",
    `I${MAJOR_SEVEN}${SHARP}5`,
    "Lydian augmented",
    `${SHARP}4, ${SHARP}5`,
  ],
  ["IV", `V${SEVEN}${SHARP}11`, "Lydian dominant", `${SHARP}4, ${FLAT}7`],
  ["V", `i${MAJOR_SEVEN}/V`, `Mixolydian ${FLAT}6`, `${FLAT}6, ${FLAT}7`],
  [
    "VI",
    `ii${HALF_DIMINISHED_SEVEN}`,
    `Half diminished`,
    `${FLAT}3, ${FLAT}5, ${FLAT}6, ${FLAT}7`,
  ],
  [
    "VII",
    `V${SEVEN}alt`,
    `Altered/diminished whole-tone`,
    `(${FLAT}2, ${FLAT}3, ${FLAT}4, ${FLAT}5, ${FLAT}6, ${FLAT}7)`,
  ],
];

function cards({ subType }) {
  let data;
  switch (subType) {
    case MAJOR:
      data = MAJOR_DATA;
      break;
    case `melodic ${MINOR}`:
      data = MELODIC_MINOR_DATA;
      break;
    default:
      throw new Error(`not implemented for subType=${subType}`);
  }

  return _.map(data, (item) => {
    const [scaleDegree, chord, mode, accidentals] = item;
    return { front: [scaleDegree], back: [chord, mode, accidentals] };
  });
}

export { cards };
