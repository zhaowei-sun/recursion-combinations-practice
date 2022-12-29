/*
Given an array of distinct integers, return all possible subsets.
Note: The solution set must not contain duplicate subsets. Order does not matter.
Example:
Input: [1,7,4]
Output:
[
 [ 1, 7, 4 ],
 [ 1, 7 ],
 [ 1, 4 ],
 [ 1 ],
 [ 7, 4 ],
 [ 7 ],
 [ 4 ],
 []
]
*/

const allSubsets = (arr) => {
    const result = [];
    const helper = (arr, subset = []) => {
        if (!arr.length) return result.push(subset);
        helper(arr.slice(1), [...subset, arr[0]]);
        helper(arr.slice(1), [...subset]);
    }
    helper(arr);
    return result;
}

//TEST
//console.log(allSubsets([1, 7, 4, 8]));