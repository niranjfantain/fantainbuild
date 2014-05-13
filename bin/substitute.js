#! /usr/bin/env node

// Gets the Paramters from the fantainbuild to search and replace 
var search = new RegExp(process.argv[2]);
var replace = process.argv[3];
var filename = process.argv[4];

// Initializing the node.js File System Module
var fs = require('fs');

// Searches and replace old  with the new  environment 
fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
    var test = line.toString().replace(search, replacer);
    console.log(test);
});

// Replace Operation to set the new environment
function replacer(match, m1, m2, m3, offset, string){
        return m1 + replace + m3;
}

