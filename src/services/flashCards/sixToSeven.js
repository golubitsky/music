import { noteAbove } from "foundation/intervals";
import { ALL_NOTES, MINOR, HALF_DIMINISHED_SEVEN } from "foundation/constants";

function card({ key, abstractSixChord, abstractSevenChord }) {
  const note = key;
  const other = noteAbove({ note: key, interval: "m3" });

  return {
    front: [`${note}${abstractSevenChord}`],
    back: [`${other}${abstractSixChord}`],
  };
}
function cards({ abstractSixChord, abstractSevenChord }) {
  if (
    abstractSixChord === `${MINOR}6` &&
    abstractSevenChord === HALF_DIMINISHED_SEVEN
  ) {
    return ALL_NOTES.map((key) => {
      return card({ key, abstractSixChord, abstractSevenChord });
    });
  }

  throw new Error(
    `not implemented for abstractSixChord=${abstractSixChord} abstractSevenChord=${abstractSevenChord}`
  );
}
export { cards };
