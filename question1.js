// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


function Sum(arr, target){
    
    if(arr.length == 0) return [];

    let newArr = arr.map((num, index) => [num, index]);;
    
    console.log('start');

    newArr.sort(function(a, b) {
        return a[0] - b[0];
      });


    let left = 0;
    let right = arr.length -1;
    let result = [];
    while(right < arr.length){
        if(newArr[left][0] + newArr[right][0] == target){
            result.push(newArr[left][1]);
            result.push(newArr[right][1]);
            break;
        }
        else if(newArr[left][0] + newArr[right][0] > target){
            right--;
        }else if(newArr[left][0] + newArr[right][0] < target){
            left++;
        }
    }

    return result;
}

let nums = [2,7,11,15];
let target = 9;

console.log(Sum(nums, target));

nums= [3,2,4];
target = 6; 

console.log(Sum(nums, target));

nums = [3,3];
target = 6;

console.log(Sum(nums, target));

// space complextiy : o(n) = n is length of array
// time complexity : o(nlog n) ; 