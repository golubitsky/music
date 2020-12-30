// One of twelve, plus enharmonics. [Note]
// A note belongs to many chords. [Chord]
// A note is relative to another note. [Interval]
// Number of chords suggested by 1, 2, 3 (...) notes within the system.
// [Key]

const HALFSTEPS_ABOVE_A_BY_LETTER = {
  A: 0,
  B: 2,
  C: 3,
  D: 5,
  E: 7,
  F: 8,
  G: 10,
};

const INTERVALS_BY_HALFSTEPS = {
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

function swap(json, fn) {
  // swaps k <-> v; applies fn to values (if provided)
  var ret = {};
  for (var key in json) {
    ret[json[key]] = fn ? fn(key) : key;
  }
  return ret;
}

const HALFSTEPS_BY_INTERVALS = swap(INTERVALS_BY_HALFSTEPS, parseInt);
const NOTES_BY_HALFSTEPS_ABOVE_A = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
];

function isFlat(note) {
  return note.includes("b");
}

function isSharp(note) {
  return note.includes("#");
}

function halfstepsAboveA(note) {
  let modifier = 0;
  modifier = isFlat(note) ? -1 : 0;
  modifier = isSharp(note) ? 1 : 0;

  if (isFlat(note)) {
    return HALFSTEPS_ABOVE_A_BY_LETTER[note[0]] - 1;
  }

  return HALFSTEPS_ABOVE_A_BY_LETTER[note[0]] + modifier;
}

function ascendingInterval(from, to) {
  let comparison = halfstepsAboveA(to) - halfstepsAboveA(from);
  if (comparison >= 0) {
    return INTERVALS_BY_HALFSTEPS[comparison];
  } else {
    return INTERVALS_BY_HALFSTEPS[comparison + 12];
  }
}

function letter(note) {
  return note.replace(/b|#|M|m/, "");
}

function numberOfLettersAway(from, to) {
  const letters = "ABCDEFG";

  let result = letters.indexOf(letter(to)) - letters.indexOf(letter(from));

  if (result < 0) {
    return result + letters.length;
  } else {
    return result;
  }
}

function quality(interval) {
  return interval.match(/\w/)[0];
}

function size(interval) {
  return interval.match(/\d/)[0];
}

function wholeSteps(halfSteps) {
  
}

function noteAbove(from, interval) {
  let letter =
    NOTES_BY_HALFSTEPS_ABOVE_A[
      (halfstepsAboveA(from) + HALFSTEPS_BY_INTERVALS[interval]) % 12
    ];
  console.log(size(interval));

  if (numberOfLettersAway(from, letter) == size(interval)) {
    return letter;
  }

  if (comparison >= 0) {
    return INTERVALS_BY_HALFSTEPS[comparison];
  } else {
    return INTERVALS_BY_HALFSTEPS[comparison + 12];
  }
}

export { ascendingInterval, noteAbove };
