// One of twelve, plus enharmonics. [Note]
// A note belongs to many chords. [Chord]
// A note is relative to another note. [Interval]
// Number of chords suggested by 1, 2, 3 (...) notes within the system.
// [Key]

const NUMBERS_BY_LETTER = {
  A: 0,
  B: 2,
  C: 3,
  D: 5,
  E: 7,
  F: 8,
  G: 10,
};

const INTERVALS_BY_NUMBER = {
  0: "P1",
  1: "m2",
  2: "M2",
  3: "m3",
  4: "M3",
  5: "P4",
  6: "d5",
  7: "P5",
  8: "m6",
  9: "M6",
  10: "m7",
  11: "M7",
  12: "P8",
};

function isFlat(note) {
  return note.includes("b");
}

function isSharp(note) {
  return note.includes("#");
}

function number(note) {
  if (isFlat(note)) {
    return NUMBERS_BY_LETTER[note[0]] - 1;
  }

  if (isSharp(note)) {
    return NUMBERS_BY_LETTER[note[0]] + 1;
  }

  return NUMBERS_BY_LETTER[note];
}

function ascendingInterval(from, to) {
  let comparison = number(to) - number(from);
  if (comparison >= 0) {
    return INTERVALS_BY_NUMBER[comparison];
  } else {
    return INTERVALS_BY_NUMBER[comparison + 12];
  }
}

function noteAbove(note, interval) {}

export { ascendingInterval, noteAbove };
