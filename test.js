const test = require('tape')
const { boundaries, byMark } = require('./')

test('boundaries', (t) => {
  t.equal(boundaries.length, 17)
  boundaries.forEach((boundary) => {
    t.equal(typeof boundary.boundaryUpper, 'number', 'contains boundaryUpper')
    t.equal(typeof boundary.boundaryLower, 'number', 'contains boundaryLower')
    t.equal(typeof boundary.degreeClassEquivalent, 'string', 'contains degreeClassEquivalent')
    t.equal(typeof boundary.grade, 'string', 'contains grade')
    t.equal(typeof boundary.gradePoint, 'number', 'contains gradePoint')
  })
  t.end()
})

test('byMark', (t) => {
  t.plan(3)
  t.equal(byMark(100).boundaryUpper, 100, 'upper boundary')
  t.equal(byMark(85).boundaryUpper, 89, 'mid boundary')
  t.equal(byMark(80).boundaryUpper, 89, 'upper boundary')
})
