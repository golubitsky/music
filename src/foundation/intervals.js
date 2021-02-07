// One of twelve, plus enharmonics. [Note]
// A note belongs to many chords. [Chord]
// A note is relative to another note. [Interval]
// Number of chords suggested by 1, 2, 3 (...) notes within the system.
// [Key]

const NOTES_FIFTH_ABOVE = {
  // White keys
  A: "E",
  B: "F♯",
  C: "G",
  D: "A",
  E: "B",
  F: "C",
  G: "D",
  // Sharps
  "A♯": "E♯",
  "C♯": "G♯",
  "D♯": "A♯",
  "F♯": "C♯",
  "G♯": "D♯",
  // Flats
  "B♭": "F",
  "E♭": "B♭",
  "A♭": "E♭",
  "D♭": "A♭",
  "G♭": "D♭",
};

const NOTES_MAJOR_THIRD_ABOVE = {
  // White keys
  A: "C♯",
  B: "D♯",
  C: "E",
  D: "F♯",
  E: "G♯",
  F: "A",
  G: "B",
  // Sharps
  "A♯": "C♯♯",
  "C♯": "E♯",
  "D♯": "F♯♯",
  "F♯": "A♯",
  "G♯": "B♯",
  // Flats
  "B♭": "D",
  "E♭": "G",
  "A♭": "C",
  "D♭": "F",
  "G♭": "B♭",
};

const NOTES_MINOR_THIRD_ABOVE = {
  // White keys
  A: "C",
  B: "D",
  C: "E♭",
  D: "F",
  E: "G",
  F: "A♭",
  G: "B♭",
  // Sharps
  "A♯": "C♯",
  "C♯": "E",
  "D♯": "F♯",
  "F♯": "A",
  "G♯": "B",
  // Flats
  "B♭": "D♭",
  "E♭": "G♭",
  "A♭": "C♭",
  "D♭": "F♭",
  "G♭": "B♭♭",
};

const NOTES_MINOR_SEVENTH_ABOVE = {
  // White keys
  A: "G",
  B: "A",
  C: "B♭",
  D: "C",
  E: "D",
  F: "E♭",
  G: "F",
  // Sharps
  "A♯": "G♯",
  "C♯": "B",
  "D♯": "C♯",
  "F♯": "E",
  "G♯": "F♯",
  // Flats
  "B♭": "A♭",
  "E♭": "D♭",
  "A♭": "G♭",
  "D♭": "C♭",
  "G♭": "F♭",
};

const NOTES_MAJOR_SEVENTH_ABOVE = {
  // White keys
  A: "G♯",
  B: "A♯",
  C: "B",
  D: "C♯",
  E: "D♯",
  F: "E",
  G: "F♯",
  // Sharps
  "A♯": "G♯♯",
  "C♯": "B♯",
  "D♯": "C♯♯",
  "F♯": "E♯",
  "G♯": "F♯♯",
  // Flats
  "B♭": "A",
  "E♭": "D",
  "A♭": "G",
  "D♭": "C",
  "G♭": "F",
};

const NOTES_AUGMENTED_FOURTH_ABOVE = {
  // White keys
  A: "D♯",
  B: "E♯",
  C: "F♯",
  D: "G♯",
  E: "A♯",
  F: "B",
  G: "C♯",
  // Sharps
  "A♯": "D♯♯",
  "C♯": "F♯♯",
  "D♯": "G♯♯",
  "F♯": "B♯",
  "G♯": "C♯♯",
  // Flats
  "B♭": "E",
  "E♭": "A",
  "A♭": "D",
  "D♭": "G",
  "G♭": "C",
};

const NOTES_DIMINISHED_FIFTH_ABOVE = {
  // White keys
  A: "E♭",
  B: "F",
  C: "G♭",
  D: "A♭",
  E: "B♭",
  F: "C♭",
  G: "D♭",
  // Sharps
  "A♯": "E",
  "C♯": "G",
  "D♯": "A",
  "F♯": "C",
  "G♯": "D",
  // Flats
  "B♭": "F♭",
  "E♭": "♭♭♭",
  "A♭": "E♭♭",
  "D♭": "A♭♭",
  "G♭": "D♭♭",
};

function noteAbove(note, interval) {
  if (interval === "P5") {
    return NOTES_FIFTH_ABOVE[note];
  } else if (interval === "M3") {
    return NOTES_MAJOR_THIRD_ABOVE[note];
  } else if (interval === "m3") {
    return NOTES_MINOR_THIRD_ABOVE[note];
  } else if (interval === "+4") {
    return NOTES_AUGMENTED_FOURTH_ABOVE[note];
  } else if (interval === "o5") {
    return NOTES_DIMINISHED_FIFTH_ABOVE[note];
  } else if (interval === "m7") {
    return NOTES_MINOR_SEVENTH_ABOVE[note];
  } else if (interval === "M7") {
    return NOTES_MAJOR_SEVENTH_ABOVE[note];
  }
}
export { noteAbove };
