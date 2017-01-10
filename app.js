var CryptoJS = require('crypto-js');
CryptoJS.classical = require('./index.js');

var plaintext = "all I ever wanted, all I ever needed";

console.log(plaintext);
var ciphertext = CryptoJS.classical.caesar.encrypt(plaintext,4);
var decipheredText = CryptoJS.classical.caesar.decrypt(ciphertext,4);
console.log(decipheredText);