/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti <= endi <= 10^4
*/

/**
 * Runtime: 68 ms, faster than 99.90% of JavaScript online submissions for Merge Intervals.
 * Memory Usage: 40.6 MB, less than 63.24% of JavaScript online submissions for Merge Intervals.
 *
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let interims = [...intervals];
  // O(n*log(n))
  interims.sort((a, b) => a[0] - b[0]);
  let current = interims.shift();
  const result = [];
  // O(n)
  while (interims.length > 0) {
    const next = interims[0];
    if (next[0] > current[1]) {
      result.push([...current]);
      current = interims.shift();
    } else {
      current[1] = Math.max(current[1], next[1]);
      interims.shift();
    }
  }
  if (current) result.push(current);
  return result;
};
