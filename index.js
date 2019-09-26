

function superbowlWin(record) {
  let obj = record.find( ({ result }) => result === 'W')
  return obj ? obj.year : undefined
  //return obj.year
}


