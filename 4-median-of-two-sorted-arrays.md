# Median of Two Sorted Arrays

There are two sorted arrays*nums1*and*nums2*of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume*nums1*and*nums2*cannot be both empty.
_Example 1:_

```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```

_Example 2:_

```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

_solution:_

```
function findMedianSortedArrays(nums2, nums2) {
  let sumArr = nums.concat(nums2);
  let arrLength = sumArr.length;

  sumArr = sumArr.sort(function(a, b) {
    return a - b;
  });

  if (arrLength % 2 === 1) {
    return sumArr[Math.floor(arrLength / 2)];
  } else {
    return sumArr[arrLength / 2 - 1] + sumArr[arrLength / 2] / 2;
  }
}
```
