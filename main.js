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
  for (var i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1]);
    // console.log(temp);

    max = Math.max(max, temp);
    // console.log(max);
  }
  return max;
}

console.log(max_difference([1, 2, 3, 8, 9]))
// console.log(max_difference([1, 2, 3, 18, 9]))
console.log(max_difference([13, 2, 3, 8, 9]))

// 13-2 = 11; 2 - 3 = 1; 3 - 8 = 5; 1

// -1, 11 = 11,1,5,1
// 11


// problem 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers. 

function array_max_diff(arr) {

  var max_result = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var k = 0; k != i && k < arr.length; k++) {
      var diff = Math.abs(arr[i] - arr[k]);
      max_result = Math.max(max_result, diff);
      // console.log(k);
    }
  }
  return max_result;
}
console.log(array_max_diff([1, 2, 3]))
// console.log(array_max_diff([1, 2, 3, 18, 9]))
// console.log(array_max_diff([13, 2, 3, 8, 9]))



// problem 94. Write a JavaScript program to find the number appearing most frequently in a given array of integers.


// function array_element_mode(arr) {
//    var ctr = [],
//      ans = 0;

//    for(var i = 0; i < 10; i++) {
//      ctr.push(0);
//    //   console.log(ctr.push(0));
//    }
//    for(var i = 0; i < arr.length; i++) {
//      ctr[arr[i] - 1]++;
//      if(ctr[arr[i] - 1] > ctr[ans]) {
//        ans = arr[i] - 1;
//      }
//    }
//    return ans + 1;  
//  }
//  console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))

function findMostFrequentNumber(arr) {
  let maxCount = 0;
  let mostFrequentNumber;

  for (let i = 0; i < arr.length; i++) {
    let count = 1;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      mostFrequentNumber = arr[i];
    }
  }

  return mostFrequentNumber;
}

// Example usage
const numbers = [1, 2, 3, 2, 5, 2, 2, 6, 2, 7, 2];
const result = findMostFrequentNumber(numbers)
  ;
console.log(result); // Output: 2


//  problem 95. Write a JavaScript program to replace all numbers with a specified number in an array of integers.

function array_element_replace(arr, old_value, new_value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}

console.log(array_element_replace([5, 7, 3, 1, 3, 0, 3], 3, 9));

//  [5,7,9,1,9,0,9]


// problem 96. Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.

function sum_adjacent_difference(arr) {
  var result = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    result += Math.abs(arr[i] - arr[i + 1]);
  }
  return result;
}
console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));
console.log(sum_adjacent_difference([-1, 0, 6, -7, -3]));
console.log(sum_adjacent_difference([9, 1, -5, 2, -7]));

/////////////////////////////////////////////


function sum_adjacent_difference2(arr) {
  var result = 0;
  for (var i = 1; i < arr.length; i++) {
    result += Math.abs(arr[i] - arr[i - 1]);
  }
  return result;
}
console.log(sum_adjacent_difference2([1, 2, 3, 2, -5]));
console.log(sum_adjacent_difference2([-1, 0, 6, -7, -3]));
console.log(sum_adjacent_difference2([9, 1, -5, 2, -7]));



// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers. 


function findMaxSumOfKConsecutiveNumbers(arr, k) {
  let maxSum = 0;
  let currentSum = 0;

  // Calculate the sum of the first k numbers
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  // Update maxSum with the initial sum
  maxSum = currentSum;

  // Calculate the sum of subsequent k consecutive numbers using the sliding window
  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage
const number = [1, 2, 3, 14, 5];
const k = 2;
const results = findMaxSumOfKConsecutiveNumbers(number, k);
console.log(results); // Output: 16 (sum of 5 + 7 + 4)


// function array_max_consecutive_sum(nums, k) {
//    let result = 0;
//    let temp_sum = 0;
//    for (var i = 0; i < k - 1; i++) {
//      temp_sum += nums[i];
//    }
//    for (var i = k - 1; i < nums.length; i++) {
//      temp_sum += nums[i];
//      if (temp_sum > result) {
//        result = temp_sum;
//      }
//      temp_sum -= nums[i - k + 1];
//    //   console.log(temp_sum);
//    }
//    return result;
//  }

//  console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
//  console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
//  console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))


// problem 99. Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string. 

function rearrangement_characters(str1, str2) {

  var first_set = str1.split(''),
    second_set = str2.split(''),
    result = true;

  first_set.sort();
  second_set.sort();

  // console.log(first_set.sort());

  for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
    if (first_set[i] !== second_set[i]) {
      result = false;
    }
  }

  return result;
}

