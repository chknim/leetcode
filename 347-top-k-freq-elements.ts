/**
  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
  Example 1:
  Input: nums = [1,1,1,2,2,3], k = 2
  Output: [1,2]

  Example 2:
  Input: nums = [1], k = 1
  Output: [1]
  
  Constraints:

  1 <= nums.length <= 105
  k is in the range [1, the number of unique elements in the array].
  It is guaranteed that the answer is unique.
  

  Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
**/

/**
 * Resolution: Testing speed of not using data structure such as Heap or priority queue 
 * 
 * Result Option #1
 * Runtime: 88 ms, faster than 82.17% of JavaScript online submissions for Top K Frequent Elements.
 * Memory Usage: 41.4 MB, less than 94.25% of JavaScript online submissions for Top K Frequent Elements.
 *
 * Result Option #2
 * Runtime: 76 ms, faster than 98.61% of JavaScript online submissions for Top K Frequent Elements.
 * Memory Usage: 42.2 MB, less than 52.85% of JavaScript online submissions for Top K Frequent Elements.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const hashValueCount = {};
  // Track frequency O(n)
  nums.forEach(num => {
    if (hashValueCount[num]) hashValueCount[num]++;
    else hashValueCount[num] = 1;
  });
  // Turn hash to list O(m); m <= n
  const freqPairList = Object.keys(hashValueCount).map(key => [key, hashValueCount[key]]);
  // Return top K optimized O(m); m <= n
  if (freqPairList.length <= k) {
    return freqPairList.map(pair => pair[0]);
  }
  // Return top K O(m*log(m)) + O(k); m <= n & k < n
  freqPairList.sort((a, b) => {
    // Option #1
    const aFreq = a[1];
    const bFreq = b[1];
    if (aFreq === bFreq) {
      return 0;
    } else {
      return aFreq < bFreq ? 1 : -1;
    }
    // Option #2
    // return b[1] - a[1];
  });
  return freqPairList.slice(0, k).map(pair => pair[0]);
};
