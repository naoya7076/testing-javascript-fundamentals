const {sum, subtract} = require('../math')

let result, expected

result = sum(3,7)
expected = 10

if(result !== expected){
  throw new Error(`${result} is not equal to ${expected}`)
} 

result = subtract(3,7)
expected = -4
if(result !== expected){
  throw new Error(`${result} is not equal to ${expected}`)
} 

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