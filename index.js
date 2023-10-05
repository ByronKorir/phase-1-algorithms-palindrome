function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  //checking if word is a palindrome
 return word === word.split('').reverse().join('');
 }


/* 
  Add your pseudocode here
*///the function should take a String
// convert the string to lowercase(using.toLowerCase())method
// check if the reverse and forward matches using=> [.split().reverse().join()] methods



/*
  Add written explanation of your solution here
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
