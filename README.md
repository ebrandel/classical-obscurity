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


## Changlist
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