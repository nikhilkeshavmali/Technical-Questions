// // reverse the Array

// function reverseArray(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(reverseArray(arr));

function reverseArray(arr) {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
