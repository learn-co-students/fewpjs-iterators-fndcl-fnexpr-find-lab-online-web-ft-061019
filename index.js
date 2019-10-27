const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(team){
  let yearResult = team.find(function(result) {
    return result.result == "W"
   })
   if (yearResult){
     return yearResult.year
   }
}
