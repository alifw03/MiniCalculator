var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MiniCalculator', 'coolMethod', [arg0]);
};

module.exports.add = function(arg0, success, error) {
    console.log(error);
    console.log(arg0);
    exec(success, error, 'MiniCalculator', 'add', [arg0]);
};

module.exports.substract = function(arg0, success, error) {
    exec(success, error, 'MiniCalculator', 'substract', [arg0]);
};

module.exports.multiply = function(arg0, success, error) {
    exec(success, error, 'MiniCalculator', 'multiply', [arg0]);
};

module.exports.divide = function(arg0, success, error) {
    exec(success, error, 'MiniCalculator', 'divide', [arg0]);
};