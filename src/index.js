module.exports = function check(str, bracketsConfig) {
  if(typeof str !== 'string') {
    return false;
  }
  let arr = str.split('');
  let stack = [];
  let openingBracket = [];
  let closingBracket = [];
  let openingBracketIndex;
  let closingBracketIndex;

  bracketsConfig.forEach(function (item) {
    openingBracket.push(item[0]);
    closingBracket.push(item[1]);
  });

  for(let i = 0; i < arr.length; i++) {
    openingBracketIndex = openingBracket.indexOf(arr[i]);
    closingBracketIndex = closingBracket.indexOf(arr[i]);
    if(openingBracketIndex !== -1 && closingBracketIndex === -1) {
      stack.push(openingBracketIndex);
      continue;
    }
    if(openingBracketIndex !== -1 && closingBracketIndex !== -1 && stack.indexOf(openingBracketIndex) === -1) {
      stack.push(openingBracketIndex);
      continue;
    }
    if(closingBracketIndex !== -1) {
      openingBracketIndex = stack.pop();
      if(closingBracketIndex !== openingBracketIndex) {
        return false;
      }
    }
  }
  return stack.length <= 0;
}
