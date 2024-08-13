/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
      result *= nums[i];
    }
    return result
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return null;
  }
    let longestLength = 0;

    for (let word of words) {
      if (word.length > longestLength) {
        longestLength = word.length;
      }
    }
    return longestLength;
  }


/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length === 0) {
    return "";
  }
    let result = "";

    for(let i = 0; i < str.length; i+=2) {
      result += str[i]
    }
    return result;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left ++;
    right --;
  }
  return true;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }
  return -1
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  return str.split('').reverse().join('');
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArray = [];

  for(let key in obj) {
    if (typeof obj [key] === 'string') {
      stringArray.push(obj[key]);
    } else if (typeof obj [key] === 'object' && obj[key] !== null) {
      stringArray = stringArray.concat(gatherStrings(obj[key]));
    }
  }
  return stringArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length -1;

  while(left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
