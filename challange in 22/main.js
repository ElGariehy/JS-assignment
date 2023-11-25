/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);


/*
  [++a]    Value: 11   Explain: pre increment
  [+] Explain: addition
  
  [+d++]    Value: 20   Explain: post increment
  [+] Explain: addition
  
  [+c++]    Value: 80   Explain: post increment
  [-] Explain: subtraction
  
  [+a++]    Value: 11   Explain: post increment
*/

console.log(++a + -b + +c++ - -a++ + +a);
/*
  [++a]    Value: 13   Explain: pre increment
  [+] Explain: addition

  [-d]    Value: -21   Explain:  no-increment
  [+] Explain: addition

  [+c++]    Value: 81   Explain: post increment
  [-] Explain: subtraction

  [-a++]    Value: -13   Explain: post decrement
  [+] Explain: 

  [+a]      Value: 14   Explain:  no-increment
*/


console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
  [--c]    Value: 81   Explain: pre decrement
  [+] Explain: addition

  [+b]    Value: 21   Explain:  no-increment
  [+] Explain: addition

  [--a]    Value: 13   Explain: pre decrement
  [*] Explain: multiblication

  [+b++]    Value: 21   Explain: post increment
  [-] Explain: sub

  [+b]      Value: 22   Explain: no-increment
  [*] Explain: mult

  [a]      Value: 13   Explain: no-increment
  [+] Explain: add

  [--a]      Value: 12   Explain: pre decrement
  [-] Explain: sub

  [+true]      Value: -1   Explain: no-increment

*/






/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(+e * -d); // 2000
console.log(-d + ++e * ++g + ++f); // 173