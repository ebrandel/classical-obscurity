var utf8 = require('utf8');
var rotx = require('./rotx.js');

module.exports = {
    encrypt: function(plaintext) {            
        // rot13 has been modified to work more properly with our hex based alphabet
        // Traditionally it would rotate letters half way around the alphabet, so ROT13(ROT13(string)) === string
        return rotx.encrypt(plaintext,8);
    },
    decrypt: function(ciphertext) {  
        return rotx.decrypt(ciphertext,8);       
    }
};
