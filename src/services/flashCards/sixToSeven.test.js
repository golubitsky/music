import { MINOR, HALF_DIMINISHED_SEVEN } from "foundation/constants";

import { cards } from "services/flashCards/sixToSeven";

const _ = require("lodash");

describe("cards", () => {
  test.each([
    [
      `${MINOR}6`,
      HALF_DIMINISHED_SEVEN,
      {
        front: [`A${HALF_DIMINISHED_SEVEN}`],
        back: [`C${MINOR}6`],
      },
    ],
  ])(".cards(%s, %o)", (abstractSixChord, abstractSevenChord, expectedCard) => {
    expect(cards({ abstractSixChord, abstractSevenChord })).toEqual(
      expect.arrayContaining([expectedCard])
    );
  });
});
