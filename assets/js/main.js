//Lev1_7_js-einführung_coding-conventions
let helloWorld = 'Hello World';
const pi = 3.14;
const burjDubai = '828m';
let fullName = 'Jan Schmidt';
const eifelTower = '324m';
const camelCase = 'camelCase';
let kursStatus = true;


//Lev1_1_js-einführung_console-log
let a = 12;
let b = a * 3;
console.log(b);

document.write(b)
console.log(document.URL);

let helloWorld = 'Hello World';
console.log(helloWorld);

console.log('Anton');
let Name = 'Anton';
console.log(Name);

let age = 28;
console.log(age);

let job = 'Trainer';
console.log(job);

let married = true;
console.log(married);

console.log(Name + ' ist ' + age + ' Jahre alt und ist verheiratet: ' + married)


//Lev1_5_js-einführung_variables
let carName = 'BMW';
console.log(carName);

let x = 150;
let y = 50;
let z = x+y;

let firstName = "John"; let lastName = "Doe"; let age1 = 35;
console.log(firstName+lastName+age1);


//Lev1_12_js-einführung_arithmetic_operators
let score = 5 + 5 * 10;
console.log('Ergebnis: ' + score);

let score1 = (5 + 5) * 10;
console.log('Ergebnis: ' + score1);


let score2 = 0;
score2 = score2 + 10;
console.log('Ergebnis: ' + score2);

score2 += 10;
console.log('Ergebnis: ' + score2);

let zahl = 1;
zahl = zahl + 1;
zahl += 1;

zahl++;
console.log('increment: ' + zahl);

zahl--;
console.log('dekrement: ' + zahl);


//Lev1_13_js-einführung_arithmetische_wiederholung
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

let division_operator = 4 / 2;
console.log("division: " + division_operator);

let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);



//Lev1_11_js-einführung_string-methoden
let x2 = 'Hello';
let y2 = 'World<br>';

let z2 = x2 + y2;
document.write(z2);

let n = x2 + " " + y2;
document.write(n);

document.write(x2 + 'World');

let meinString ='Ich bin Erster';
let meinString2 = 'Ich komme auf Platz zwei';

let meineStrings = meinString + meinString2;
console.log(meineStrings);
