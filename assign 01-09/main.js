

/*   0تكليف 1

// Code Two
      window.onload = function () {
        document.getElementById("el").style.color = "red";
      };
 
      دا الكود اللي هيشتغل عشان الكومبايلر بيبدأ من فوق ونازل ودا تحديدا
       لان اونلود بتستني لحد ما الصفحة تحمل وبعدين ينفذ

*/


/*   0تكليف 2 */   
// document.createElement("<h1> Elzero </h1>");
document.write("<h2> Elzero </h2> ");
document.querySelector("h2").style.color = "blue";
document.querySelector("h2").style.fontSize = "80px";
document.querySelector("h2").style.fontWeight= "bold";
document.querySelector("h2").style.textAlign= "center";
document.querySelector("h2").style.fontFamily= "Arial";

/*   0تكليف 3 */  
console.log(
    "%cElzero %cWeb %cSchool",
    "color: red ; font-size:40px" ,
    "color: green ; font-weight: bold ; font-size:40px ;" ,
    "color: blue  ; font-size:40px" )


/*   0تكليف 4 */

console.group("Group 1");
console.log("Msg one")
console.log("Msg two")
console.group("child Group")
console.log("Msg one")
console.log("Msg two")
console.group("Grand child Group")
console.log("Msg one")
console.log("Msg two")
console.groupEnd()
console.groupEnd()
console.groupEnd()
console.group("Group 2");
console.log("Msg one")
console.log("Msg two")
console.groupEnd()
console.groupEnd()
console.groupEnd()


/*   0تكليف 5 */
console.table(["Elzero", "ahmed", "ge7o", "roaa"] )


/*   0تكليف 6 */

//console.log("Iam In Console");

/* 
document.write("Iam In Page");
*/ 