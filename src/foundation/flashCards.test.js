const _ = require("lodash");

import { cards } from "./flashCards.js";

describe("cards", () => {
  test("cards have a front and back sides", () => {
    let actual = _.sample(cards());

    expect(actual).toEqual(
      expect.objectContaining({
        front: expect.any(String),
        back: expect.any(String),
      })
    );
  });
});
