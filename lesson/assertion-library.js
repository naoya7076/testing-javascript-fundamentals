const {sum, subtract} = require('../math')

let result, expected

function expect(actual) {
  return {
    toBe(expected){
      if(actual !== expected){
        throw new Error(`${result} is not equal to ${expected}`)
      }
    },
    toEqual(expected){},
    toBeGreaterThan(expected){},
  }
}

result = sum(3,7)
expected = 10
expect(result).toBe(expected)

result = subtract(3,7)
expected = -4
expect(result).toBe(expected)