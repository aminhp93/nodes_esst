var path = require('path');
var hello = "Hoolo world form node";

var justNode = hello.slice(14);

// console.log(`Rock on World from ${justNode}`);
console.log(`Rock on World from ${path.basename(__filename)}`);
// console.log(__dirname);
// console.log(__filename);