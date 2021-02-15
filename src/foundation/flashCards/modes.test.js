import { cards } from "./modes.js";
import { MAJOR, MINOR, SHARP, FLAT, SEVEN, MAJOR_SEVEN } from "foundation/constants.js";

describe("cards", () => {
  test.each([
    [
      MAJOR,
      {
        front: "II",
        back: `ii${SEVEN}`,
        backAdditional: ["Dorian", `${FLAT}3, ${FLAT}7`],
      },
    ],
    [
      `mel. ${MINOR}`,
      {
        front: "III",
        back: `${MAJOR_SEVEN}${SHARP}5`,
        backAdditional: ["Lydian augmented", `${SHARP}4, ${SHARP}5`],
      },
    ],
  ])(".chord(%s, %o)", (chordQuality, expectedCard) => {
    expect(cards({ subType: chordQuality })).toEqual(
      expect.arrayContaining([expectedCard])
    );
  });
});