console.log(rearrangement_characters("xya", "ayx"))
// console.log(rearrangement_characters("xyz", "zyp"))


// problem 100. Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.

function check_common_element(arra1, arra2) {
  for (var i = 0; i < arra1.length; i++) {
    if (arra2.indexOf(arra1[i]) != -1)
      return true;
  }
  return false;
}
// console.log(check_common_element([1,2,3], [3,2,5]));   
console.log(check_common_element([1, 2, 3], [5, 6, 7]));


// problem 101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions. 

function test_string(input_str) {
  const is_lower_case = symbol => {
    if ('a' <= symbol && symbol <= 'z') {
      return true;
    }
    return false;
  };

  const is_upper_case = symbol => {
    if ('A' <= symbol && symbol <= 'Z') {
      return true;
    }
    return false;
  };

  const is_first_char_lower = is_lower_case(input_str[0]);
  const is_first_char_upper = is_upper_case(input_str[0]);

  // if (!(is_first_char_lower || is_first_char_upper)) {
  //   return false;
  // }

  for (let i = 1; i < input_str.length; i++) {
    if (i % 2) {
      if (is_lower_case(input_str[i]) === is_first_char_lower ||
        is_upper_case(input_str[i]) === is_first_char_upper) {
        return false;
      }
    } else {
      if (is_lower_case(input_str[i]) !== is_first_char_lower ||
        is_upper_case(input_str[i]) !== is_first_char_upper) {
        return false;
      }
    }
  }

  return true;
}
console.log("Solution of #101 A");
console.log(test_string('xYr'));
console.log(test_string('XXyx'));

// Solution of #101 B

function checkString(str) {
  const regex = /^[a-zA-Z]$/; // Regular expression to match Latin letters
  const len = str.length;

  if (!regex.test(str)) {
    return false; // String contains non-Latin characters
  }

  for (let i = 1; i < len; i++) {
    const currChar = str[i];
    const prevChar = str[i - 1];

    if (
      (currChar === currChar.toUpperCase() && prevChar === prevChar.toUpperCase()) ||
      (currChar === currChar.toLowerCase() && prevChar === prevChar.toLowerCase())
    ) {
      return false; //   ppercase or lowercase letters found
    }
  }

  return true; // String meets the criteria
}

// Example usage:
console.log("Solution of #101 B");
console.log(checkString("xYr")); // Output: true
console.log(checkString("AbcABcd")); // Output: false
console.log(checkString("abcDEF")); // Output: false
console.log(checkString("123")); // Output: false
console.log(checkString("Hello World")); // Output: false

///////////////////////////////////////////////////
/////////////////////////
///////////////////////////////////////////////////////

// problem 102. Write a JavaScript program to find the number of inversions of a given array of integers. 
// Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.

function number_of_InversionsNaive(arr) {
  var ctr = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j])
        ctr++;
    }
  }
  return ctr;
}

console.log("Solution of #102");
console.log(number_of_InversionsNaive([0, 3, 2, 5, 9]));
console.log(number_of_InversionsNaive([1, 5, 4, 3]));
console.log(number_of_InversionsNaive([10, 30, 20, -10]));



////////////////////////////////////////////////
/////////////////////////\
//////////////////////////////////

// problem 103. Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.  

function findMaxNumber(num) {
  // Convert the number to a string
  let numStr = num.toString();
  let maxNum = 0;

  for (let i = 0; i < numStr.length; i++) {
    // Remove the current digit from the string
    let newNumStr = numStr.slice(0, i) + numStr.slice(i + 1);

    // Convert the modified string back to a number
    let newNum = Number(newNumStr);

    // Update the maximum number if necessary
    if (newNum > maxNum) {
      maxNum = newNum;
    }
  }

  return maxNum;
}

