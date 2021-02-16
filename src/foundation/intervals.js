// I ended up implementing a very literal interval engine. It's fine, because
// there are a finite number of intervals and keys.
// Originally I was trying to make it more programmatic, but that proved too difficult.

// These notes apply to the earlier (more programmatic) version of the code.
// One of twelve, plus enharmonics. [Note]
// A note belongs to many chords. [Chord]
// A note is relative to another note. [Interval]
// Number of chords suggested by 1, 2, 3 (...) notes within the system.
// [Key]

import { SHARP, FLAT } from "foundation/constants";

const NOTES_MINOR_SECOND_ABOVE = {
  // White keys
  A: `B${FLAT}`,
  B: "C",
  C: `D${FLAT}`,
  D: `E${FLAT}`,
  E: "F",
  F: `G${FLAT}`,
  G: `A${FLAT}`,
  // Sharps
  [`A${SHARP}`]: "B",
  [`C${SHARP}`]: "D",
  [`D${SHARP}`]: "E",
  [`F${SHARP}`]: "G",
  [`G${SHARP}`]: "A",
  // Flats
  [`B${FLAT}`]: `C${FLAT}`,
  [`E${FLAT}`]: `F${FLAT}`,
  [`A${FLAT}`]: `B${FLAT}${FLAT}`,
  [`D${FLAT}`]: `E${FLAT}${FLAT}`,
  [`G${FLAT}`]: `A${FLAT}${FLAT}`,
};

const NOTES_MAJOR_SECOND_ABOVE = {
  // White keys
  A: "B",
  B: `C${SHARP}`,
  C: "D",
  D: "E",
  E: `F${SHARP}`,
  F: "G",
  G: "A",
  // Sharps
  [`A${SHARP}`]: `B${SHARP}`,
  [`C${SHARP}`]: `D${SHARP}`,
  [`D${SHARP}`]: `E${SHARP}`,
  [`F${SHARP}`]: `G${SHARP}`,
  [`G${SHARP}`]: `A${SHARP}`,
  // Flats
  [`B${FLAT}`]: "C",
  [`E${FLAT}`]: "F",
  [`A${FLAT}`]: `B${FLAT}`,
  [`D${FLAT}`]: `E${FLAT}`,
  [`G${FLAT}`]: `A${FLAT}`,
};

const NOTES_PERFECT_FIFTH_ABOVE = {
  // White keys
  A: "E",
  B: `F${SHARP}`,
  C: "G",
  D: "A",
  E: "B",
  F: "C",
  G: "D",
  // Sharps
  [`A${SHARP}`]: `E${SHARP}`,
  [`C${SHARP}`]: `G${SHARP}`,
  [`D${SHARP}`]: `A${SHARP}`,
  [`F${SHARP}`]: `C${SHARP}`,
  [`G${SHARP}`]: `D${SHARP}`,
  // Flats
  [`B${FLAT}`]: "F",
  [`E${FLAT}`]: `B${FLAT}`,
  [`A${FLAT}`]: `E${FLAT}`,
  [`D${FLAT}`]: `A${FLAT}`,
  [`G${FLAT}`]: `D${FLAT}`,
};

const NOTES_AUGMENTED_FIFTH_ABOVE = {
  // White keys
  A: `E${SHARP}`,
  B: `F${SHARP}${SHARP}`,
  C: `G${SHARP}`,
  D: `A${SHARP}`,
  E: `B${SHARP}`,
  F: `C${SHARP}`,
  G: `D${SHARP}`,
  // Sharps
  [`A${SHARP}`]: `E${SHARP}${SHARP}`,
  [`C${SHARP}`]: `G${SHARP}${SHARP}`,
  [`D${SHARP}`]: `A${SHARP}${SHARP}`,
  [`F${SHARP}`]: `C${SHARP}${SHARP}`,
  [`G${SHARP}`]: `D${SHARP}${SHARP}`,
  // Flats
  [`B${FLAT}`]: `F${SHARP}`,
  [`E${FLAT}`]: `B`,
  [`A${FLAT}`]: `E`,
  [`D${FLAT}`]: `A`,
  [`G${FLAT}`]: `D`,
};

const NOTES_MAJOR_THIRD_ABOVE = {
  // White keys
  A: `C${SHARP}`,
  B: `D${SHARP}`,
  C: "E",
  D: `F${SHARP}`,
  E: `G${SHARP}`,
  F: "A",
  G: "B",
  // Sharps
  [`A${SHARP}`]: `C${SHARP}${SHARP}`,
  [`C${SHARP}`]: `E${SHARP}`,
  [`D${SHARP}`]: `F${SHARP}${SHARP}`,
  [`F${SHARP}`]: `A${SHARP}`,
  [`G${SHARP}`]: `B${SHARP}`,
  // Flats
  [`B${FLAT}`]: "D",
  [`E${FLAT}`]: "G",
  [`A${FLAT}`]: "C",
  [`D${FLAT}`]: "F",
  [`G${FLAT}`]: `B${FLAT}`,
};

