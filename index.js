function hasTargetSum(array, target) {
  // Write your algorithm here
  let l = array.length; //final array index
  let m = 0; //initial array index

  while (m <= l-1){ //first while loop layer for the first array element in the sum
    let n = m + 1; //resets [n] to be the element after [m]

    while (n <= l-1){ //second while loop layer for the second array element in the sum
      if(array[m] + array[n] == target){
        return true;
      }
      n++;
    }
    m++;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  The Big O Time Complexity is O(n^2)

*/

/* 
  Add your pseudocode here
  **Nested while loops:
  1. set array.length to l
  2. set m = 0
  3. first while loop for m
  4. set n = m+1 **resets n to the next index number after m
  5. second while loop for n
  6. if array[m] + array[n] == target, return true
  7. n++, close second while loop
  8. m++, close first while loop
  9. return false to catch false cases


*/

/*
  Add written explanation of your solution here
  The solution uses while loops and two variables that represent the array indexes (m and n).
  The variables are used in two while loops where the function would check each array sum for the target sum value.
  The while condition stops after array.length-1

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
