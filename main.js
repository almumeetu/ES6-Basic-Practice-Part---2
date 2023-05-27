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

//       console.log(all_chars[i].charCodeAt());

//       console.log('a'.charCodeAt());

//       console.log(n);
//       n = (n + 1) % 26; 
//       all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
//       console.log(all_chars[i]);
//     }
//     return all_chars.join("");
//   }

//   console.log(alphabet_char_Shift("abcd"));

function replaceCharWithNext(str) {
   let newString = " ";
   for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let code = char.charCodeAt(0);

      if (char >= "a" && char <= "z") {
         code = ((code - 97 + 1) % 26) + 97;
      } else if (char >= "A" && char <= "Z") {
         code = ((code - 65 + 1) % 26) + 65;
      }
      newString += String.fromCharCode(code);
   }
   return newString;
}
console.log("Solution of the Problem #84");
console.log(replaceCharWithNext("abcdxyz"));
console.log(replaceCharWithNext("sad"));
console.log(replaceCharWithNext("marriage"));
console.log(replaceCharWithNext("zug"));

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


// 88. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either,
//  two specified integers are similar. Check whether two integers are similar or not.

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
   const array = (x, y) => x - y;
   let a = arr.sort(array);
   return a[k - 1];
}

console.log(Kth_greatest_in_array([1, 2, 7, 4, 5], 3));
console.log(Kth_greatest_in_array([3, 45, 2, 7, 9, 11], 3));



// Problem 92. Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

function max_difference(arr) {
	var max = -1;
    var temp;
	for (var i = 0; i < arr.length - 1; i++)
      {
		temp = Math.abs(arr[i] - arr[i + 1]);
      // console.log(temp);

		max = Math.max(max, temp);
      // console.log(max);
	  }
	return max;
}

console.log(max_difference([1, 2, 3, 8, 9]))
// console.log(max_difference([1, 2, 3, 18, 9]))
// console.log(max_difference([13, 2, 3, 8, 9]))
