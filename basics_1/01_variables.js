const acountId = 12345                   
// acountId = 0987                       => REASSIGNMENT : cannot be reassigned
// const acountId = 3456                 => REDECLARATION : cannot be redeclared within the same scope
// SCOPE : block_scoped

let email = "mohit@gmail.com"
// email = "sharma@gamil.com"           => REASSIGNMENT : can be reassigned
// let email = "kumar@gmail.com"        => REDECLARATION : cannot be redeclared within the same scope
// SCOPE : block_scope

var name = "Mohit"
// name = "Sharma"                      => REASSIGNMENT : can be reassigned
// var name = "kumar"                   => REDECLARATION : can be redeclared within the same scope

city = "noida"
let state;

email = "sharma@gamil.com"
name = "Sharma"
city = "pune"

console.table([email,name,city,state]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/