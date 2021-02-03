import { noteAbove } from "../intervals.js";
import { WHITE_KEYS, SHARPS, FLATS } from "../constants.js";
const _ = require("lodash");

function notesInOneChord(note, intervals, isRandomOrderBack) {
  const notes = [
    note,
    noteAbove(note, intervals[0]),
    noteAbove(note, intervals[1]),
    noteAbove(note, intervals[2]),
  ];

  return isRandomOrderBack ? _.shuffle(notes) : notes;
}

function thirdsAndSevenths(intervals, isRandomOrderBack) {
  return WHITE_KEYS.concat(SHARPS)
    .concat(FLATS)
    .map(function (note) {
      return {
        front: note,
        back: `${notesInOneChord(note, intervals, isRandomOrderBack).join(
          " "
        )}`,
      };
    });
}

function cards({ chordQuality, isRandomOrderBack }) {
  let intervals;
  switch (chordQuality) {
    case "△":
      intervals = ["M3", "P5", "M7"];
      break;
    case "7":
      intervals = ["M3", "P5", "m7"];
      break;
    case "m7":
      intervals = ["m3", "P5", "m7"];
      break;
    case "ø7":
      intervals = ["m3", "o5", "m7"];
      break;

    default:
      throw new Error(`not implemented for chordQuality=${chordQuality}`);
  }

  return thirdsAndSevenths(intervals, isRandomOrderBack);
}
export { cards };
