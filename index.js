const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayOfObjects) {
  let apple = arrayOfObjects.find(function(arrayOfObjects) {
    return arrayOfObjects.result === "W"
  })
  if (apple) {
    return apple.year
  }
  
}
