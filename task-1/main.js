// Use this matrix for solution
let matrix = [
    [4, -2, 5],
    [1, -4, -12],
    [0, 1, -3]
]

let sum = 0;

for (let i = 0; i < matrix.length; i++) {
    if(matrix[i]<0 && matrix[i] % 2 ==0)
    console.log(i);

    sum = sum + i;
    console.log(sum);
} 
