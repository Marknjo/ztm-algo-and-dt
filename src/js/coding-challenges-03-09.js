var lengthOfLongestSubstring = function (s) {
  if (s === "") {
    return 0;
  }

  if (s.length === 1) {
    return 1;
  }

  // My Solution - Slowest (M - 15.80%(49.7mb), CPU - 22.93% (262))
  // const subStrs = new Map();
  // let nextStr = "";
  // let prevStr = "";
  // let prevSeenChars = new Set();

  // [...s].forEach((str, i) => {
  //   prevSeenChars.add(str);

  //   nextStr = s[i + 1];
  //   prevStr = s[i - 1];

  //   if (nextStr) {
  //     if (prevSeenChars.has(nextStr)) {
  //       let prevChars = [...prevSeenChars.values()];

  //       // subStrs.set(i, prevChars);
  //       subStrs.set(prevChars.length, prevChars);
  //       prevSeenChars.clear();

  //       // console.log(prevChars);

  //       /// include previous char in the seen chars after reset
  //       const foundPrevChars = prevChars.indexOf(nextStr);

  //       if (foundPrevChars > -1 && str !== nextStr) {
  //         let prevCharsValues = prevChars.slice(foundPrevChars + 1, i + 1);

  //         console.log("entered", prevChars, foundPrevChars, prevCharsValues);
  //         if (prevCharsValues.length > 1) {
  //           [...prevCharsValues].forEach((c) => prevSeenChars.add(c));
  //         } else {
  //           prevSeenChars.add(prevCharsValues[0]);
  //         }
  //       }
  //     }
  //   } else {
  //     let prevChars = [...prevSeenChars.values()];
  //     subStrs.set(prevChars.length, prevChars);
  //   }
  // });

  // console.log(subStrs);

  // const subStrsValues = [...subStrs.keys()];

  // if (subStrsValues.length === 1) {
  //   return subStrsValues[0];
  // }

  // return Math.max(...subStrsValues);

  /// Solution Best Memory Management
  /// M - 94.43% (44.7mb) CPU - 65.65% (93ms)
  // let maxLength = 0;
  // let start = 0;
  // const map = new Map();

  // for (let i = 0; i < s.length; i++) {
  //   const currentChar = s.charAt(i);

  //   if (map.has(currentChar) && map.get(currentChar) >= start) {
  //     // If the current character is already in the map and its index is after the current start index,
  //     // move the start index to the character's index + 1
  //     start = map.get(currentChar) + 1;
  //   } else {
  //     // If the current character is not in the map or its index is before the current start index,
  //     // update the maximum length if necessary and add the character to the map
  //     maxLength = Math.max(maxLength, i - start + 1);
  //   }

  //   map.set(currentChar, i);
  // }

  // return maxLength;

  // Best CPU
  // CPU -> 93.93% (77ms), M -> 63.76% 47mb
  debugger;
  let pred = "";
  let curr = "";
  for (let a of s) {
    let index = curr.indexOf(a);
    if (index !== -1) {
      if (curr.length > pred.length) {
        pred = curr;
      }
    }
    curr = curr.slice(index + 1) + a;
  }
  return curr.length > pred.length ? curr.length : pred.length;
};

console.log(lengthOfLongestSubstring("ggububgvfk"));
// console.log(lengthOfLongestSubstring("loddktdji"));
// console.log(lengthOfLongestSubstring("anviaj"));
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring(""));
// console.log(lengthOfLongestSubstring("a"));
