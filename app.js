//Create a for loop that returns the sum of all of the positive numbers in this array [1, -12, 7, -800, 5, -3]
let arr = [1, -12, 7, -800, 5, -3];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i]
    }
}
console.log(`Question #1: ${sum}`);

//Break this string into an array and print every other word
let string = 'If I have seen further, it is by standing on the shoulders of giants.';
let stringArray = string.split(' ');
let everyOther = [];
for (let i =0; i < stringArray.length; i++) {
    if(i % 2 === 0) {
        everyOther.push(stringArray[i]);
    }
}
console.log(`Question #2: ${everyOther}`);

//using the sentence stored in the string variable, not string array
//use string.slice() to print the last word in the string

let lastWord = string.slice(62, 68)
console.log(`Question #3: ${lastWord}`);

//create a function that accepts three numbers as arguments and
//prints the average of those three numbers

function getAverage(x, y, z) {
    return ((x + y + z) / 3);
}
console.log(`Question #4: ${getAverage(12, 23, 22)}`);

//create a for loop that prints all the numbers between 1 and 66 that 
//are divisible by 12

let sixtySix = [];
for (i = 1; i < 67; i++) {
    if (i % 12 === 0) {
        sixtySix.push(i);
    }
}
console.log(`Question #5: ${sixtySix}`)
    
//create a for..of loop that prints in all uppercase the name of 
//anyone's name in the array that starts with a 'r'
let peopleArray = ['Ronny', 'Bobby', 'Ricky', 'Mike'];

for(let people of peopleArray) {
    if (people.startsWith('R')) {
        console.log(`Question #6: ${people.toUpperCase()}`)
    } 
}

//create a for..of loop that capitalizes all of the vowels in the
//sentence and then prints the sentence
let oldString = 'Everyday I Have The Blues';
let lowercaseOldString = oldString.toLowerCase();
let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
let newString = '';
for (let letter of lowercaseOldString) {
    if(vowels.includes(letter)) {
        newString += letter.toUpperCase();
    } else {
        newString += letter;
    }
}
console.log(`Qusetion #7: ${newString}`)

//use filter to store the customers who have an overdue bill
//then print out those peoples' names
let customers = [
    {
    name: 'Bill',
    overDue: true
    }, {
    name: 'Tammy',
    overDue: false
    }, {
    name: 'DeAndre',
    overDue: false
    }, {
    name: 'Scott',
    overDue: true
    }, {
    name: 'Tina',
    overDue: true
    }
]

let overDueBill = customers.filter(customers => customers.overDue === false);
for (let customerName of overDueBill) {
    console.log(`Question #8: ${customerName.name}`);
}

//use a for..of loop to print out all the values for the customers

for (let names of customers) {
    console.log(`Question #9: ${names.name}`);
}

//create a function that checks to see if a word is a palindrome
//it should work regardless of spaces, case, or punctuation
//'anna', 'Anna', 'an, na', and 'an, Na' should all be identified
//as a palindrome by your function

function checkPal(word) {
    let reversed = word.toLowerCase().split('').reverse().join('');
    return word.toLowerCase() === reversed;
}
let splitAndLowered = checkPal('Natasha');
console.log(`Question #10: ${splitAndLowered}`);