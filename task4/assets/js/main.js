let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
// Example output: 
// [12, 7, 16]

let sum_arr = [];

for (let i = 0; i < arr_3.length; i++) {
    let sum = arr_3[i] + arr_4[i];
    sum_arr.push(sum);
}

console.log(sum_arr);