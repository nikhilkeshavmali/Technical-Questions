// Move all zero to the end
// i/o [0,1,2,3,12]
// o/t [1,3,12,0,0]

// function movezeros(arr){
//     let index=0;

//     // move all non-zero ele to the front
//     for(let i=0; i < arr.length; i++){
//         if (arr[i] !== 0) {
//             arr[index] = arr[i];
//             index++;
//         }
// }

//     // fill the remaining positions with zeros
//     while(index < arr.length){
//         arr[index]=0;
//         index ++;
//     }
//     return arr;
// }

// const arr=[0,1,0,3,12];
// console.log(movezeros(arr));

// using swap (Alternate Solution)
function movezeros(arr) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      index++;
    }
  }

  return arr;
}

console.log(movezeros([0, 1, 0, 3, 12]));
