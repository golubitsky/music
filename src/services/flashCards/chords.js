import { noteAbove } from "../../foundation/intervals.js";
import {
  ALL_NOTES,
  DIMINISHED,
  MINOR,
  MAJOR,
  AUGMENTED,
  MAJOR_SEVEN,
  SEVEN,
  MINOR_SEVEN,
  HALF_DIMINISHED_SEVEN,
  DIMINISHED_SEVEN,
} from "../../foundation/constants.js";
const _ = require("lodash");

const INTERVALS_ABOVE_ROOT_BY_CHORD_QUALITY = {
  [MAJOR_SEVEN]: ["M3", "P5", "M7"],
  [SEVEN]: ["M3", "P5", "m7"],
  [MINOR_SEVEN]: ["m3", "P5", "m7"],
  [HALF_DIMINISHED_SEVEN]: ["m3", "o5", "m7"],
  [DIMINISHED_SEVEN]: ["m3", "o5", "o7"],
  [DIMINISHED]: ["m3", "o5"],
  [MINOR]: ["m3", "P5"],
  [MAJOR]: ["M3", "P5"],
  [AUGMENTED]: ["M3", "+5"],
};

function notesInOneChord({ note, chordQuality, notesAreShuffled }) {
  const notes = [
    note,
    ...INTERVALS_ABOVE_ROOT_BY_CHORD_QUALITY[chordQuality].map((interval) =>
      noteAbove({ note, interval })
    ),
  ];

  if (notesAreShuffled) {
    while (true) {
      let shuffledNotes = _.shuffle(notes);

      if (!_.isEqual(notes, shuffledNotes)) {
        return shuffledNotes;
      }
    }
  } else {
    return notes;
  }
}

function chords(chordQuality, notesAreShuffled) {
  return ALL_NOTES.map(function (note) {
    const notesInChord = notesInOneChord({
      note,
      chordQuality,
      notesAreShuffled,
    });

    return {
      front: chordQuality === MAJOR ? note : `${note}${chordQuality}`,
      back: `${notesInChord.join(" ")}`,
    };
  });
}

function cards({ chordQuality, notesAreShuffled }) {
  if (chordQuality in INTERVALS_ABOVE_ROOT_BY_CHORD_QUALITY) {
    return chords(chordQuality, notesAreShuffled);
  }

  if (chordQuality === "all") {
    const paramsForAllQualities = _.keys(
      INTERVALS_ABOVE_ROOT_BY_CHORD_QUALITY
    ).map((quality) => {
      return {
        chordQuality: quality,
        notesAreShuffled: notesAreShuffled,
      };
    });
    return _.flatMap(paramsForAllQualities, cards);
  }

  throw new Error(`not implemented for chordQuality=${chordQuality}`);
}
export { cards, notesInOneChord };
