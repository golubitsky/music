import { noteAbove } from "../intervals.js";
import { WHITE_KEYS, SHARPS, FLATS } from "../constants.js";
import { map } from "lodash";
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

function chordName(note, chordQuality) {
  switch (chordQuality) {
    case "△":
      return `${note}△`;
    case "7":
      return `${note}7`;
    case "m7":
      return `${note}m7`;
    case "ø7":
      return `${note}ø`;
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
    case "all":
      const paramsForAllQualities = ["△", "7", "m7", "ø7"].map((quality) => {
        return { chordQuality: quality, isRandomOrderBack: isRandomOrderBack };
      });
      return _.flatMap(paramsForAllQualities, cards);
    default:
      throw new Error(`not implemented for chordQuality=${chordQuality}`);
  }

  return seventhChords(chordQuality, intervals, isRandomOrderBack);
}
export { cards };
