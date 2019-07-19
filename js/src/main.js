// 1) first try
let msj = "Hello World! Babel compiles";
// console.log(msj);

// 2) arrow function
const names = ["Roslyn","Bella","Keara"];
const printer = names.map( name => `${name} has ${name.length} leters` );
// console.log(printer);

//  3) default parameters on arrow func
const setUser = (name, country, tel = '00000000') => {
    var valTel;
    (tel === '00000000') ? ( valTel = "has no tel." ) : ( valTel = `with tel: ${tel}.` ); 
    return `${name}, lives in ${country} and ${valTel}`;
}
// console.log(setUser("Isadore","EUA"));
// console.log(setUser("Lela","Mexico","55576676"));

console.log("Log with...");