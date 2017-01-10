var utf8 = require('utf8');

module.exports = {
    // modification for the fact that we're using a hex String
    // so the alphabet is 0-f
    letters: "0123456789abcdef",
    lettersArray: "0123456789abcdef".split(""),
    inverseLetter: "fdecba9876543210",
    inverseLetterArray: "fdecba9876543210".split(""),
    encrypt: function(plaintext) {            
        // convert plaint text to hex
        var hexString = string2Hex(utf8.encode(plaintext));
        var hexStringArray = hexString.split("");
        var ciphertext = "";

        hexStringArray.forEach(function(letter) {
            var index = this.letters.indexOf(letter);        
            ciphertext += this.inverseLetterArray[index];
        }.bind(this))

        return ciphertext;
    },
    decrypt: function(ciphertext) {        
        var hexStringArray = ciphertext.split(""); 
        var decryptedText = "";

        hexStringArray.forEach(function(letter) {
            var index = this.inverseLetterArray.indexOf(letter);
            decryptedText += this.lettersArray[index];
        }.bind(this))

        // convert hexstring to plaintext
        return hexToString(decryptedText);        
    }
};


function hexToString(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function string2Hex(tmp) {
    var str = '';
    for(var i = 0; i < tmp.length; i++) {
        str += tmp[i].charCodeAt(0).toString(16);
    }
    return str;
}