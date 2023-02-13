module.exports = function check(str, bracketsConfig) {
  let bracketsCombinations = [];
  let stack = str;
  if (str.length % 2) {
    return false;
  } else {
    let count = 0;
    bracketsCombinations = bracketsConfig.map((element) => element.join(''));
    bypass();
    function bypass() {
      for (let combination of bracketsCombinations) {
        for (let i = 0; i < str.length; i += 2) {
          if (stack.includes(combination)) {
            stack = stack.replace(combination, '');
          } else {
            break;
          }
        }
      }
      count++;
      if (count <= bracketsCombinations.length && stack.length > 0) {
        bypass();
      }
    }
    return stack.length === 0;
  }
}
