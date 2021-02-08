import { noteAbove } from "../intervals.js";
import { ALL_NOTES, MAJOR, MINOR, SEVEN } from "../constants.js";
// TODO: will need roman numeral mapping.
// I, II, III, IV, V, VI, VII
// i, ii, iii, iv, v, vi, vii
// separate degree from quality (in both the degree -- M vs m -- and extra chars)
const _ = require("lodash");

const INTERVAL_ABOVE_ROOT_BY_ROMAN_NUMERAL = {
  i: "P1",
  ii: "M2",
  [`IV${SEVEN}`]: "P4",
  [`V${SEVEN}`]: "P5",
};

function quality(abstractChord) {
  if (abstractChord.toUpperCase() === abstractChord) {
    return abstractChord.includes(SEVEN) ? SEVEN : "";
  } else {
    return abstractChord.includes(SEVEN) ? `${MINOR}${SEVEN}` : MINOR;
  }
}

function progressionInKey(key, abstractChordProgression) {
  return abstractChordProgression.map((abstractChord) => {
    return [
      noteAbove(key, INTERVAL_ABOVE_ROOT_BY_ROMAN_NUMERAL[abstractChord]),
      quality(abstractChord),
    ].join("");
  });
}

function cards({ abstractChordProgression }) {
  return ALL_NOTES.map((key) => {
    return {
      front: key,
      back: progressionInKey(key, abstractChordProgression).join(" "),
    };
  });
}

export { cards };
