const Arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
function oddArr(array) {
 let oddArray = []; //[1, 3, 5, 7, 9]
 for (let value of array) {
  let oddStatus = value % 2 !== 0;
  if (oddStatus) {
   oddArray.push(value)
  }
 }
 oddArray.sort((a, b) => a - b);

 const arrayMap = array.map((value) => {

  if (value % 2 !== 0) {
   return oddArray.shift();
  }

  return value
 })

 return arrayMap

};

const result = oddArr(Arr);
console.log(result);
