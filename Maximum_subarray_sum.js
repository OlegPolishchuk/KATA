// The maximum sum subarray problem consists in finding the maximum sum of a
// contiguous subsequence in an array or list of integers:
//
//     maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
// If the list is made up of only negative numbers, return 0 instead.
//
//     Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
//


const maxSequence = (arr) => {
    let len = arr.length;
    if (len === 0) return 0;
    if (len === 1) return arr[0] > 0 ? arr[0] : 0;

    let dp = arr[0] > 0 ? arr[0] : 0;
    let max = arr[0] > 0 ? arr[0] : 0;


    for (let i = 1; i < len; i++) {
        if (arr[i] > 0) {
            dp += arr[i]
        } else {
            max = max > dp ? max : dp;
            dp = dp + arr[i] > 0 ? dp + arr[i] : 0
        }
    }

    return max = max > dp ? max : dp
}