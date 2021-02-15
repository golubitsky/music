import { noteAbove } from "foundation/intervals";
import { ALL_NOTES, INTERVALS } from "foundation/constants";

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
