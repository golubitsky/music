import { noteAbove } from "./intervals.js";
import { SEVEN, MINOR, FLAT, SHARP, MAJOR } from "./constants.js";

const _ = require("lodash");

const INTERVAL_ABOVE_ROOT_BY_ROMAN_NUMERAL = {
  i: "P1",
  I: "P1",
  ii: "M2",
  iii: "M3",
  V: "P5",
};

function triadQuality(abstractChord) {
  const quality = abstractChord.toUpperCase() === abstractChord ? MAJOR : MINOR;

  return quality === MAJOR ? "" : quality;
}

function abstractCharacteristics({ abstractChord, key }) {
  return {
    triadQuality: triadQuality(abstractChord),
    root: noteAbove({
      note: key,
      interval: INTERVAL_ABOVE_ROOT_BY_ROMAN_NUMERAL[abstractChord],
    }),
  };
  // if (abstractChord.toUpperCase() === abstractChord) {
  //   return abstractChord.includes(SEVEN) ? SEVEN : "";
  // } else {
  //   return abstractChord.includes(SEVEN) ? `${MINOR}${SEVEN}` : MINOR;
  // }
}

function chord({ abstractChord, key }) {
  const aboutThisChord = abstractCharacteristics({ abstractChord, key });

  // filter out empty Major chord quality
  return _.filter(
    [aboutThisChord.root, aboutThisChord.triadQuality],
    (item) => item.length > 0
  ).join("");
}
export { chord };
