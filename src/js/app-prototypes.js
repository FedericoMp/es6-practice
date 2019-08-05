var alfa = myFunc => myFunc;
var beta = myVal => console.log(`value: ${myVal}`);

var first =  alfa;
var second = first;

second(beta('to print'));

var arrFunc = [alfa, beta];
console.log(arrFunc);