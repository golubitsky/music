// One of twelve, plus enharmonics. [Note]
// A note belongs to many chords. [Chord]
// A note is relative to another note. [Interval]
// Number of chords suggested by 1, 2, 3 (...) notes within the system.
// [Key]

const NOTES_FIFTH_ABOVE = {
  // White keys
  A: "E",
  B: "F#",
  C: "G",
  D: "A",
  E: "B",
  F: "C",
  G: "D",
  // Sharps
  "A#": "E#",
  "C#": "G#",
  "D#": "A#",
  "F#": "C#",
  "G#": "D#",
  // Flats
  Bb: "F",
  Eb: "Bb",
  Ab: "Eb",
  Db: "Ab",
  Gb: "Db",
};

const NOTES_MAJOR_THIRD_ABOVE = {
  // White keys
  A: "C#",
  B: "D#",
  C: "E",
  D: "F#",
  E: "G#",
  F: "A",
  G: "B",
  // Sharps
  "A#": "C##",
  "C#": "E#",
  "D#": "F##",
  "F#": "A#",
  "G#": "B#",
  // Flats
  Bb: "D",
  Eb: "G",
  Ab: "C",
  Db: "F",
  Gb: "Bb",
};

const NOTES_MINOR_THIRD_ABOVE = {
  // White keys
  A: "C",
  B: "D",
  C: "Eb",
  D: "F",
  E: "G",
  F: "Ab",
  G: "Bb",
  // Sharps
  "A#": "C#",
  "C#": "E",
  "D#": "F#",
  "F#": "A",
  "G#": "B",
  // Flats
  Bb: "Db",
  Eb: "Gb",
  Ab: "Cb",
  Db: "Fb",
  Gb: "Bbb",
};

const NOTES_MINOR_SEVENTH_ABOVE = {
  // White keys
  A: "G",
  B: "A",
  C: "Bb",
  D: "C",
  E: "D",
  F: "Eb",
  G: "F",
  // Sharps
  "A#": "G#",
  "C#": "B",
  "D#": "C#",
  "F#": "E",
  "G#": "F#",
  // Flats
  Bb: "Ab",
  Eb: "Db",
  Ab: "Gb",
  Db: "Cb",
  Gb: "Fb",
};

const NOTES_MAJOR_SEVENTH_ABOVE = {
  // White keys
  A: "G#",
  B: "A#",
  C: "B",
  D: "C#",
  E: "D#",
  F: "E",
  G: "F#",
  // Sharps
  "A#": "G##",
  "C#": "B#",
  "D#": "C##",
  "F#": "E#",
  "G#": "F##",
  // Flats
  Bb: "A",
  Eb: "D",
  Ab: "G",
  Db: "C",
  Gb: "F",
};

function noteAbove(note, interval) {
  if (interval === "P5") {
    return NOTES_FIFTH_ABOVE[note];
  } else if (interval === "M3") {
    return NOTES_MAJOR_THIRD_ABOVE[note];
  } else if (interval === "m3") {
    return NOTES_MINOR_THIRD_ABOVE[note];
  } else if (interval === "m7") {
    return NOTES_MINOR_SEVENTH_ABOVE[note];
  } else if (interval === "M7") {
    return NOTES_MAJOR_SEVENTH_ABOVE[note];
  }
}
export { noteAbove };
