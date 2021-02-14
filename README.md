![Build and Deploy](https://github.com/golubitsky/music/workflows/Build%20and%20Deploy/badge.svg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Develop

```sh
npm start
```

App is [live](http://localhost:3000/music) and reload on save is enabled.

## Test

```sh
npm test
```

## Deploy

This occurs [automatically](https://github.com/golubitsky/music/actions) on push to `master`.

```sh
npm run deploy
```

App is [live](https://golubitsky.github.io/music/).

## TODO

### Features

- [x] Display all 12 notes in random order.
  - [x] Sometimes with flats.
  - [x] Sometimes with sharps.
- [x] Flashcards for polychord fractions.
  - [x] Cards probably shouldn't be duplicated for front/back. Consumer should flip them.
- [ ] Flashcards for chord -> mode
  - [ ] Major
  - [ ] Melodic minor
  - [ ] Harmonic minor
  - [ ] Natural minor
- [ ] Flashcards for scale degree -> mode.
- [ ] Flashcards for [flatted scale degrees](https://spinditty.com/learning/Memorizing-the-Musical-Modes) -> mode.
- [ ] Flashcards for turnarounds (e.g. C A D G) and/or cool progressions.
  - [x] ii V⁷ [ii V⁷]/ii (d G⁷ e A⁷)
- [ ] Flashcards for intervals
  - [ ] Ascending
  - [ ] Descending
  - [ ] Ear training. Tones. Use [this](https://github.com/nbrosowsky/tonejs-instruments)?
  - [ ] Thirds and Sevenths
    - [x] △, m7, 7
    - [ ] o
    - [ ] ø —— might not be necessary, 3 and 7 are same as for m7.
  - [x] 7th chords: all 4 notes.
    - [x] Per quality.
    - [x] All qualities.
    - [x] Shuffled notes.
  - [ ] Triads (having realized that there are 24 permutations of each 7th chord!)
    - [x] Per quality (M, m, dim, aug).
    - [x] All qualities.
    - [ ] Shuffled notes.
- [ ] Flashcards UI enhancements.
  - [x] Indicate current deck (perhaps on card).
  - [x] Front/Back is a toggle (relevant after multiple types of flashcards).
  - [ ] Optimize button placement for mobile.
  - [x] Change behavior of "tap on card" to: 1st tap: flip card; 2nd tap: show random card.
  - [x] Rows of buttons.
  - [ ] Implement DisplayNames.
- [ ] Random rhythms.
- [x] Flash Cards: separate sub-screens per deckType.
  - [x] Main menu (i.e. existing FlashCards screen) to list only deckTypes.
  - [x] Each deckType has its own screen and has buttons for its decks + options.

### Technical

- [x] I wouldn’t write anything serious in JavaScript without https://lodash.com/, which includes such niceties as _.shuffle, _.sum, and \_.cloneDeep. Alternative libraries such as https://ramdajs.com/ can serve this purpose too.
- [x] For your prototype, CSS Grid looks more appropriate than Flexbox. It has been safe to use in production for at least a year: https://caniuse.com/css-grid It has more properties to keep track of than Flexbox, but https://grid.layoutit.com/ makes them trivial to keep straight. After you learn what terms like “gap” and fr mean, I think there’s no need to hand-write the CSS for your grids; that tool can do it more easily.
- [x] CSS: how to use CSS Grid (like 4 columns by 3 rows) to fill parent container horizontally and vertically?
- [ ] CSS: how to set font-size based on parent container size?
- [x] Move shuffle logic out of UI
- [x] Unskip interval tests.
- [ ] Flashcards
  - [x] DeckSelection React Component. Does this require state management? (no)
  - [ ] Export constants, not functions.
  - [x] Move deck definitions out of UI.
  - [x] Do not export DECKS (solution was to remove DECKS and rename AVAILABLE_DECKS -> DECKS).
  - [ ] Use deck.displayName to make prettier UI.
  - [ ] Clean up deck selection logic in the UI (abstract more).
- [ ] Seems like layers is the way to go: foundation, services (TODO), screens.
- [x] Use consistent flat symbol throughout codebase (polychordFractions seem to have the symbol, others use letter "b").
- [x] Constantize flat, sharp symbols.
- [ ] Constantize intervals. Possibly chord symbols/intervals should be in separate constants.
- [ ] Refactor chords.js tests to be more data-driven/DRY.
- [ ] notesInOneChord should be in its own module.
- [ ] Omitting "M" from Major chords could be DRYer.
- [x] Prototype state management from child screen to parent screen (use one of the existing toggles).
- [x] Use absolute imports using `jsconfig.json` to make it easier to move files around.
- [ ] Prototype end-to-end testing with [cypress](https://www.cypress.io/).
