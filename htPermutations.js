/*
Let's say you flipped a coin multiple times, resulting in a given number of heads and tails. Return an array of strings representing all possible histories given those numbers of heads and tails. The strings can be in any order.
Example:
htPermutations(2, 1) ->
 [
   'HHT',
   'HTH'
   'THH'
]
htPermutations(0, 3) ->
 [
'TTT' ]
*/

const htPermutations = (h, t) => {
  const result = [];
  const helper = (h, t, str='') => {
    if (h < 0 || t < 0) return;
    if (h === 0 && t === 0) return result.push(str);
    helper(h-1, t, str+'H');
    helper(h, t-1, str+'T');
  }
  helper(h, t);
  return result;
}
