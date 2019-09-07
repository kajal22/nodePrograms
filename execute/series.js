console.log('Program Start');

var async = require('async');
async.series([
    function (callback) {
        console.log('First Step --> ');
        callback(null, '1');
    },
    function (callback) {
        console.log('Second Step --> ');
        callback(null, '2');
    }
],
function (err, result) {
    console.log(result);
});

console.log('Program End');