const _ = require("lodash");

export const FLAT = "♭";
export const SHARP = "♯";

export const MINOR = "m";
export const MAJOR = "M";
export const DIMINISHED = "o";
export const AUGMENTED = "+";

export const MAJOR_SEVEN = "△";
export const SEVEN = "⁷";
export const MINOR_SEVEN = `${MINOR}${SEVEN}`;
export const HALF_DIMINISHED_SEVEN = `ø${SEVEN}`;
export const DIMINISHED_SEVEN = `${DIMINISHED}${SEVEN}`;

export const WHITE_KEYS = ["A", "B", "C", "D", "E", "F", "G"];
export const FLATS = [
  `B${FLAT}`,
  `E${FLAT}`,
  `A${FLAT}`,
  `D${FLAT}`,
  `G${FLAT}`,
];
export const SHARPS = [
  `C${SHARP}`,
  `D${SHARP}`,
  `F${SHARP}`,
  `G${SHARP}`,
  `A${SHARP}`,
];

export const ALL_NOTES = WHITE_KEYS.concat(SHARPS).concat(FLATS);
// Limitations in the literal notesAbove engine.
export const ALL_NOTES_FOR_CHORD_PROGRESSIONS = _.reject(ALL_NOTES, (note) => {
  return [`A${SHARP}`, `D${SHARP}`].includes(note);
});

export const INTERVALS = [
  "m2",
  "M2",
  "m3",
  "M3",
  "P4",
  "+4",
  "P5",
  "o5",
  "+5",
  "m6",
  "M6",
  "m7",
  "M7",
];
