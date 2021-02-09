import { noteAbove } from "../intervals.js";
import {
  WHITE_KEYS,
  SHARPS,
  FLATS,
  MINOR_SEVEN,
  SEVEN,
  MAJOR_SEVEN,
} from "../constants.js";

function thirdsAndSevenths(intervals) {
  return WHITE_KEYS.concat(SHARPS)
    .concat(FLATS)
    .map(function (note) {
      return {
        front: note,
        back: [
          noteAbove({ note: note, interval: intervals[0] }),
          noteAbove({
            note: note,
            interval: intervals[1],
          }),
        ].join(" "),
      };
    });
}

function cards(typeOfChord) {
  let intervals;
  switch (typeOfChord) {
    case MAJOR_SEVEN:
      intervals = ["M3", "M7"];
      break;
    case SEVEN:
      intervals = ["M3", "m7"];
      break;
    case MINOR_SEVEN:
      intervals = ["m3", "m7"];
      break;
    default:
      throw new Error(`not implemented for typeOfChord=${typeOfChord}`);
  }

  return thirdsAndSevenths(intervals);
}
export { cards };
