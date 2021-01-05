![Build and Deploy](https://github.com/golubitsky/music/workflows/Build%20and%20Deploy/badge.svg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Develop

```sh
npm start
```

Live reload on save is enabled: http://localhost:3000/music

## Test

```sh
npm test
```

## Deploy

This occurs automatically on push to `master`: https://github.com/golubitsky/music/actions

```sh
npm run deploy
```

App is live at https://golubitsky.github.io/music/

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
- [ ] Flashcards for intervals
  - [ ] Ascending
  - [ ] Descending
  - [ ] Thirds and Sevenths
    - [x] △, m7, 7
    - [ ] o
    - [ ] ø — might not be necessary, 3 and 7 are same as for m7.
- [ ] Flashcards UI enhancements.
  - [ ] Indicate current deck (perhaps on card).
  - [ ] Front/Back is a toggle (relevant after multiple types of flashcards).
  - [ ] Optimize button placement for mobile.
  - [ ] Change behavior of "tap on card" to: 1st tap: flip card; 2nd tap: show random card.
- [ ] Random rhythms.

### Technical

- [x] I wouldn’t write anything serious in JavaScript without https://lodash.com/, which includes such niceties as _.shuffle, _.sum, and \_.cloneDeep. Alternative libraries such as https://ramdajs.com/ can serve this purpose too.
- [x] For your prototype, CSS Grid looks more appropriate than Flexbox. It has been safe to use in production for at least a year: https://caniuse.com/css-grid It has more properties to keep track of than Flexbox, but https://grid.layoutit.com/ makes them trivial to keep straight. After you learn what terms like “gap” and fr mean, I think there’s no need to hand-write the CSS for your grids; that tool can do it more easily.
- [x] CSS: how to use CSS Grid (like 4 columns by 3 rows) to fill parent container horizontally and vertically?
- [ ] CSS: how to set font-size based on parent container size?
- [x] Move shuffle logic out of UI
- [x] Unskip interval tests.
- [ ] Flashcards: export constants, not functions.
- [ ] Flashcards: move deck definitions out of UI.
