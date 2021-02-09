import { noteAbove } from "./intervals.js";

const INTERVAL_ABOVE_ROOT_BY_ROMAN_NUMERAL = {
  i: "P1",
  I: "P1",
  ii: "M2",
  iii: "M3",
  V: "P5",
};

function quality(abstractChord) {
  if (abstractChord.toUpperCase() === abstractChord) {
    return abstractChord.includes(SEVEN) ? SEVEN : "";
  } else {
    return abstractChord.includes(SEVEN) ? `${MINOR}${SEVEN}` : MINOR;
  }
}

function chord({ abstractChord, key }) {
  return noteAbove({
    note: key,
    interval: INTERVAL_ABOVE_ROOT_BY_ROMAN_NUMERAL[abstractChord],
  });
}
export { chord };
