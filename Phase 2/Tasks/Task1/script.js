// 1- Create void function take an integer then print it then call this method in main.
// 2- Create function take three integers then return the average as float value then call this method in main.
// 3- Create function take an integer then return true if this number is prime otherwise return false.
// 4- Create function take an integer then return it reversed.
// 5- Create function take an array then return summation of its values.
// 6- Create function take array then return the max element in array.
// 7- Create function take char and return true if it is vowel char (a,e,I,o,u) otherwise return false
// 8- Create function take two integers to swap them.
// 9- Create function take array 2d then return the max element.
// 10- Write an example for any function in cmath.
// =============================================================
// 1- Create void function take an integer then print it then call this method in main.
// function printNumber(num) {
//     console.log("The Number Is: " + num);
// }                                      
// function main (){
//     let number = 32;
//     printNumber(number);
// }
// main();
// =======================================
// 2- Create function take three integers then return the average as float value then call this method in main.
// function calcAverage(a,b,c){
//     let sum = a + b + c;
//     let average = sum / 3;
//     return average;
// }
// function main(){
//     let num1 = 10;
//     let num2 = 20;
//     let num3 = 30;
//     let avg = calcAverage(num1,num2,num3);
//     console.log("The average is : + avg");
//     main()
// }
// 3- Create function take an integer then return true if this number is prime otherwise return false.
// function isPrime(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(11));  // الناتج: true
// console.log(isPrime(4));  // الناتج : false
// ====================================================================
// 4- Create function take an integer then return it reversed.
// function reverseInteger(n) {
//     // 1. Convert the integer to a string
//     let str = n.toString();
    
//     // 2. Reverse the string
//     let reversedStr = str.split('').reverse().join('');
    
//     // 3. Convert the reversed string back to an integer
//     let reversedInt = parseInt(reversedStr);
    
//     // 4. Preserve the sign of the original integer
//     if (n < 0) {
//         reversedInt = -reversedInt;
//     }
    
//     // 5. Return the reversed integer
//     return reversedInt;
// }

// // Example usage:
// console.log(reverseInteger(1234));  // Output: 4321
// console.log(reverseInteger(-1234)); // Output: -4321
// ==================================================
// 5- Create function take an array then return summation of its values.

// function sumArray(arr) {
//     // 1. Initialize a variable to hold the sum
//     let sum = 0;
    
//     // 2. Iterate over each element in the array
//     for (let i = 0; i < arr.length; i++) {
//         // 3. Add each element's value to the sum
//         sum += arr[i];
//     }
    
//     // 4. Return the final sum
//     return sum;
// }

// // Example usage:
// console.log(sumArray([1, 2, 3, 4]));  // Output: 10
// console.log(sumArray([10, 20, 30, 40])); // Output: 100
// ===============================================
// 6- Create function take array then return the max element in array.
// function maxElement(arr) {
//     let max = arr[0];
    
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
    
     
//     return max;
// }

// console.log(maxElement([1, 2, 3, 4]));  // الناتج: 4
// console.log(maxElement([10, 20, 30, 40])); // الناتج: 40
// console.log(maxElement([-5, -2, -10, -1])); // الناتج: -1
// ===========================================================
// 7- Create function take char and return true if it is vowel char (a,e,I,o,u) otherwise return false

// function isVowel(char) {
//     char = char.toLowerCase();
    
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
//     return vowels.has(char);
// }

// // Example usage:
// console.log(isVowel('a'));  
// console.log(isVowel('E'));  
// console.log(isVowel('b'));  
// console.log(isVowel('O'));  
// console.log(isVowel('z'));
// =======================================
// 8- Create function take two integers to swap them. 
// function swap(a, b) {
//     [a, b] = [b, a];
//     return [a, b];
// }

// let x = 5;
// let y = 10;

// console.log("Before swap:");
// console.log("x =", x); 
// console.log("y =", y);

// [x, y] = swap(x, y);

// console.log("After swap:");
// console.log("x =", x); 
// console.log("y =", y); 


// ===============================================
// 9- Create function take array 2d then return the max element.

// function findMaxIn2DArray(arr) {
//     let max = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] > max) {
//                 max = arr[i][j];
//             }
//         }
//     }

//     return max;
// }


// const array2D = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(findMaxIn2DArray(array2D));
// ==================================================================
// 10- Write an example for any function in cmath.
include <stdio.h> 
include <math.h>   

int main() {
    double number, result;  // Step 3: Declare variables for input number and result

    printf("Enter a number: ");
    scanf("%lf", & number);  

    result = sqrt(number);


    printf("Square root of %.2lf = %.2lf\n", number, result);

    return 0;}
