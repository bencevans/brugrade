# brugrade [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard) [![Travis](https://img.shields.io/travis/bencevans/brugrade.svg?style=flat-square)](https://travis-ci.org/bencevans/brugrade) [![Coveralls](https://img.shields.io/coveralls/bencevans/brugrade.svg?style=flat-square)](https://coveralls.io/github/bencevans/brugrade)

> Brunel's undergraduate marking/grade bounds dataset and byMark(grade) search.

## Install

    $ npm install --save brugrade

## Usage

```js
const { boundaries, byMark } = require('brugrade')

boundaries
// =>
  // [ { boundaryLower: 90,
  //   boundaryUpper: 100,
  //   degreeClassEquivalent: '1',
  //   grade: 'A++',
  //   gradePoint: 17 },
  // { boundaryLower: 80,
  //   boundaryUpper: 89,
  //   degreeClassEquivalent: '1',
  //   grade: 'A+',
  //   gradePoint: 16 },
  // { boundaryLower: 73,
  //   boundaryUpper: 79,
  //   degreeClassEquivalent: '1',
  //   grade: 'A',
  //   gradePoint: 15 },
  //   ...

byMark(87) // 87 being an assessment mark (percentage)
// =>
  // { boundaryLower: 80,
  // boundaryUpper: 89,
  // degreeClassEquivalent: '1',
  // grade: 'A+',
  // gradePoint: 16 }


```

## Testing

```sh
# Test
$ npm test

# Lint
standard
```

## Related

* [(data src) New Regulations Undergraduate Honours Degree Programmes](https://www.brunel.ac.uk/__data/assets/pdf_file/0005/116834/30-New-Regulations-Undergraduate-Honours-Degree-Programmes.pdf)
* [BruTime - node module for scraping Brunel's Timetabling portal](https://github.com/bencevans/brutime)

## Licence

MIT © [Ben Evans](http://bensbit.co.uk)
