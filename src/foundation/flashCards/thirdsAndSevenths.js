import { noteAbove } from "../intervals.js";
import { WHITE_KEYS, SHARPS, FLATS } from "../constants.js";

const _ = require("lodash");

function thirdsAndSevenths(intervals) {
  return WHITE_KEYS.concat(SHARPS)
    .concat(FLATS)
    .map(function (note) {
      return {
        front: note,
        back: `${noteAbove(note, intervals[0])},${noteAbove(
          note,
          intervals[1]
        )}`,
      };
    });
}

function cards(typeOfChord) {
  let intervals;
  switch (typeOfChord) {
    case "△":
      intervals = ["M3", "M7"];
      break;
    case "7":
      intervals = ["M3", "m7"];
      break;
    case "m7":
      intervals = ["m3", "m7"];
      break;
    default:
      throw new NotImplementedException();
  }

  return thirdsAndSevenths(intervals);
}
export { cards };
