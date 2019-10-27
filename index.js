const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(team){
  let result = team.find(function(result) {
    return result.result == "W"
   })
   if (result){
     return result.year
   }
}
