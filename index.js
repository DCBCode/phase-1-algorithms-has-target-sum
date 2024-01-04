function hasTargetSum(array, target) {
  for (let i=0; i < array.length - 1; i++) {
   for (let j= i + 1; j < array.length; j++) {
    if (array[i] + array[j] === target) {
      return true;
    }
   }
}
return false;
}
/*MY OWN INTERPRETATION OF WHAT THS IS ASKING:
 it is asking me to write a function that if any numbers in the 
 array of the function add up too exactly ten then it will return 
 true, if not it returns false
*/
/*TEST CASE FUNCTIONS: Test case with a pair that adds up to the target:
INput: [1,2,3,4,5] target 7
Expected Output: True
Explanation: The pair 2 and 5 adds up to target 7
 Test case where it wouldnt add up too target:
 input:[1,2,3,4,5], target 10
 expected output: false
 Explanation: there is no pair of numbers in the 
 arat that adds up to the target 10
 */
/* 
  This would be an O(n^2) function, because the function uses nested loops to 
  iterate through each pair of numbers in the array
*/

/* 
 function hastargetSum(array,target):
 for i from 0 to length(array) - 1          for j from i + 1 to length(array):
 if array[i] + array[j] eqauls target:
 return true
 return false
*/

/*
  The hasTargetSum function takes an array of integers and a target integer
   as arguments. it checks whether a piar of the numbers in the array add 
   up to a target number, if so it returns true, if not it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
