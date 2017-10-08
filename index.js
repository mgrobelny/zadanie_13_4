var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function(err, data) {
	console.log('\n');
    console.log('The content of the folder:\n'.yellow);
    console.log(data);
    fs.writeFile('content.txt', data, (err) => {
    	if (err) throw err;
    	console.log('\n');
    	console.log('The content of the folder has been saved to content.txt.'.green);
    });
});