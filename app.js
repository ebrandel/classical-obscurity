var CryptoJS = require('crypto-js');
CryptoJS.classical = require('./index.js');

var plaintext = "qwerqwerwqe";

var ciphertext = CryptoJS.classical.atbash.encrypt(plaintext);
var decipheredText = CryptoJS.classical.atbash.decrypt(ciphertext);

console.log(decipheredText);