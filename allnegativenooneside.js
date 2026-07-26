function moveNegative(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] < 0) {
      left++;
    } else if (arr[right] > 0) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr;
}

let arr = [1, -2, 3, -4, 5, 6];

console.log(moveNegative(arr));
