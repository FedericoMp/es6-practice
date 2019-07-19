"use strict";

// 1) first try
var msj = "Hello World! Babel compiles"; // console.log(msj);
// 2) arrow function

var names = ["Roslyn", "Bella", "Keara"];
var printer = names.map(function (name) {
  return "".concat(name, " has ").concat(name.length, " leters");
}); // console.log(printer);
//  3) default parameters on arrow func

var setUser = function setUser(name, country) {
  var tel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '00000000';
  var valTel;
  tel === '00000000' ? valTel = "has no tel." : valTel = "with tel: ".concat(tel, ".");
  return "".concat(name, ", lives in ").concat(country, " and ").concat(valTel);
}; // console.log(setUser("Isadore","EUA"));
// console.log(setUser("Lela","Mexico","55576676"));


console.log("Log with babel");