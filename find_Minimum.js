// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
//
//     [4,5,6,7,0,1,2] if it was rotated 4 times.
//     [0,1,2,4,5,6,7] if it was rotated 7 times.
//     Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
//
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
//
//     You must write an algorithm that runs in O(log n) time.
const findMin = nums => {
    let left = 0;
    let right = nums.length;

    if (nums.length === 1) return nums[0];
    if (nums[0] < nums[1] && nums[0] < nums[nums.length-1]) return nums[0];

    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        if ((nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]) || (nums[mid] < nums[mid - 1] && nums[mid] < nums[0])) {
            return nums[mid]
        }
        if (nums[mid] > nums[nums.length -1]) {
            left = mid;
        }
        else {
            right = mid;
        }
    }
    return left;
};