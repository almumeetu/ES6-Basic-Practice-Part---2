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
console.log(max_difference([13, 2, 3, 8, 9]))

// 13-2 = 11; 2 - 3 = 1; 3 - 8 = 5; 1

// -1, 11 = 11,1,5,1
// 11


// problem 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers. 

function array_max_diff(arr) {

    var max_result = 0;

    for(var i=0;i<arr.length;i++)
       {
        for(var k=0; k!=i && k<arr.length; k++)
        {
            var diff = Math.abs(arr[i]-arr[k]);
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

 console.log(array_element_replace([5,7,3,1,3,0,3], 3, 9));

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
  for (var i = 0; i < arra1.length; i++)
  {
    if (arra2.indexOf(arra1[i]) != -1) 
      return true;
  }
  return false;
}
// console.log(check_common_element([1,2,3], [3,2,5]));   
console.log(check_common_element([1,2,3], [5,6,7]));  
