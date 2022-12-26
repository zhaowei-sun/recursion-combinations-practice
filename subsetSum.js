/*
 You are given an array of integers and a target number. Write a function that returns true if there is a subset of the array that sums up to the target and returns false otherwise.
A subset can be any size and the elements do not have to appear consecutively in the array.
Positive, negative, and zero allowed. Some numbers may be duplicated.
subsetSum([3, 7, 4, 2], 5) -> true (3 + 2)
subsetSum([3, 34, 4, 12, 5, 12], 32) -> true (3 + 12 + 5 + 12)
subsetSum([8, 2, 4, 12], 13) -> false
subsetSum([8, -2, 1, -3], 6) -> true (8 + 1 + -3)
subsetSum([7, 2, 3], 0) -> true (a subset can be of size zero)
subsetSum([], 0) -> true
subsetSum([-4], -4) -> true
*/