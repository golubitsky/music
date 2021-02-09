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
  const chordFunction = abstractChord.split("/")[0];
  const quality = chordFunction.toUpperCase() === chordFunction ? MAJOR : MINOR;

  return quality === MAJOR ? "" : quality;
}

function romanNumeral(abstractChord) {
  let longestMatch = "";
  for (const romanNumeral in INTERVAL_ABOVE_ROOT_BY_ROMAN_NUMERAL) {
    if (abstractChord.includes(romanNumeral)) {
      if (romanNumeral.length > longestMatch.length) {
        longestMatch = romanNumeral;
      }
    }
  }

  if (longestMatch) {
    return longestMatch;
  }

  throw new Error(`not implemented for ${abstractChord}`);
}

function root({ abstractChord, key }) {
  const [chordFunction, secondaryKey] = abstractChord.split("/");
  const root = secondaryKey
    ? noteAbove({
        note: key,
        interval: INTERVAL_ABOVE_ROOT_BY_ROMAN_NUMERAL[secondaryKey],
      })
    : key;

  return noteAbove({
    note: root,
    interval: INTERVAL_ABOVE_ROOT_BY_ROMAN_NUMERAL[romanNumeral(chordFunction)],
  });
}

function abstractCharacteristics({ abstractChord, key }) {
  return {
    triadQuality: triadQuality(abstractChord),
    root: root({ abstractChord, key }),
    seven: abstractChord.includes(SEVEN) ? SEVEN : "",
  };
}

function chord({ abstractChord, key }) {
  const aboutThisChord = abstractCharacteristics({ abstractChord, key });

  // triadQuality and seven can be empty
  return _.filter(
    [aboutThisChord.root, aboutThisChord.triadQuality, aboutThisChord.seven],
    (item) => item.length > 0
  ).join("");
}
export { chord };
