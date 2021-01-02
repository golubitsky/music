// One of twelve, plus enharmonics. [Note]
// A note belongs to many chords. [Chord]
// A note is relative to another note. [Interval]
// Number of chords suggested by 1, 2, 3 (...) notes within the system.
// [Key]

const _ = require("lodash");

const WHITE_KEYS = ["A", "B", "C", "D", "E", "F", "G"];
const FLATS = ["Bb", "Eb", "Ab", "Db", "Gb"];
const SHARPS = ["C#", "D#", "F#", "G#", "A#"];

function randomNotes(accidental) {
  let black_keys;
  if (accidental === "b") {
    black_keys = FLATS;
  } else if (accidental === "#") {
    black_keys = SHARPS;
  } else {
    black_keys = _.sample([FLATS, SHARPS]);
  }
  return _.shuffle(WHITE_KEYS.concat(black_keys));
}

export { WHITE_KEYS, FLATS, SHARPS, randomNotes };
