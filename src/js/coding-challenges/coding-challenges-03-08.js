const productExceptSelf = function (nums) {
  // if (nums.length <= 2) {
  //   return nums;
  // }
  /// Option 1 - Slow
  // const map = new Map();
  // const numsLen = nums.length - 1;
  // for (let i = 0; i <= numsLen; i++) {
  //   const modifiedIndex = `${nums[i]}-${i}`;
  //   map.set(
  //     modifiedIndex,
  //     nums.slice(0, i).reduce((acc, value) => acc * value, 1) *
  //       nums.slice(i + 1).reduce((acc, value) => acc * value, 1)
  //   );
  // }
  // return [...map.values()];

  // let prodColl = [];

  // nums.reduceRight((acc, value, i) => {
  //   prodColl[i] = acc;
  //   return acc * value;
  // }, 1);

  // nums.reduce((acc, value, i) => {
  //   prodColl[i] *= acc;
  //   return acc * value;
  // }, 1);

  let prodColl = [];

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    console.log(i);

    prodColl[i] = prefix;
    prefix *= nums[i];
  }

  let postFix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    prodColl[i] *= postFix;
    postFix *= nums[i];
  }

  return prodColl;
};

// console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// console.log(productExceptSelf([0, 4, 0]));
// console.log(productExceptSelf([0, 1]));

let reverseVowels = function (s) {
  if (s === "" || s.length === 1) {
    return s;
  }

  let foundVowels = [];
  let foundVowelPos = [];
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let strs = [...s];

  /// Collect vowels
  strs.forEach((str, i) => {
    // if (vowels.has(str.toLowerCase())) { to lower is slower a little
    if (vowels.has(str)) {
      console.log("Found");
      foundVowels.push(str);
      foundVowelPos.push(i);
    }
  });

  /// Reverse
  foundVowels.reverse();

  /// Swap vowels
  let vowelLen = foundVowels.length - 1;
  for (let i = vowelLen; i >= 0; i--) {
    strs[foundVowelPos[i]] = foundVowels[i];
  }

  return strs.join("");

  /// Faster than my solution
  //  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  //     const arr = s.split('')
  //     let L = 0;
  //     let R = arr.length-1;
  //     while(R>L){
  //         if(!set.has(arr[L])) {
  //             L++
  //         }
  //         if(!set.has(arr[R])){
  //             R--
  //         }
  //         if(set.has(arr[L]) && set.has(arr[R])){
  //             let temp = arr[L]
  //             arr[L] = arr[R]
  //             arr[R] = temp;
  //             L++;
  //             R --;
  //         }
  //     }
  //     return arr.join('')
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
