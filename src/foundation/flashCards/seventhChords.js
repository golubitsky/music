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

function chordName(note, chordQuality) {
  // TODO simplify/remove me.
  switch (chordQuality) {
    case MAJOR_SEVEN:
      return `${note}${MAJOR_SEVEN}`;
    case SEVEN:
      return `${note}${SEVEN}`;
    case MINOR_SEVEN:
      return `${note}${MINOR_SEVEN}`;
    case HALF_DIMINISHED_SEVEN:
      return `${note}${HALF_DIMINISHED_SEVEN}`;
    case DIMINISHED_SEVEN:
      return `${note}${DIMINISHED_SEVEN}`;
    default:
      throw new Error(`not implemented for chordQuality=${chordQuality}`);
  }
}

function seventhChords(chordQuality, intervals, isRandomOrderBack) {
  return WHITE_KEYS.concat(SHARPS)
    .concat(FLATS)
    .map(function (note) {
      return {
        front: chordName(note, chordQuality),
        back: `${notesInOneChord(note, intervals, isRandomOrderBack).join(
          " "
        )}`,
      };
    });
}

function cards({ chordQuality, isRandomOrderBack }) {
  let intervals;
  switch (chordQuality) {
    case MAJOR_SEVEN:
      intervals = ["M3", "P5", "M7"];
      break;
    case SEVEN:
      intervals = ["M3", "P5", "m7"];
      break;
    case MINOR_SEVEN:
      intervals = ["m3", "P5", "m7"];
      break;
    case HALF_DIMINISHED_SEVEN:
      intervals = ["m3", "o5", "m7"];
      break;
    case DIMINISHED_SEVEN:
      intervals = ["m3", "o5", "o7"];
      break;
    case "all":
      const paramsForAllQualities = [
        MAJOR_SEVEN,
        SEVEN,
        MINOR_SEVEN,
        HALF_DIMINISHED_SEVEN,
      ].map((quality) => {
        return { chordQuality: quality, isRandomOrderBack: isRandomOrderBack };
      });
      return _.flatMap(paramsForAllQualities, cards);
    default:
      throw new Error(`not implemented for chordQuality=${chordQuality}`);
  }

  return seventhChords(chordQuality, intervals, isRandomOrderBack);
}
export { cards };
