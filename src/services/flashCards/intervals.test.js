import { cards } from "./intervals.js";
import { SHARP, FLAT } from "../../foundation/constants.js";
const _ = require("lodash");

describe("cards", () => {
  test.each([
    ["m2", { front: ["A"], back: [`B${FLAT}`] }],
    ["M2", { front: ["A"], back: ["B"] }],
    ["m3", { front: ["A"], back: ["C"] }],
    ["M3", { front: ["A"], back: [`C${SHARP}`] }],
    ["P4", { front: ["A"], back: ["D"] }],
    ["+4", { front: ["A"], back: [`D${SHARP}`] }],
    ["o5", { front: ["A"], back: [`E${FLAT}`] }],
    ["P5", { front: ["A"], back: ["E"] }],
    ["+5", { front: ["A"], back: [`E${SHARP}`] }],
    ["m6", { front: ["A"], back: ["F"] }],
    ["M6", { front: ["A"], back: [`F${SHARP}`] }],
    ["o7", { front: ["A"], back: [`G${FLAT}`] }],
    ["m7", { front: ["A"], back: ["G"] }],
    ["M7", { front: ["A"], back: [`G${SHARP}`] }],
    ["all", { front: ["D"], back: [`G${SHARP}`] }],
  ])(".chord(%s, %o)", (interval, expectedCard) => {
    expect(cards({ interval: interval })).toEqual(
      expect.arrayContaining([expectedCard])
    );
  });
});
