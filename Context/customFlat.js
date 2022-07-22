function smartSum(array, result = []) {
    for (let value of array) {
        if (Array.isArray(value)) {
            smartSum(value, result)
        }  else {
            result.push(value)
        }
    }
    return result
}

const result2 =  smartSum([1,2,[[3,4],5],6]);

console.log(result2);

// const result2 =  smartSum(1,2,[[3,4],5],6);
// console.log(result2)
