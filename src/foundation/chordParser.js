import { noteAbove } from "foundation/intervals";
import {
  SEVEN,
  MAJOR_SEVEN,
  MINOR,
  MAJOR,
  HALF_DIMINISHED_SEVEN,
  FLAT,
} from "foundation/constants";

const _ = require("lodash");

const INTERVAL_ABOVE_ROOT_BY_ROMAN_NUMERAL = {
  i: "P1",
  I: "P1",
  ii: "M2",
  iii: "M3",
  V: "P5",
  [`${FLAT}VI`]: "m6",
};

function triadQuality(abstractChord) {
  const chordFunction = abstractChord.split("/")[0];
  const quality = chordFunction.toUpperCase() === chordFunction ? MAJOR : MINOR;

  if (quality === MINOR) {
    if (seven(abstractChord) === HALF_DIMINISHED_SEVEN) {
      return "";
    } else {
      return MINOR;
    }
  }

  return "";
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
  return noteAbove({
    note: secondaryKey({ abstractChord, key }) || key,
    interval:
      INTERVAL_ABOVE_ROOT_BY_ROMAN_NUMERAL[
        romanNumeral(chordFunction(abstractChord))
      ],
  });
}

function chordFunction(abstractChord) {
  return abstractChord.split("/")[0];
}

function secondaryKey({ abstractChord, key }) {
  const secondaryKey = abstractChord.split("/")[1];
  if (secondaryKey) {
    return noteAbove({
      note: key,
      interval: INTERVAL_ABOVE_ROOT_BY_ROMAN_NUMERAL[secondaryKey],
    });
  }
}

function multipleChordsInSecondaryKey(abstractChord) {
  var matches = abstractChord.match(/\[(.*?)\]/);

  if (matches) {
    return matches[1].split(" ");
  }
}

function seven(abstractChord) {
  if (abstractChord.includes(HALF_DIMINISHED_SEVEN)) {
    return HALF_DIMINISHED_SEVEN;
  }
  if (abstractChord.includes(MAJOR_SEVEN)) {
    return MAJOR_SEVEN;
  }
  if (abstractChord.includes(SEVEN)) {
    return SEVEN;
  }

  return "";
}
function abstractCharacteristics({ abstractChord, key }) {
  let chords;
  const multipleChords = multipleChordsInSecondaryKey(abstractChord);

  if (multipleChords) {
    chords = multipleChords;
    key = secondaryKey({ abstractChord, key });
  } else {
    chords = [abstractChord];
  }

  return _.map(chords, (abstractChord) => {
    return {
      root: root({ abstractChord, key }),
      triadQuality: triadQuality(abstractChord),
      seven: seven(abstractChord),
    };
  });
}

function chord({ abstractChord, key }) {
  const characteristics = abstractCharacteristics({ abstractChord, key });

  return _.map(characteristics, function (aboutThisChord) {
    // triadQuality and seven can be empty
    return _.filter(
      [aboutThisChord.root, aboutThisChord.triadQuality, aboutThisChord.seven],
      (item) => item.length > 0
    ).join("");
  }).join(" ");
}
export { chord };
