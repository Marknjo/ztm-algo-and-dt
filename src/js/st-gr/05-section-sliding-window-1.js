/* 
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. 

EXAMPLES: 
  maxSubarraySum([ 1, 2, 5, 2, 8, 1, 5 ], 2) // 10 
  maxSubarraySum([1,2,5,2,8,1,5],4) // 17 
  maxSubarraySum([4,2,1,6],1)// 6 
  maxSubarraySum([4,2,1,6,2],4)// 13 
  maxSubarraySum([],4)// null 

*/

/// TEST DATA
const dataT1Inp1 = [1, 2, 5, 2, 8, 1, 5],
  dataT1Inp2 = 2;

const dataT2Inp1 = [1, 2, 5, 2, 8, 1, 5],
  dataT2Inp2 = 4;

const dataT3Inp1 = [4, 2, 1, 6],
  dataT3Inp2 = 1;

const dataT4Inp1 = [4, 2, 1, 6, 2],
  dataT4Inp2 = 4;

const dataT5Inp1 = [],
  dataT5Inp2 = 4;

/// FUNCTION

function maxSubarraySum(arr, n) {
  if (arr.length === 0) return null;

  let maxSum = 0;
  let nextSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i === n) break;
    maxSum += arr[i];
  }

  nextSum = maxSum;
  for (let j = n; j < arr.length; j++) {
    nextSum = nextSum - arr[j - n] + arr[j];
    maxSum = Math.max(nextSum, maxSum);
  }

  return maxSum;
}

/// TEST RESULTS
const resultT1V1 = maxSubarraySum(dataT1Inp1, dataT1Inp2);
const resultT2V1 = maxSubarraySum(dataT2Inp1, dataT2Inp2);
const resultT3V1 = maxSubarraySum(dataT3Inp1, dataT3Inp2);
const resultT4V1 = maxSubarraySum(dataT4Inp1, dataT4Inp2);
const resultT5V1 = maxSubarraySum(dataT5Inp1, dataT5Inp2);

console.table({
  resultT1V1,
  resultT2V1,
  resultT3V1,
  resultT4V1,
  resultT5V1,
});
