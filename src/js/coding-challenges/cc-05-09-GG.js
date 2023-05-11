/*
Reverse array in groups
BasicAccuracy: 37.48%Submissions: 266K+Points: 1
Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.

Note: If at any instance, there are no more subarrays of size greater than or equal to K, then reverse the last subarray (irrespective of its size). You shouldn't return any array, modify the given array in-place.

Example 1:

Input:
  N = 5, K = 3
  arr[] = {1,2,3,4,5}
  Output: 3 2 1 5 4
  Explanation: First group consists of elements
  1, 2, 3. Second group consists of 4,5.
  

Example 2:

Input:
  N = 4, K = 3
  arr[] = {5,6,8,9}
  Output: 8 6 5 9
 

Your Task:
You don't need to read input or print anything. The task is to complete the function reverseInGroups() which takes the array, N and K as input parameters and modifies the array in-place. 

 

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

 

Constraints:
  1 ≤ N, K ≤ 107
  1 ≤ A[i] ≤ 1018

*/

function spiralMatrix(n) {
  const matrix = [...n];
  const arr = [];

  while (matrix.length) {
    arr.push(
      ...matrix.shift(),
      ...matrix.map((a) => a.pop()),
      ...(matrix.pop() || []).reverse(),
      ...matrix.map((a) => a.shift()).reverse()
    );
  }
  return arr;
}

const data = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const data2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const data3 = [
  [1, 2],
  [3, 4],
];

const data4 = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 10, 11],
  [13, 14, 15],
];

// const spiral = spiralMatrix(data);
// const spiral2 = spiralMatrix(data2);
// const spiral3 = spiralMatrix(data3);

// console.log(spiral);
// console.log(spiral2);
// console.log(spiral3);

function spiralMatrixWithDirection(matrix) {
  console.log({ matrix });

  const result = [];

  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1; // how wide is the matrix
  let bottom = matrix.length - 1; // how deep is the matrix
  let direction = "right"; // move the cursor

  while (left <= right && top <= bottom) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }

      top++;
      direction = "down";
    }
    if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }

      right--;
      direction = "left";
    }
    if (direction === "left") {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = "up";
    }
    if (direction === "up") {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = "right";
    }
  }

  return result;
}

const spiralV2Data = spiralMatrixWithDirection(data);
const spiralV2Data2 = spiralMatrixWithDirection(data2);
const spiralV2Data3 = spiralMatrixWithDirection(data3);
const spiralV2Data4 = spiralMatrixWithDirection(data4);

console.log(spiralV2Data);
console.log(spiralV2Data2);
console.log(spiralV2Data3);
console.log(spiralV2Data4);
