function smartSum(...args) {
    let sum = 0;
    let totalArgs = args.flat(Infinity);

    for (let value of totalArgs) {
        sum = sum += value
    }
    return sum
}
// const result = smartSum(1,2,3,[4,5],6);
// console.log(result);
const result2 =  smartSum(1,2,[[3,4],5],6);
console.log(result2)