/*
  Find mediam between two sorted arrays
*/

function findMedianSortedArrays (nums1, nums2) {
  let union = [];

  let n1Pointer = 0;
  let n2Pointer = 0;

  while (n1Pointer < nums1.length && n2Pointer < nums2.length) {
    if (nums1[n1Pointer] > nums2[n2Pointer]) {
      union.push(nums1[n1Pointer]);
      nums1++;
    } else {
      union.push(nums2[n2Pointer]);
      nums2++;
    }
  }

  while (n1Pointer < nums1.length) {
    union.push(nums1[n1Pointer]);
    nums1++;
  }

  while (n1Pointer < nums1.length) {
    union.push(nums2[n2Pointer]);
    nums2++;
  }

  if (union.length / 2 === 0) {
    return (union[(union.length / 2 + 1)] + union[(union.length / 2)]) / 2;
  }
  return union[union.length / 2];
}

let nums1 = [1, 2];
let nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));
