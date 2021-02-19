import { chord } from "../../foundation/chordParser.js";
import {
  ALL_NOTES_FOR_CHORD_PROGRESSIONS,
  SEVEN,
  MAJOR_SEVEN,
  HALF_DIMINISHED_SEVEN,
} from "../../foundation/constants.js";

const _ = require("lodash");

const NAMED_TURNAROUNDS = {
  Stella: [
    `[ii${HALF_DIMINISHED_SEVEN} V${SEVEN}]/iii`,
    `[ii${HALF_DIMINISHED_SEVEN} V${SEVEN}]/ii`,
    `ii${HALF_DIMINISHED_SEVEN}`,
    `V${SEVEN}`,
    `I${MAJOR_SEVEN}`,
  ],
};

function progressionInKey({ key, abstractChordProgression }) {
  const result = abstractChordProgression.map((abstractChord) => {
    return chord({ abstractChord, key });
  });

  // Hack to better display longer progressions on multiple lines.
  const eachChordSeparately = result.join(" ").split(" ");
  return _.chunk(eachChordSeparately, 4).map((row) => row.join(" "));
}

function front({ key, abstractChordProgression }) {
  const named = _.invert(NAMED_TURNAROUNDS)[abstractChordProgression];
  return named ? [key, named] : [key];
}

function cards({ abstractChordProgression }) {
  return ALL_NOTES_FOR_CHORD_PROGRESSIONS.map((key) => {
    return {
      front: front({ key, abstractChordProgression }),
      back: progressionInKey({ key, abstractChordProgression }),
    };
  });
}

export { cards, NAMED_TURNAROUNDS };