// Example usage:
console.log("Solution of #103");
console.log(findMaxNumber(12345));  // Output: 1235
console.log(findMaxNumber(987654)); // Output: 98765
console.log(findMaxNumber(9));      // Output: 0 (Only one digit, so no deletion possible)


//////////////////////////////////////////
///////////////
/////////////////////////////////


// problem 104. Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.

function different_values(ara, n) {
  let max_val = -1;
  for (let i = 0; i < ara.length; i++) {
    for (let j = i + 1; j < ara.length; j++) {
      const x = Math.abs(ara[i] - ara[j]);
      // console.log(i);
      // console.log(j);
      // console.log(x);
      if (x <= n) {
        max_val = Math.max(max_val, x)
        // console.log(max_val);
      }
    }
  }
  return max_val
}
console.log("Solution of #104");
console.log(different_values([12, 10, 33, 34], 10));
console.log(different_values([12, 10, 33, 34], 24));
console.log(different_values([12, 10, 33, 44], 40));


// problem 105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number. 

function digit_to_one(num) {

  var digitSum = function (num) {

    var digit_sum = 0;
    while (num) {
      digit_sum += num % 10;
      num = Math.floor(num / 10);
    }

    return digit_sum;
  };

  var result = 0;

  while (num >= 10) {
    result += 1;
    num = digitSum(num);
  }

  return result;
}



console.log("Solution of #105");
console.log(digit_to_one(123))
console.log(digit_to_one(156))


// problem 108. Write a JavaScript program to create the dot products of two given 3D vectors. 
// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.

function dot_product(vector1, vector2) {
  var result = 0;
  for (var i = 0; i < 3; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}
console.log("Solution of #108");
console.log(dot_product([1, 2, 3], [1, 2, 3]))
console.log(dot_product([2, 4, 6], [2, 4, 6]))
console.log(dot_product([1, 1, 1], [0, 1, -1]))




// Problem 109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer

function sort_prime(num) {

  var prime_num1 = [],
    prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
    // console.log(prime_num2);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1;
}

console.log("Solution of #109");
console.log(sort_prime(5));
// console.log(sort_prime(11));
// console.log(sort_prime(19));

// problem 110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number. 

function find_numbers(arr_num, num) {
  var result = 0;
  for (var i = 0; i < arr_num.length; i++) {
    if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
      result++;
    }
    if (arr_num[i] === num) {
      return result;
    }
    // console.log(result);
  }
  return -1;
}

console.log("Solution of #110");
console.log(find_numbers([1, 2, 3, 4, 5, 6, 7, 8], 5));
// console.log(find_numbers([1,3,5,6,7,8], 6));


// problem 111. Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one. 

function find_third_number(x, y, z) {
  if ((x !== y) && (x !== z) && (y !== z))
    return "Three numbers are unequal.";
  if (x == y) return z;
  if (x == z) return y;
  return x;
}

console.log("Solution of #111");
console.log(find_third_number(1, 2, 2)) // 1
console.log(find_third_number(1, 1, 2)) // 2
console.log(find_third_number(1, 2, 3)) // Three numbers are unequal.


//////////////////////////////////////

// problem 112. Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number. 

// function trailing_zeros_factorial(n) {
//   var result = 0;
//   for (var i = 5; i <= n; i += 5) {
//       var num = i;
//       while (num % 5 === 0) {
//           num /= 5;
//           result++;
//       }
//   }
//   return result;
// }

// console.log(trailing_zeros_factorial(8))
// console.log(trailing_zeros_factorial(9))
// console.log(trailing_zeros_factorial(10))

function findTrailingZeroes(num) {
  let i = 5,
    total = 0;
  while (i <= num) {
    total += Math.floor(num / i);
    i *= 5;
    // console.log(i);
  };
  return total;
};

console.log("Solution of #112");
console.log(findTrailingZeroes(5)); // 1
console.log(findTrailingZeroes(9)); // 1 
console.log(findTrailingZeroes(10)); // 2
console.log(findTrailingZeroes(11)); // 2

