var fs = require('fs')

var data = fs.readFileSync("input.txt");

console.log("Begin reading");
console.log(data.toString());
console.log("End Reading");

console.log('------- Start Append -------')
fs.appendFileSync('input.txt', 'Adding new text here from Sync...');
console.log('The "data to append" was appended to file!');
console.log('------- End Append -------')

// console.log("Begin reading after append");
// console.log(dataAfterAppend.toString());
// console.log("End Reading after append");
