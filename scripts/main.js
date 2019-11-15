'use strict';
console.log("Running my JS");
var a = 55;
var b = 20;
console.log(a);

a = 300 + b + a;
console.log(a);
a++;
console.log(a);
a++;
console.log(a);
a++;

var myStr = "Valdis said \"Hello\"";
var mySecondStr = 'Valdis said "Hello"';
var myThirdStr = `I can use "quotes" and also 'single quotes' and no problem`;
var myFourthStr = `I can even include a variable ${a} in my text`;
console.log(myStr);
console.log(mySecondStr);
console.log(myThirdStr);
console.log(myFourthStr);

var myText = "";
myText += "First Line\n";
//do more stuff
myText += "Second Line <h1>My Headline</h1>";
myText += "more text on second line";
console.log(myText);

var someAdjective = "fascinating";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

var myPar = document.querySelector('#myResults');
myPar.innerText = "<em>" + myStr + "</em>";

var myFancyPar = document.querySelector('#myFancyResults');
myFancyPar.innerHTML = "<em>" + myStr + "</em>";


