'use strict';
console.log('hello, world!');

var fs = require('fs');

fs.readFile('zhibo.php', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});