var fs = require('fs')

console.log("Begin reading");
fs.readFile('input.txt', function (err, data){
	if (err) return console.error(err);
	console.log(data.toString());

	// fs.rename('input.txt','inputappend.txt', (err) => {
	// 	if(err) throw err;
	// 	console.log('File Renamed!')
	// 	console.log("-------------------------------------");
	// 	fs.readFileSync('inputappend.txt', function(err, data){
	// 		console.log(data.toString());
	// 	});
	// });

	console.log("End Reading");
	fs.appendFile('input.txt', 'Adding new text here from Async...', (err) => {
		if (err) throw err;
		console.log('The "data to append" was appended to file!');
		fs.readFile('input.txt', function(err, data){
			if(err) return console.error(err);
			console.log("-------------------------------------");
			console.log(data.toString());
		});
	});
	
});

