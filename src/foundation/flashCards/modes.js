import {
  MAJOR,
  SEVEN,
  MAJOR_SEVEN,
  SHARP,
  FLAT,
  HALF_DIMINISHED_SEVEN,
} from "foundation/constants.js";

const _ = require("lodash");

const MAJOR_MODES_BY_CHORD = {
  [`I${MAJOR_SEVEN}`]: `Ionian`,
  [`ii`]: `Dorian (${FLAT}3, ${FLAT}7)`,
  [`iii${FLAT}9`]: `Phrygian (${FLAT}2, ${FLAT}3, ${FLAT}6, ${FLAT}7)`,
  [`IV${MAJOR_SEVEN}${SHARP}11`]: `Lydian (${SHARP}4)`,
  [`V${SEVEN}`]: `Mixolydian (${FLAT}7)`,
  [`vi`]: `Aeolian (${FLAT}3, ${FLAT}6, ${FLAT}7)`,
  [`vii${HALF_DIMINISHED_SEVEN}`]: `Locrian (${FLAT}2, ${FLAT}3, ${FLAT}5, ${FLAT}6 , ${FLAT}7)`,
};

function cards({ subType }) {
  switch (subType) {
    case MAJOR:
      return _.map(_.keys(MAJOR_MODES_BY_CHORD), (chord) => {
        return { front: chord, back: MAJOR_MODES_BY_CHORD[chord] };
      });
    default:
      throw new Error(`not implemented for subType=${subType}`);
  }
}

export { cards };
