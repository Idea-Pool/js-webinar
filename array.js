const myArray = [];

myArray[0] = 1;
myArray[1] = "Bunny";
myArray[2] = "EPAM";

console.log(myArray);
console.log(myArray.join('#'));

let multiLineString = '';

multiLineString += 'Something\n';
multiLineString += 'Other\n';

const lines = [];

lines.push('Something');
lines.push('Other');

lines.join('\n');

const numbers = [1, 2, 11, 4, 13];
numbers.sort((a, b) => a - b);
console.log(numbers);

const summary = numbers.reduce((sum, n) => sum + n, 0);
console.log(summary);