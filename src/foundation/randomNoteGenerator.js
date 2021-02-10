import { WHITE_KEYS, FLATS, SHARPS } from "foundation/constants";

const _ = require("lodash");

function randomNotes(accidental) {
  let black_keys;
  if (accidental === "b") {
    black_keys = FLATS;
  } else if (accidental === "#") {
    black_keys = SHARPS;
  } else {
    black_keys = _.sample([FLATS, SHARPS]);
  }
  return _.shuffle(WHITE_KEYS.concat(black_keys));
}

export { randomNotes };
