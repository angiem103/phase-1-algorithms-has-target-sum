function hasTargetSum(array, target) {
  // Write your algorithm here
  //I need to write a function that  will take an array and a target as a parameter. If the sum of any two integers in the array total the target then the function should return true.
for( let i = 0; i < array.length; i++){
  for( let j = i + 1; j<array.length; j++){
    if( array[i] + array[j] == target){
      return true
    } 
  }
}

return false
}

/* 
  nested O? O(n*2)
*/

/* 
  iterate over numbers 
  add two numbers in array
  if total of two numbers === target return true, else false
*/

/*
  first i iterate through each iteger then i set a variable for the rest of the numbers, i add them up and if they are equal to target then i return true. i repeat that loop with the i++
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log('Expecting: false')
  console.log('=>', hasTargetSum([2,4,7,8,1],100))
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
