/* This file contains the actual logic behinds the routes: mode, median, mean, as well as an accumulator fn
so the mode can be determined, a fn that converts and validates a nums array */

function createFrequencyCounter(arr) {
    return arr.reduce((acc, next) => {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

// find the mode from an array of numbers

function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);

    let count = 0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
        }
    }

    return +mostFrequent;
}

function convertAndValidateNumsArray(numsAsStrings) {
    let results = [];

    for(let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);

        if(Number.isNaN(valToNumber)) {
            return new Error(
                `The value '${numsAsStrings[i]} at index ${i} is not a valid number.'`
            );
        }

        results.push(valToNumber);
    }
    return results;
}

function findMean(nums) {
    if(nums.length === 0) return 0;
    return nums.reduce((acc, cur) => {
        return acc + cur;
    }) / nums.length
}

function findMedian(nums) {

    nums.sort((a,b) => a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
        median = nums[middleIndex];
    }
    return median
}


module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray
};