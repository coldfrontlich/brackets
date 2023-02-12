module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  stack.push(str.charAt(0));
  for (let i = 1; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str.charAt(i) === bracketsConfig[j][1] && stack[stack.length - 1] === bracketsConfig[j][0]) {
        stack.pop();
        break;
      }
      if (str.charAt(i) === bracketsConfig[j][0] || str.charAt(i) === bracketsConfig[j][1]) {
        stack.push(str.charAt(i));
        break;
      } 
    }
  }
  return (stack.length === 0);
} 