//  problem 113. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.


// A...

function int_sum(num) {
  var s_sum = 0,
    divider = 1;
  while (divider > 0) {
    num = Math.floor(num / divider);
    divider *= 2;
    // console.log(num);
  }
  return s_sum;
}

//
console.log("Solution of #113A");
console.log(int_sum(8))  //15
console.log(int_sum(9))  //16
console.log(int_sum(14)) //25 
console.log(int_sum(26)) //49

//////////////////////////////////////////////
//////////////////////////
////////////////////////////////

// B...
function int_sum2(num) {
  var result = 0,
    divider = 1;
  while (divider <= num) {
    result += Math.floor(num / divider);
    divider *= 2;
    // console.log(num);
  }
  return result;
}

//
console.log("Solution of #113B");
console.log(int_sum2(8))  //15
console.log(int_sum2(9))  //16
console.log(int_sum2(14)) //25 
console.log(int_sum2(26)) //49

//////////////////
//////////////////////// 


// problem 114. Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.)

function is_correct_Sentence(input_str) {
  var first_char = input_str[0];

  var last_char = input_str[input_str.length - 1];

  return /[A-Z]/.test(first_char) && last_char == "."

}

console.log("Solution of #114");
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts.")); // true
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));  // false          
console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts.")); // false
console.log(is_correct_Sentence("My name is Saikat.")); // true
console.log(is_correct_Sentence("My brother's name is Al-Mukit Apon")); // false

// problem 115. Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right). 
// Example:
// [1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
// [1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false

function is_diagonal_matrix(user_matrix) {
  for (var i = 0; i < user_matrix.length; i++) {
    for (var j = 0; j < user_matrix.length; j++) {
      if (i !== j && user_matrix[i][j] !== 0)
        return false;
    }
  }
  return true;
}

console.log("Solution of #115");
console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 3]]));
console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3]]));

// problem 116. Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. 
// For a string "2*0", the output should be : ["210", "240", "270"]

function is_divisible_by3(mask_str) {

  var digitSum = 0,
    left = '0'.charCodeAt(), // 48
    right = '9'.charCodeAt(), //57
    result = [],
    mask_data = mask_str.split(''), //["2", "#", "0"]           
    hash_pos = -1;

  for (var i = 0; i < mask_data.length; i++) {
    if (left <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= right) {    // 48 <= 50 && 50 <= 57, 48 <= 35 && 35 <= 57, 48 <= 48 && 48 <= 57,
      digitSum += mask_data[i].charCodeAt() - left;
    }
    else {
      hash_pos = i;
    }
  }

  for (var i = 0; i < 10; i++) {

    if ((digitSum + i) % 3 === 0) {
      mask_data[hash_pos] = String.fromCharCode(left + i);
      // console.log(String.fromCharCode(left + i));
      result.push(mask_data.join('')); // [ 210, 240, 270 ]
    }
    // console.log(i);
  }

  return result;
}

console.log("Solution of #116");
console.log(is_divisible_by3("2#0"))
// console.log(is_divisible_by3("4#2"))

// problem 117. Write a JavaScript progr\am to check whether a given matrix is an identity matrix. 
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
// [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false

function is_identity_Matrix(matrix_data) {
  for (let i = 0; i < matrix_data.length; i++) 
   {
    for (let j = 0; j < matrix_data.length; j++)
     {
      if (matrix_data[i][j] !== 1 && i === j || matrix_data[i][j] && i !== j)
      {
        return false;
      }
    }
  }
  return true;
}

console.log(is_identity_Matrix([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
console.log(is_identity_Matrix([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]]))

//////////////
/////////////////////
///////////////

function identity_matrix(matrix){
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix.length; j++){
      // Checks the main diagonal elemets are 1
      if (i == j && matrix[i][j] == 1){
        return false;
      }
      // Checks the rest elements are 0
      else if (i != j && matrix[i][j]){
        return false;
      }
    }
    return true;
  }
} 
console.log(identity_matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]])); // true
console.log(identity_matrix([[1, 0, 1], [0, 1, 0], [0, 0, 1]])); //false

