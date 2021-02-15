import { noteAbove, INTERVALS } from "foundation/intervals";
import { ALL_NOTES } from "../../foundation/constants.js";
const _ = require("lodash");

function cards({ interval }) {
  if (interval === "all") {
    return _.flatMap(
      INTERVALS.map((interval) => {
        return {
          interval: interval,
        };
      }),
      cards
    );
  }

  return ALL_NOTES.map((note) => {
    return {
      front: [note],
      back: [noteAbove({ note, interval })],
    };
  });
}
export { cards };
