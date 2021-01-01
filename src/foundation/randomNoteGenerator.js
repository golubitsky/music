// One of twelve, plus enharmonics. [Note]
// A note belongs to many chords. [Chord]
// A note is relative to another note. [Interval]
// Number of chords suggested by 1, 2, 3 (...) notes within the system.
// [Key]

const _ = require("lodash");

const WHITE_KEYS = ["A", "B", "C", "D", "E", "F", "G"];
const FLATS = ["Bb", "Eb", "Ab", "Db", "Gb"];
const SHARPS = ["C#", "D#", "F#", "G#", "A#"];
const BLACK_KEYS = FLATS.concat(SHARPS);

function randomNotes() {
  return _.shuffle(WHITE_KEYS.concat(BLACK_KEYS));
}

export { WHITE_KEYS, BLACK_KEYS, randomNotes };
