import { noteAbove } from "../intervals.js";
import {
  WHITE_KEYS,
  SHARPS,
  FLATS,
  MAJOR_SEVEN,
  SEVEN,
  MINOR_SEVEN,
  HALF_DIMINISHED_SEVEN,
  DIMINISHED_SEVEN,
} from "../constants.js";
const _ = require("lodash");

const INTERVALS_ABOVE_ROOT_BY_CHORD_QUALITY = {
  [MAJOR_SEVEN]: ["M3", "P5", "M7"],
  [SEVEN]: ["M3", "P5", "m7"],
  [MINOR_SEVEN]: ["m3", "P5", "m7"],
  [HALF_DIMINISHED_SEVEN]: ["m3", "o5", "m7"],
  [DIMINISHED_SEVEN]: ["m3", "o5", "o7"],
};

function notesInOneChord(note, intervals, isRandomOrderBack) {
  const notes = [
    note,
    noteAbove(note, intervals[0]),
    noteAbove(note, intervals[1]),
    noteAbove(note, intervals[2]),
  ];

  if (isRandomOrderBack) {
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

function seventhChords(chordQuality, isRandomOrderBack) {
  return WHITE_KEYS.concat(SHARPS)
    .concat(FLATS)
    .map(function (note) {
      const notesInChord = notesInOneChord(
        note,
        INTERVALS_ABOVE_ROOT_BY_CHORD_QUALITY[chordQuality],
        isRandomOrderBack
      );

      return {
        front: `${note}${chordQuality}`,
        back: `${notesInChord.join(" ")}`,
      };
    });
}

function cards({ chordQuality, isRandomOrderBack }) {
  if (chordQuality in INTERVALS_ABOVE_ROOT_BY_CHORD_QUALITY) {
    return seventhChords(chordQuality, isRandomOrderBack);
  }

  if (chordQuality === "all") {
    const paramsForAllQualities = _.keys(
      INTERVALS_ABOVE_ROOT_BY_CHORD_QUALITY
    ).map((quality) => {
      return {
        chordQuality: quality,
        isRandomOrderBack: isRandomOrderBack,
      };
    });
    return _.flatMap(paramsForAllQualities, cards);
  }

  throw new Error(`not implemented for chordQuality=${chordQuality}`);
}
export { cards };
