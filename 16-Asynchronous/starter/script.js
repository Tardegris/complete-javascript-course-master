'use strict';

const oneword = function (str) {
    return str.replace(/ /g, '').toLowerCase;
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher -order function
const transformer = function(str, fn) {
    console.log(str);
console.log(`transformed string ${fn(str)}`);
}

transformer('JavaScript is the best!', upperFirstWord);