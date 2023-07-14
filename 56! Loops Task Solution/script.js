// Let's improve the Tips Calculator from the previous task using loops.
// Your tasks:
//todo: 1. Create the bills array containing all 10 test bill values.
//todo: 2. Create empty arrays for the tips and the totals (tips and totals)
//todo: 3. Use the calculateTips() function we wrote before to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform 10 calculations.
//? Test data: 31, 95, 276, 540, 27, 205, 11, 1180, 96, 57.
//todo: Call calculateTips() in the loop and use the push() method to add values to the tips and totals arrays.
//todo: 4. Write a calculateAverage() function that takes an array called arr as a parameter. This function calculates the average of all numbers in a given array. This is a difficult task! Here's how to solve it:
//todo: 4.1. First, you will need to add all the values ​​in the array. To do the addition, start by creating a variable “sum” that starts at 0. Then loop through the array using a for loop. At each iteration, add the current value to the sum variable. Thus, by the end of the loop, all values ​​will be added together.
//todo: 4.2. To calculate the average, divide the sum you calculated earlier by the length of the array (because that's the number of elements).
//todo: 4.3. Call calculateAverage() with totals array.

//? Стрелочная функция
//? Функция = параметр => Условие ? если true: если false;
const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
const tips = [];
const totalBills = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calculateTips(bills[i]);
  tips.push(Math.round(tip));            //? Добавляет в пустой массив (tips) и округляет до целого числа
  totalBills.push(Math.round(bills[i] + tip));
}

console.log(bills, tips, totalBills);
// (10) [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57]   //? bills
// (10) [5, 14, 41, 81, 4, 31, 2, 177, 14, 9]           //? tips
// (10) [36, 109, 317, 621, 31, 236, 13, 1357, 110, 66] //? totalBills

const calculateAverage = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];     //? Сумма всех элементов массива
  }
  return sum / arr.length;  //? Сумма / кол-во элементов = среднее значение
}

//? находим средние значения для массивов
console.log(calculateAverage([1, 2, 3]));   // 2
console.log(calculateAverage(totalBills));  // 289.6
console.log(calculateAverage(bills));       // 251.8
console.log(calculateAverage(tips));        // 37.8