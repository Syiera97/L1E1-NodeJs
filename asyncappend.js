var fs = require('fs')

console.log("Begin reading");
fs.readFile('input.txt', function (err, data){
	if (err) return console.error(err);

	console.log(data.toString());
	// console.log("End Reading");

	fs.appendFile('input.txt', 'Adding new text here from Async...', (err) => {
  		if (err) throw err;
  		console.log('The "data to append" was appended to file!');
	});


	// fs.rename('/path/to/input.txt', '/path/to/inputAppend.txt', function(err){
	// 	if ( err ) console.log('ERROR: ' + err);
	// });

	// fs.readFileSync('inputAppend.txt', function(err, data){
	// 	console.log(data.toString());
	// });


});
	console.log("End Reading");
