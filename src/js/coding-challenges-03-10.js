/* 
  26. Remove Duplicates from Sorted Array

  Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

  Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

  Return k after placing the final result in the first k slots of nums.

  Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

  Custom Judge:

  The judge will test your solution with the following code:

  int[] nums = [...]; // Input array
  int[] expectedNums = [...]; // The expected answer with correct length

  int k = removeDuplicates(nums); // Calls your implementation

  assert k == expectedNums.length;
  for (int i = 0; i < k; i++) {
      assert nums[i] == expectedNums[i];
  }
  If all assertions pass, then your solution will be accepted.

  

  Example 1:

  Input: nums = [1,1,2]
  Output: 2, nums = [1,2,_]
  Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
  It does not matter what you leave beyond the returned k (hence they are underscores).
  Example 2:

  Input: nums = [0,0,1,1,1,2,2,3,3,4]
  Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
  Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
  It does not matter what you leave beyond the returned k (hence they are underscores).
  

  Constraints:

  1 <= nums.length <= 3 * 104
  -100 <= nums[i] <= 100
  nums is sorted in non-decreasing order.

*/

const removeDuplicates = function (nums) {
  // return [...new Set(nums).values()].length;
  // for (let i = 0; i < nums.length; i++) {
  //   [] = []
  // }
  // debugger;
  let prevIdx = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[prevIdx]) {
      prevIdx++;
      nums[prevIdx] = nums[i];
    }
  }

  console.log(nums);

  return prevIdx + 1;
};

const test1Nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const testNums = [0, 1, 2, 3, 4, "|", 2, 2, 3, 3, 4];
const test2Nums = [0, 1, 2, 3, 4, "_", "_", "_", "_", "_"];

let test1 = removeDuplicates(test1Nums); // expects 5
// let test2 = removeDuplicates(test2Nums); // expects 5

console.log(test1, test1Nums);

// console.table({
//   test1: { results: test1, test: test1 === 5 },
//   text2: { results: test2, test: test2 === 5 },
// });