const NOTES_MINOR_THIRD_ABOVE = {
  // White keys
  A: "C",
  B: "D",
  C: `E${FLAT}`,
  D: "F",
  E: "G",
  F: `A${FLAT}`,
  G: `B${FLAT}`,
  // Sharps
  [`A${SHARP}`]: `C${SHARP}`,
  [`C${SHARP}`]: "E",
  [`D${SHARP}`]: `F${SHARP}`,
  [`F${SHARP}`]: "A",
  [`G${SHARP}`]: "B",
  // Flats
  [`B${FLAT}`]: `D${FLAT}`,
  [`E${FLAT}`]: `G${FLAT}`,
  [`A${FLAT}`]: `C${FLAT}`,
  [`D${FLAT}`]: `F${FLAT}`,
  [`G${FLAT}`]: `B${FLAT}${FLAT}`,
};

const NOTES_MINOR_SEVENTH_ABOVE = {
  // White keys
  A: "G",
  B: "A",
  C: `B${FLAT}`,
  D: "C",
  E: "D",
  F: `E${FLAT}`,
  G: "F",
  // Sharps
  [`A${SHARP}`]: `G${SHARP}`,
  [`C${SHARP}`]: "B",
  [`D${SHARP}`]: `C${SHARP}`,
  [`F${SHARP}`]: "E",
  [`G${SHARP}`]: `F${SHARP}`,
  // Flats
  [`B${FLAT}`]: `A${FLAT}`,
  [`E${FLAT}`]: `D${FLAT}`,
  [`A${FLAT}`]: `G${FLAT}`,
  [`D${FLAT}`]: `C${FLAT}`,
  [`G${FLAT}`]: `F${FLAT}`,
};

const NOTES_MAJOR_SEVENTH_ABOVE = {
  // White keys
  A: `G${SHARP}`,
  B: `A${SHARP}`,
  C: "B",
  D: `C${SHARP}`,
  E: `D${SHARP}`,
  F: "E",
  G: `F${SHARP}`,
  // Sharps
  [`A${SHARP}`]: `G${SHARP}${SHARP}`,
  [`C${SHARP}`]: `B${SHARP}`,
  [`D${SHARP}`]: `C${SHARP}${SHARP}`,
  [`F${SHARP}`]: `E${SHARP}`,
  [`G${SHARP}`]: `F${SHARP}${SHARP}`,
  // Flats
  [`B${FLAT}`]: "A",
  [`E${FLAT}`]: "D",
  [`A${FLAT}`]: "G",
  [`D${FLAT}`]: "C",
  [`G${FLAT}`]: "F",
};

const NOTES_PERFECT_FOURTH_ABOVE = {
  // White keys
  A: "D",
  B: "E",
  C: "F",
  D: "G",
  E: "A",
  F: `B${FLAT}`,
  G: "C",
  // Sharps
  [`A${SHARP}`]: `D${SHARP}`,
  [`C${SHARP}`]: `F${SHARP}`,
  [`D${SHARP}`]: `G${SHARP}`,
  [`F${SHARP}`]: "B",
  [`G${SHARP}`]: `C${SHARP}`,
  // Flats
  [`B${FLAT}`]: `E${FLAT}`,
  [`E${FLAT}`]: `A${FLAT}`,
  [`A${FLAT}`]: `D${FLAT}`,
  [`D${FLAT}`]: `G${FLAT}`,
  [`G${FLAT}`]: `C${FLAT}`,
};

const NOTES_AUGMENTED_FOURTH_ABOVE = {
  // White keys
  A: `D${SHARP}`,
  B: `E${SHARP}`,
  C: `F${SHARP}`,
  D: `G${SHARP}`,
  E: `A${SHARP}`,
  F: `B`,
  G: `C${SHARP}`,
  // Sharps
  [`A${SHARP}`]: `D${SHARP}${SHARP}`,
  [`C${SHARP}`]: `F${SHARP}${SHARP}`,
  [`D${SHARP}`]: `G${SHARP}${SHARP}`,
  [`F${SHARP}`]: `B${SHARP}`,
  [`G${SHARP}`]: `C${SHARP}${SHARP}`,
  // Flats
  [`B${FLAT}`]: "E",
  [`E${FLAT}`]: "A",
  [`A${FLAT}`]: "D",
  [`D${FLAT}`]: "G",
  [`G${FLAT}`]: "C",
};

