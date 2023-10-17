// 1,2,3,4

// ref

// 0: {Array(3) => true}
// 1: {Array(3) => false}

const hasDuplicate = arr => new Set(arr).size !== arr.length

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {

const vowels = 'aeiouAEIOU';
const countMap = new Map();

    for (let char of str) {
        if (vowels.includes(char)) {
            countMap.set(char, (countMap.get(char) || 0) + 1);
        }
    }

    return countMap
}