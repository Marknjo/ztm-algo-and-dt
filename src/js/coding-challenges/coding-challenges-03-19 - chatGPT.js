function validParentheses(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (s[i] === ")" && last !== "(") return false;
      if (s[i] === "}" && last !== "{") return false;
      if (s[i] === "]" && last !== "[") return false;
    }
  }
  return stack.length === 0;
}
