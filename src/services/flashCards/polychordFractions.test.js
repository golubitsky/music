import { cards } from "./polychordFractions.js";

describe("cards", () => {
  test("contains at least one card", () => {
    expect(cards()[0]).toEqual(
      expect.objectContaining({
        front: expect.any(Array),
        back: expect.any(Array),
      })
    );
  });
});