// problem 118. Write a JavaScript program to check whether a given number is in a given range. 

function is_inrange(x, y, z) {
  return y >= x && y <= z;
}

console.log("Solution of #118");
console.log(is_inrange(1, 2, 3));  // true
console.log(is_inrange(1, 2, -3)); // false
console.log(is_inrange(1.1, 1.2, 1.3)); //true

// problem 119. Write a JavaScript program to check if a given integer has an increasing digit sequence. 

function is_increasing_digits_Sequence(num) {

  var arr_num = ('' + num).split('');

  for (var i = 0; i < arr_num.length - 1; i++) {
    if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1]))
      return false;
  }
  return true;
}

console.log("Solution of #119");
console.log(is_increasing_digits_Sequence(123)); //true
console.log(is_increasing_digits_Sequence(1223)); //false
console.log(is_increasing_digits_Sequence(4567)); //true
console.log(is_increasing_digits_Sequence(84567)); //false

// problem 120. Write a JavaScript program to check if a point lies strictly inside the circle. 
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)


function check_a_point(a, b, x, y, r) {
  var dist_points = (a - x) * (a - x) + (b - y) * (b - y);

  // console.log(dist_points);
  r *= r;
  if (dist_points < r) {
    return true;
  }
  return false;
}

console.log(check_a_point(0, 0, 2, 4, 6)); //true
console.log(check_a_point(0, 0, 6, 8, 6)); //false

// problem 121. Write a JavaScript program to check whether a given matrix is lower triangular or not. 
// Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.

function lower_triangular_matrix(user_matrix) {
  for (var i = 0; i < user_matrix.length; i++) 
       {
      for (var j = 0; j < user_matrix[0].length; j++) 
          {
          if (j > i && user_matrix[i][j] !== 0)
            return false;
      }
  }
  return true;
}

console.log(lower_triangular_matrix([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
console.log(lower_triangular_matrix([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));

// problem 122. Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence. 

function is_monotonous(num) {
  if (num.length === 1) {
    return true;
  }
  var num_direction = num[1] - num[0];
  for (var i = 0; i < num.length - 1; i++) {
    if (num_direction * (num[i + 1] - num[i]) <= 0) {
      return false;
    }
  }
  return true;
}
console.log(is_monotonous([1, 2, 3])); //true
console.log(is_monotonous([1, 2, 2])) //false
console.log(is_monotonous([-3, -2, -1])) //true   

// problem 123. Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer.

function is_permutation(input_arr, n) {
  for (var i = 0; i < n; i++) {
      if (input_arr.indexOf(i + 1) < 0) 
        return false;
  }
  return true;
}
console.log(is_permutation([1, 2, 3, 4, 5], 5));
console.log(is_permutation([1, 2, 3, 5], 5));

// problem 124. Write a JavaScript program to create the NOR value of two given booleans. 
// Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false
// Sample Example:
// For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.

function test_logical_Nor(a, b) {
  return (!a && !b)
}
console.log(test_logical_Nor(true, false));
console.log(test_logical_Nor(false, false));
console.log(test_logical_Nor(true, true));\

//  problem 126. Write a JavaScript program to get the largest even number from an array of integers. 

function max_even(arra) {

  arra.sort((x, y) => y - x);

  for (var i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 0)
      return arra[i];
  }
}

console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));

// problem 128. Write a JavaScript program to find the smallest round number not less than a given value. 
// Note: A round number is informally considered to be an integer that ends with one or more zeros.[3] So, 590 is rounder than 592, but 590 is less round than 600.

function nearest_round_number(num) {
  while (num % 10) {
      num++;
  }
  return num;
}

console.log(nearest_round_number(56));
console.log(nearest_round_number(592));

// problem 129. Write a JavaScript program to find the smallest prime number strictly greater than a given number. 

function next_Prime_num(num) {
  for (let i = num + 1;; i++) {
      let isPrime = true;
      for (let d = 2; d * d <= i; d++) {
          if (i % d === 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) {
          return i;
      }
  }
}

console.log(next_Prime_num(3));
console.log(next_Prime_num(17));