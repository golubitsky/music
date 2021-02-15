import { noteAbove } from "foundation/intervals";
import { ALL_NOTES, INTERVALS } from "foundation/constants";

const _ = require("lodash");

function cardFace(note, interval, specifyIntervalOnCard) {
  return specifyIntervalOnCard ? [note, interval] : [note];
}

function cards({ interval, specifyIntervalOnCard = false }) {
  if (interval === "all") {
    return _.flatMap(
      INTERVALS.map((interval) => {
        return {
          interval: interval,
          specifyIntervalOnCard: true,
        };
      }),
      cards
    );
  }

  return ALL_NOTES.map((note) => {
    const targetNote = noteAbove({ note, interval });

    return {
      front: cardFace(note, interval, specifyIntervalOnCard),
      back: cardFace(targetNote, interval, specifyIntervalOnCard),
    };
  });
}
export { cards };
