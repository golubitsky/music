import { cards } from "./modes.js";
import { MAJOR, MINOR, SHARP, FLAT, MAJOR_SEVEN } from "foundation/constants.js";

describe("cards", () => {
  test.each([
    [
      MAJOR,
      {
        front: `ii`,
        back: `Dorian`,
        backAdditional: `${FLAT}3, ${FLAT}7`,
      },
    ],
    [
      `mel. ${MINOR}`,
      {
        front: `III${MAJOR_SEVEN}${SHARP}5`,
        back: "Lydian augmented",
        backAdditional: `${SHARP}4, ${SHARP}5`,
      },
    ],
  ])(".chord(%s, %o)", (chordQuality, expectedCard) => {
    expect(cards({ subType: chordQuality })).toEqual(
      expect.arrayContaining([expectedCard])
    );
  });
});
