// Problem 81. Write a JavaScript program to add two digits to a given positive integer of length two.  

function two_digits(n) {
   return n % 10 + Math.floor(n / 10);
}
console.log(two_digits(25))
console.log(two_digits(50))

// problem 84. Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

// function alphabet_char_Shift(str) {
//     var all_chars = str.split("");
//     for(var i = 0; i < all_chars.length; i++) {
//       var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
//     //   console.log(n);
//       n = (n + 1) % 26; 
//       all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
//       console.log(all_chars[i]);
//     }
//     return all_chars.join("");
//   }

//   console.log(alphabet_char_Shift("abcd"));

// problem 86. Write a JavaScript program to find the types of a given angle.  

function angle_Type(angle) {
   if (angle < 90) {
      return "Acute angle.";
   }
   if (angle === 90) {
      return "Right angle.";
   }
   if (angle < 180) {
      return "Obtuse angle.";
   }
   return "Straight angle.";
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))


// 88. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.

function checking_numbers(x, y, divisor) {
   if (x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !==
      0) {
      return true;
   }
   return false;
}

console.log(checking_numbers(10, 25, 5))
console.log(checking_numbers(10, 20, 5))
console.log(checking_numbers(10, 20, 4))


// Problem 90. Write a JavaScript program to find the kth greatest element in a given array of integers. 

function Kth_greatest_in_array(arr, k) {
   const array = (x,y) => x - y;
   let a = arr.sort(array);
   return a[k - 1];
}

console.log(Kth_greatest_in_array([1, 2, 7, 4, 5], 3));
console.log(Kth_greatest_in_array([3, 45, 2, 7, 9, 11], 1));


