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

  var digitSum = function(num) {

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
console.log(sort_prime(5))
// console.log(sort_prime(11))
// console.log(sort_prime(19))

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
console.log(find_numbers([1, 2, 3, 4, 5, 6, 7, 8], 5))
// console.log(find_numbers([1,3,5,6,7,8], 6))


// problem 111. Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one. 

function find_third_number(x, y, z) {
  if ((x !== y) && (x !== z) && (y !== z))
    return "Three numbers are unequal.";
  if (x == y) return z;
  if (x == z) return y;
  return x;
}

console.log("Solution of #111");
console.log(find_third_number(1, 2, 2))
console.log(find_third_number(1, 1, 2))
console.log(find_third_number(1, 2, 3))


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
console.log(findTrailingZeroes(8));
console.log(findTrailingZeroes(9));
console.log(findTrailingZeroes(10));

//  problem 113. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.

function int_sum(num) {
  var s_sum = 0;
  while (num > 0) {
    s_sum += num;
    num = Math.floor(num / 2);
  }
  return s_sum;
}
console.log(int_sum(8))
console.log(int_sum(9))
console.log(int_sum(26))

////////////////////////

