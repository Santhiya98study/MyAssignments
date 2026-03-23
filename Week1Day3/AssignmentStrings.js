let name1="madam"
let name2="madam"
let resultconcat=name1.concat(name2); {
console.log(resultconcat);
}
function isPalindrome(str) {
  let cleaned = str.toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome(resultconcat)); 