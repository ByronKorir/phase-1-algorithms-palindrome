function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
// Reverse the word and check if it is equal to the original word
 return word === word.split('').reverse().join('');
 }


/* 
  Add your pseudocode here
*/
//the isPalindrome takes a string argument
//convert string to lowercase
// Reverse the word and check if it is equal to the original word



/*
  Add written explanation of your solution here

  //the function should take a String
// convert the string to lowercase(using.toLowerCase())method
// check if the reverse and forward matches using=> [.split().reverse().join()] methods
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
