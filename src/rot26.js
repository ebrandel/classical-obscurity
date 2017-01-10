var utf8 = require('utf8');
var rotx = require('./rotx.js');

module.exports = {
    encrypt: function(plaintext) {            
        // rot26 has been modified to work more properly with our hex based alphabet
        // Traditionally it would rotate letters all the way around the alphabet. The hex alphabet is 16 characters
        return rotx.encrypt(plaintext,16);
    },
    decrypt: function(ciphertext) {  
        return rotx.decrypt(ciphertext,16);       
    }
};
