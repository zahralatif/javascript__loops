function isPalindrome(str) {
    let reverse_str = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverse_str += str[i];
    }

    return str == reverse_str;
}

let str3 = "racecar";
let str4 = "Java";
// Example output:
// string1 palindrome?: 
// Yes 
// string2 palindrome?: 
// No 

console.log("string1 palindrome?:");
console.log((isPalindrome(str3)) ? "yes" : "no");

console.log("string2 palindrome?:");
console.log((isPalindrome(str4)) ? "yes" : "no");