const NOTES_DIMINISHED_FIFTH_ABOVE = {
  // White keys
  A: `E${FLAT}`,
  B: `F`,
  C: `G${FLAT}`,
  D: `A${FLAT}`,
  E: `B${FLAT}`,
  F: `C${FLAT}`,
  G: `D${FLAT}`,
  // Sharps
  [`A${SHARP}`]: "E",
  [`C${SHARP}`]: "G",
  [`D${SHARP}`]: "A",
  [`F${SHARP}`]: "C",
  [`G${SHARP}`]: "D",
  // Flats
  [`B${FLAT}`]: `F${FLAT}`,
  [`E${FLAT}`]: `B${FLAT}${FLAT}`,
  [`A${FLAT}`]: `E${FLAT}${FLAT}`,
  [`D${FLAT}`]: `A${FLAT}${FLAT}`,
  [`G${FLAT}`]: `D${FLAT}${FLAT}`,
};

const NOTES_MINOR_SIXTH_ABOVE = {
  // White keys
  A: "F",
  B: "G",
  C: `A${FLAT}`,
  D: `B${FLAT}`,
  E: "C",
  F: `D${FLAT}`,
  G: `E${FLAT}`,
  // Sharps
  [`A${SHARP}`]: `F${SHARP}`,
  [`C${SHARP}`]: "A",
  [`D${SHARP}`]: "B",
  [`F${SHARP}`]: "D",
  [`G${SHARP}`]: "E",
  // Flats
  [`B${FLAT}`]: `G${FLAT}`,
  [`E${FLAT}`]: `C${FLAT}`,
  [`A${FLAT}`]: `F${FLAT}`,
  [`D${FLAT}`]: `B${FLAT}${FLAT}`,
  [`G${FLAT}`]: `E${FLAT}${FLAT}`,
};

const NOTES_MAJOR_SIXTH_ABOVE = {
  // White keys
  A: `F${SHARP}`,
  B: `G${SHARP}`,
  C: "A",
  D: "B",
  E: `C${SHARP}`,
  F: "D",
  G: "E",
  // Sharps
  [`A${SHARP}`]: `F${SHARP}${SHARP}`,
  [`C${SHARP}`]: `A${SHARP}`,
  [`D${SHARP}`]: `B${SHARP}`,
  [`F${SHARP}`]: `D${SHARP}`,
  [`G${SHARP}`]: `E${SHARP}`,
  // Flats
  [`B${FLAT}`]: "G",
  [`E${FLAT}`]: "C",
  [`A${FLAT}`]: "F",
  [`D${FLAT}`]: `B${FLAT}`,
  [`G${FLAT}`]: `E${FLAT}`,
};

const NOTES_DIMINISHED_SEVENTH_ABOVE = {
  // White keys
  A: `G${FLAT}`,
  B: `A${FLAT}`,
  C: `B${FLAT}${FLAT}`,
  D: `C${FLAT}`,
  E: `D${FLAT}`,
  F: `E${FLAT}${FLAT}`,
  G: `F${FLAT}`,
  // Sharps
  [`A${SHARP}`]: "G",
  [`C${SHARP}`]: `B${FLAT}`,
  [`D${SHARP}`]: "C",
  [`F${SHARP}`]: `E${FLAT}`,
  [`G${SHARP}`]: "F",
  // Flats
  [`B${FLAT}`]: `A${FLAT}${FLAT}`,
  [`E${FLAT}`]: `D${FLAT}${FLAT}`,
  [`A${FLAT}`]: `G${FLAT}${FLAT}`,
  [`D${FLAT}`]: `C${FLAT}${FLAT}`,
  [`G${FLAT}`]: `F${FLAT}${FLAT}`,
};

const DATA_BY_INVERVAL = {
  m2: NOTES_MINOR_SECOND_ABOVE,
  M2: NOTES_MAJOR_SECOND_ABOVE,
  m3: NOTES_MINOR_THIRD_ABOVE,
  M3: NOTES_MAJOR_THIRD_ABOVE,
  P4: NOTES_PERFECT_FOURTH_ABOVE,
  "+4": NOTES_AUGMENTED_FOURTH_ABOVE,
  o5: NOTES_DIMINISHED_FIFTH_ABOVE,
  P5: NOTES_PERFECT_FIFTH_ABOVE,
  "+5": NOTES_AUGMENTED_FIFTH_ABOVE,
  m6: NOTES_MINOR_SIXTH_ABOVE,
  M6: NOTES_MAJOR_SIXTH_ABOVE,
  o7: NOTES_DIMINISHED_SEVENTH_ABOVE,
  m7: NOTES_MINOR_SEVENTH_ABOVE,
  M7: NOTES_MAJOR_SEVENTH_ABOVE,
};
function noteAbove({ note, interval }) {
  if (note.includes("b") || note.includes("#")) {
    throw new Error(`Did you forget to use flat/sharp constants?`);
  }

  if (interval === "P1") {
    return note;
  }

  if (DATA_BY_INVERVAL[interval]) {
    return DATA_BY_INVERVAL[interval][note];
  }
  throw new Error(`not implemented for interval=${interval}`);
}

export { noteAbove };
