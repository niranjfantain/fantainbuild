#! /usr/bin/env node


var search = process.argv[2];
var replace = process.argv[3];
var filename = process.argv[4];

console.log(search);
console.log(replace);
console.log(filename);

search=/(fg.env\s*=\s*")(.*)(".*)/

var fs = require('fs');

fs.readFileSync(filename).toString().split('\n').forEach(function (line) { 
    console.log(line.toString().replace(search, replacer));
	
    //fs.appendFileSync($2, line.toString() + "\n");
});

function replacer(match, m1, m2, m3, offset, string){
	//console.log (match);
	//console.log (offset);
	//console.log (string);
	return m1 + replace + m3;
}
