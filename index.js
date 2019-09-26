const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = (record) => {
  const result = record.find(record => record.result === "W")
  debugger
  if (result) {
    return result.year  
  } else {
    return result
  }
}

