import { chord } from "../../foundation/chordParser.js";
import { ALL_NOTES_FOR_CHORD_PROGRESSIONS } from "../../foundation/constants.js";

function progressionInKey({ key, abstractChordProgression }) {
  return abstractChordProgression.map((abstractChord) => {
    return chord({ abstractChord, key });
  });
}

function cards({ abstractChordProgression }) {
  return ALL_NOTES_FOR_CHORD_PROGRESSIONS.map((key) => {
    return {
      front: [key],
      back: [progressionInKey({ key, abstractChordProgression }).join(" ")],
    };
  });
}

export { cards };
