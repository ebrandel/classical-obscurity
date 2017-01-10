# classical-obscurity - The worst idea since ROT26.
Classical ciphers for use with crypto-js.

The goal is to create ciphers that honor their history and are as close to their normal implementation as possible, while still being actually utilizable.

However, this isn't to say they should be used. Utilizing anything here is foolish. These ciphers offer only minimal protection, mainly from the fact that they are somewhat obscure. And security through obscurity isn't really a thing.

# Usage
```
var CryptoJS = require('crypto-js');
CryptoJS.classical = require('classical-obscurity');
```

## Available Ciphers

### Atbash - CryptoJS.classical.atbash - Added in v0.0.3
The Atbash cipher simply flips the alphabet. In normal usage, an A becomes a Z, a B becomes a Y, and so on.

```
var plaintext = "We protect our government's communications, we try to break the other fella's codes. We're the good guys, Marty.";

var ciphertext = CryptoJS.classical.atbash.encrypt(plaintext);
var decipheredText = CryptoJS.classical.atbash.decrypt(ciphertext);
```
> Atbash is a mono-alphabetic substitution cipher originally used to encode the Hebrew alphabet. It can be modified for use with any known alphabet. 
Read more: https://en.wikipedia.org/wiki/Atbash

### Caesar - CryptoJS.classical.caesar - Added in v0.2.0
The Caesar cipher, or shift cipher, is one of the most commonly known classical ciphers. It simply shifts letters down the alphabet. In this case, our alphabet are hex values.

```
var plaintext = "So, people hire you to break into their places... to make sure no one can break into their places?";
var rotation = 7;
var ciphertext = CryptoJS.classical.caesar.encrypt(plaintext, rotation);
var decipheredText = CryptoJS.classical.caesar.decrypt(ciphertext, rotation);
```
> In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.
Read more: https://en.wikipedia.org/wiki/Caesar_cipher


### Nihilist - CryptoJS.classical.nihilist - Added in v0.0.2
Both ends of the communication need to know the key and the keyword. Possible future versions may allow for a multistage encrypt and decrypt process which would be even closer to the original usage.

```
var plaintext = "No Its THE code breaker. No more secrets.";
var key = "russia";
var keyword = "nihilism";

var ciphertext = CryptoJS.classical.nihilist.encrypt(plaintext, key, keyword);
var decipheredText = CryptoJS.classical.nihilist.decrypt(ciphertext, key, keyword);

```
>In the history of cryptography, the Nihilist cipher is a manually operated symmetric encryption cipher originally used by Russian Nihilists in the 1880s to organize terrorism against the tsarist regime. The term is sometimes extended to several improved algorithms used much later for communication by the First Chief Directorate with its spies.
Read more: https://en.wikipedia.org/wiki/Nihilist_cipher

### ROT13 - CryptoJS.classical.rot13 - Added in v0.2.0
ROT13 is a special case of the shift or Caesar cipher. In common use, ROT13 shifts the letters 13 spaces and, since the alphabet has 26 letters, doing ROT13 twice ends up returning the original message.

To honor this, and still work with the hex alphabet, rot13 actually moves 8 characters, which is half of the hex alphabet's length.

```
var plaintext = "SETEC ASTRONOMY... TOO MANY SECRETS";

var ciphertext = CryptoJS.classical.rot13(plaintext);
var decipheredText = CryptoJS.classical.rot13(ciphertext);
```
> Because there are 26 letters (2×13) in the basic Latin alphabet, ROT13 is its own inverse; that is, to undo ROT13, the same algorithm is applied, so the same action can be used for encoding and decoding. The algorithm provides virtually no cryptographic security, and is often cited as a canonical example of weak encryption
Read more: https://en.wikipedia.org/wiki/ROT13

### ROT26 - CryptoJS.classical.rot26 - Added in v0.2.0
ROT26 is just like ROT13, but twice as secure.

```
var plaintext = "There I was in prison. And one day I helped a couple of nice older gentlemen make some free telephone calls.";

var ciphertext = CryptoJS.classical.rot26(plaintext);
var decipheredText = CryptoJS.classical.rot26(ciphertext);
```
> Instead of only rotating 13 places, ROT26 rotates twice as many characters in the alphabet and is therefore twice as secure.
Read more: http://rot26.org/

## Changelist
#### v0.2.0
Added Caesar, ROT13, and ROT26 support. All driven by rotx.

#### v0.1.0
Tests added. Initial public release

#### v0.0.3
Added Atbash cipher support

#### v0.0.2
Added Nihilist cipher support

#### v0.0.1
Nothing

## FAQ
##### Does this actually require CryptoJS?
Currrently it does not really need it, although this may change in the future. If you don't want to use CryptoJS, instead of requiring it, do this instead:
```
var CryptoJS = {};
CryptoJS.classical = require('classical-obscurity');
```

##### Why CrytoJS.classical.nihilist, and not just Cryptical.nihilist?
Not that this package should ever be really used, but I wanted to keep the foolishness more contained.