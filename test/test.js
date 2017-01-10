'use strict';

var expect = require('chai').expect;
var CryptoJS = require('crypto-js');
CryptoJS.classical = require('../index');

describe('#atbash', function() {
    it('should handle single digits', function() {
        var plaintext = "1";
        var ciphertext = CryptoJS.classical.atbash.encrypt(plaintext);
        var decipheredText = CryptoJS.classical.atbash.decrypt(ciphertext);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle long strings', function() {
        var plaintext = "The world isn't run by weapons anymore, or energy, or money. It's run by little ones and zeroes, little bits of data. It's all just electrons.";
        var ciphertext = CryptoJS.classical.atbash.encrypt(plaintext);
        var decipheredText = CryptoJS.classical.atbash.decrypt(ciphertext);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle extended characters', function() {
        var plaintext = "~!@#$%^&*()_+{}|:<>?-=[]\;',./";
        var ciphertext = CryptoJS.classical.atbash.encrypt(plaintext);
        var decipheredText = CryptoJS.classical.atbash.decrypt(ciphertext);
        expect(decipheredText).to.equal(plaintext);
    });
});

describe('#nihilist', function() {
    it('should handle single digits', function() {
        var plaintext = "1";
        var key = 'nihlism';
        var keyword = 'spiral';
        var ciphertext = CryptoJS.classical.nihilist.encrypt(plaintext, key, keyword);
        var decipheredText = CryptoJS.classical.nihilist.decrypt(ciphertext, key, keyword);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle long strings', function() {
        var plaintext = "The world isn't run by weapons anymore, or energy, or money. It's run by little ones and zeroes, little bits of data. It's all just electrons.";
        var key = 'nihlism';
        var keyword = 'spiral';
        var ciphertext = CryptoJS.classical.nihilist.encrypt(plaintext, key, keyword);
        var decipheredText = CryptoJS.classical.nihilist.decrypt(ciphertext, key, keyword);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle extended characters', function() {
        var plaintext = "~!@#$%^&*()_+{}|:<>?-=[]\;',./";
        var key = 'nihlism';
        var keyword = 'spiral';
        var ciphertext = CryptoJS.classical.nihilist.encrypt(plaintext, key, keyword);
        var decipheredText = CryptoJS.classical.nihilist.decrypt(ciphertext, key, keyword);
        expect(decipheredText).to.equal(plaintext);
    });
});

describe('#caesar', function() {
    it('should handle single digits', function() {
        var plaintext = "1";
        var offset = 6;        
        var ciphertext = CryptoJS.classical.caesar.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.caesar.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle long strings', function() {
        var plaintext = "The world isn't run by weapons anymore, or energy, or money. It's run by little ones and zeroes, little bits of data. It's all just electrons.";
        var offset = 6;        
        var ciphertext = CryptoJS.classical.caesar.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.caesar.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle extended characters', function() {
        var plaintext = "~!@#$%^&*()_+{}|:<>?-=[]\;',./";
        var offset = 6;        
        var ciphertext = CryptoJS.classical.caesar.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.caesar.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle long offsets', function() {
        var plaintext = "~!@#$%^&*()_+{}|:<>?-=[]\;',./";
        var offset = 4000;        
        var ciphertext = CryptoJS.classical.caesar.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.caesar.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });
});

describe('#rotx', function() {
    it('should handle single digits', function() {
        var plaintext = "1";
        var offset = 6;        
        var ciphertext = CryptoJS.classical.rotx.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.rotx.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle long strings', function() {
        var plaintext = "The world isn't run by weapons anymore, or energy, or money. It's run by little ones and zeroes, little bits of data. It's all just electrons.";
        var offset = 6;        
        var ciphertext = CryptoJS.classical.rotx.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.rotx.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle extended characters', function() {
        var plaintext = "~!@#$%^&*()_+{}|:<>?-=[]\;',./";
        var offset = 6;        
        var ciphertext = CryptoJS.classical.rotx.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.rotx.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle long offsets', function() {
        var plaintext = "~!@#$%^&*()_+{}|:<>?-=[]\;',./";
        var offset = 4000;        
        var ciphertext = CryptoJS.classical.rotx.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.rotx.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });
});

describe('#rot13', function() {
    it('should handle single digits', function() {
        var plaintext = "1";
        var offset = 6;        
        var ciphertext = CryptoJS.classical.rot13.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.rot13.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle long strings', function() {
        var plaintext = "The world isn't run by weapons anymore, or energy, or money. It's run by little ones and zeroes, little bits of data. It's all just electrons.";
        var offset = 6;        
        var ciphertext = CryptoJS.classical.rot13.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.rot13.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle extended characters', function() {
        var plaintext = "~!@#$%^&*()_+{}|:<>?-=[]\;',./";
        var offset = 6;        
        var ciphertext = CryptoJS.classical.rot13.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.rot13.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });
});

describe('#rot26', function() {
    it('should handle single digits', function() {
        var plaintext = "1";
        var offset = 6;        
        var ciphertext = CryptoJS.classical.rot26.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.rot26.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle long strings', function() {
        var plaintext = "The world isn't run by weapons anymore, or energy, or money. It's run by little ones and zeroes, little bits of data. It's all just electrons.";
        var offset = 6;        
        var ciphertext = CryptoJS.classical.rot26.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.rot26.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });

    it('should handle extended characters', function() {
        var plaintext = "~!@#$%^&*()_+{}|:<>?-=[]\;',./";
        var offset = 6;        
        var ciphertext = CryptoJS.classical.rot26.encrypt(plaintext, offset);
        var decipheredText = CryptoJS.classical.rot26.decrypt(ciphertext, offset);
        expect(decipheredText).to.equal(plaintext);
    });
});