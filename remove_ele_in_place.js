// Remove an element in place
// i/o -- nums=[3,2,2]
// val=3
// o/p -- 2 nums=[2,2]

function removeElement(nums,val){
    let index=0;
    for(let i=0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[index]=nums[i];
            index++;
        }
}
return index;
}
let nums=[3,2,3,2];
let length=removeElement(nums,3);
console.log(length);
console.log(nums.slice(0,length));