// One of twelve, plus enharmonics. [Note]
// A note belongs to many chords. [Chord]
// A note is relative to another note. [Interval]
// Number of chords suggested by 1, 2, 3 (...) notes within the system.
// [Key]

const WHITE_KEYS = ["A", "B", "C", "D", "E", "F", "G"];
const FLATS = ["Bb", "Eb", "Ab", "Db", "Gb"];
const SHARPS = ["C#", "D#", "F#", "G#", "A#"];
const BLACK_KEYS = FLATS.concat(SHARPS);

function shuffle(array) {
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?rq=1
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function randomNotes() {
  return shuffle(WHITE_KEYS.concat(BLACK_KEYS));
}

export { WHITE_KEYS, BLACK_KEYS, randomNotes };
