/*
You are given a positive integer target.
Return an array of all arrays of ordered (ascending)
positive integers that sum up to the target.
The arrays can be provided in any order.
Example:
 partitionNumber(2) ->
 [
[1, 1],
[2] ]
 partitionNumber(3) ->
 [
   [1, 1, 1],
   [1, 2],
   [3]
]
The inner arrays must have ascending numbers, but can be provided in any order.
*/

const partitionNumber = (num) => {
  const result = [];
  const helper = (num, subset=[]) => {
    if (num === 0) return;
    result.push([...subset, num])
    helper(num-1, [...subset, 1]);
  }
  helper(num);
  return result;
}

console.log(partitionNumber(4));