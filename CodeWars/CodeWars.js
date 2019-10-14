// Messi goals function
// Messi is a soccer player with goals in three leagues:
//
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17
// FUNDAMENTALS

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// Appending to Array
// Your task is to write a function named addWord that appends a string to an array. The original array should be modified and then returned.
// Example:
// var list = [];
// addWord(list, 'hello'); // list should be ["hello"]
// addWord(addWord(list, 'how are you'), 'goodbye'); // list should be ["hello","how are you","goodbye"]

function addWord(array, string) {
 array.push(string);
 return array;
}


// Given a number n, return the number of positive odd numbers below n, EASY!
// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
function oddCount(n){
 return Math.floor(n/2)
}

// 101 Dalmations - squash the bugs, not the dogs!
// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!
// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
// The number of dogs will always be a number and there will always be at least 1 dog.
function howManyDalmatians(number){
 if (number <= 10) {
   return "Hardly any"
 } else if (number <= 50) {
   return "More than a handful!"
 } else if (number === 101) {
   return "101 DALMATIANS!!!"
 } else {
   return "Woah that's a lot of dogs!"
 }
}
// Kata Example Twist
// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
// Add the value "codewars" to the array websites/Websites 1,000 times.
var websites = Array(1000).fill("codewars")
