var _ = require('lodash');
var utf8 = require('utf8');

module.exports = {
    // modification for the fact that we're using a hex String
    // but still need 25 letters for the 5x5 polybius square
    letters: "0123456789abcdefghjiklmno",
    encrypt: function(plaintext, key, keyword) {            
        // convert plaint text to hex
        var hexString = string2Hex(utf8.encode(plaintext));
        var hexKey = string2Hex(utf8.encode(key));
        var hexKeyword = string2Hex(utf8.encode(keyword));
        
        // The key needs to be repeated until it's the same length as the text to encrypt
        var extendedKey = extendKey(hexKey, hexString.length);
        var polybiusSquare = this.buildPolybiusSquare(hexKeyword);
        var compTextArray = buildArray(hexString, polybiusSquare);
        var extKeyArray = buildArray(extendedKey, polybiusSquare);
        var cipherArray = [];

        // create the ciphertext by adding the plaintext and key together
        for (var i = 0; i<compTextArray.length; i++) {
            cipherArray.push(compTextArray[i] + extKeyArray[i]);
        }

       var ciphertext = cipherArray.join("");

       return ciphertext;

    },
    decrypt: function(ciphertext, key, keyword) {
        // decrypt
        var hexKey = string2Hex(utf8.encode(key));
        var hexKeyword = string2Hex(utf8.encode(keyword));

        var polybiusSquare = this.buildPolybiusSquare(hexKeyword);
        var extendedKey = extendKey(hexKey, ciphertext.length);
        var extKeyArray = buildArray(extendedKey, polybiusSquare);
        var plain = "";
        var decryptArray = [];
        var cipherArray = ciphertext.match(/.{1,2}/g);
        var decryptedText = "";
        
        // we're simply reversing the above process to decrypt
        for (var i = 0; i<cipherArray.length; i++) {
            decryptArray.push(cipherArray[i] - extKeyArray[i]);
        }

        // rebuild the original message by looking up letters in the square
        for (var i = 0; i < decryptArray.length; i++) {
            decryptedText += lookupLetter(decryptArray[i], polybiusSquare);
        }

        return hexToString(decryptedText);        
    },
    buildPolybiusSquare: function(keyword) {
        // Two options for a polybius square
        // polybius square - 5x5 = 25 letters. combine I/J
        // polybuis square - 6x6 = 26 letters + 0-9 digits
        // Keyword for square cannot have repetitive letters
        // or can, but must be filtered out, which this code does
        var polybiusLetters = keyword + this.letters; 
        var polybiusLetters = polybiusLetters.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
       
        var polybiusSquare = [[]];

        var index = 0;
        for (var i = 0; i<5; i++) {
            polybiusSquare[i] = [];
            for (var j = 0; j<5; j++) {       
                var letter = polybiusLetters[index];
                polybiusSquare[i][j] = letter;
                index++;
            }
        }

        return polybiusSquare;
    }
};

// Lookup letters in the square
function lookupLetter(chunk, polybiusSquare) {
    var coords = String(chunk).split("");
    var row = Number(coords[0]);
    var col = Number(coords[1]);

    // the row and col values have been increased by 1 to match the 1-5 values 
    // of a written polybius square. decrease by 1
    row--;
    col--;
    
    return polybiusSquare[row][col];
}

function buildArray(letters, polybiusSquare) {
    var returnArray = [];
    for (var i = 0; i<letters.length; i++) {
        var char = letters[i];
        returnArray.push(findChunk(char, polybiusSquare))
    }

    return returnArray;
}

// find a letter in the square
function findChunk(findMe, polybiusSquare) {
    for (var i = 0; i<5; i++) {
        for (var j = 0; j<5; j++) {
            if (polybiusSquare[i][j] === findMe) {
                // the Polybius square has rows and columns labeled 1,2,3,4,5
                // so increment the row and column for display
                i++;
                j++;
                return Number("" + i + j); // this is hacky, but it works
            }
        }
    }   
}

// extend the key to a predetermined length
function extendKey(key, length) {
    var longKey = key;
    while (longKey.length < length) {
        longKey += key;
    }
    return longKey.substring(0, length);
}

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