// You are given a certain array of positive and negative integers which elements occur only
// once (all of them different from 0), a certain number known as target, t, t ≠ 0, and a number k, k > 0.
//
// You should find the amount of combinations, which numbers are not contiguous elements of the
// given array and which sums (adding up their numbers) are in the range [t - k, t + k] (extremes included)
//
// array = [-4, 2, 1, 6, 4, -3, -1]
// t = 5
// k = 2
// find_comb_noncontig(array, t, k) == 11
// # The combinations are [6], [4], [2, 4], [1, 4], [6, -3], [6, -1], [4, -1], [2, 6, -3], [2, 6, -1], [2, 4, -1], [1, 4, -1]
// # all of their sums are in the range [3, 7]
// It is possible that no combinations may be found fulfilling these constraints.
//
//     array = [-4, 2, 1, 6, 4, -3, -1]
// t = -30
// k = 3
// find_comb_noncontig(array, t, k) == 0
// Enjoy it!!

function findCombNonContig(a,t,k){
    const minSum = t - k;
    const maxSum = t + k;
    const result = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] >= minSum && a[i] <= maxSum) {
            result.push([a[i]])
        }
        if (i >= 2) {
            let subArr = a.slice(0, i+1);

            let arr = [];
            for ( let j = 0; j < subArr.length - 2; j++) {
                let lastItem = subArr[subArr.length-1];

                arr.push([subArr[j], lastItem]);
            }

            arr = arr.filter(item => {
                let sum = item.reduce((acc,curr) => acc + curr)

                if (sum >= minSum && sum <= maxSum) {
                    return item
                }
            } )

            if (arr.length) result.push(arr)
        }

        if (i >= 4) {
            let subArr = a.slice(0, i+1);
            console.log('subArr', subArr)
            let arr = [];

            for (let i = subArr.length; i >= 0; i--) {
              let count = i;

            }
        }
    }
    return result.flat();


}

console.log(findCombNonContig([-4, 2, 1, 6, 4, -3, -1], 5, 2)); // 11
// [6], [4], [2, 4], [1, 4], [6, -3], [6, -1], [4, -1], [2, 6, -3], [2, 6, -1], [2, 4, -1], [1, 4, -1]