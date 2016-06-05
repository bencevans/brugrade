const fs = require('fs')
const path = require('path')

/**
 * Read and parse a grade-boundaries.txt file
 * @return {Array} Array of objects containing information about each boundary
 */
function readBoundaries () {
  let boundaries = []

  // Read grade-boundaries file
  let txt = fs.readFileSync(path.resolve(__dirname, './grade-boundaries.txt'), 'utf8')

  // Parse by line
  txt.split('\n').forEach((txtLine) => {
    let match = txtLine.match(/([0-9]{1,3})-([0-9]{1,3}) ((?:[0-9]\.?[0-9]?)|(?:Fail)) ([A-Z][-+]*) ([0-9]+)/)
    if (!match) { return }

    let boundary = {
      boundaryLower: parseInt(match[1], 10),
      boundaryUpper: parseInt(match[2], 10),
      degreeClassEquivalent: match[3],
      grade: match[4],
      gradePoint: parseInt(match[5], 10)
    }

    boundaries.push(boundary)
  })

  return boundaries
}

const boundaries = readBoundaries()

function byMark (mark) {
  return boundaries.find((boundary) => {
    let { boundaryLower, boundaryUpper } = boundary

    if (mark >= boundaryLower && mark <= boundaryUpper) {
      console.log('woo')
      return boundary
    }
  })
}

module.exports = {
  boundaries, byMark
}
