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
