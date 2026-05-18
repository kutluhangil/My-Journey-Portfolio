# toLowerCase() ve toUpperCase() metodları

`toLowerCase()` ve `toUpperCase()` dize metodları, bir dizedeki karakterlerin harf durumunu (büyük/küçük) değiştirmek için kullanılır. Her iki yöntem de **orijinal dizeyi değiştirmez**, ancak uygun şekilde dönüştürülmüş **yeni bir dize** döndürür.

`toLowerCase()` metodu, orijinal dizedeki tüm karakterleri **küçük harflere dönüştürerek** yeni bir dize oluşturur.

`const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message); // "Welcome to Bahamas!"`

`toUpperCase()` metodu, orijinal dizenin tüm karakterlerinin büyük harfe dönüştürüldüğü yeni bir dize döndürür.

`const message = "Welcome to Bahamas!";
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"`

Duruma bir bakalım:

Bir anahtar kelime ararken, kullanıcı '`saMsUng`' dizesini girer ve bunun '`samsung`' veya '`SAMSUNG`' dizesiyle karşılaştırılması gerekir.

`console.log('saMsUng' === 'samsung'); *// false*console.log('saMsUng' === 'SAMSUNG'); *// false*`

Kesinlikle hassas giriş gerektirmemek için, kullanıcı tarafından girilen dizeyi "normalleştirebilir", yani tüm karakterlerini büyük veya küçük harfe dönüştürebilirsiniz.

`const brandName = 'samsung';
const userInput = 'saMsUng';
const lowercaseInput = userInput.toLowerCase();

console.log(brandName); *// 'samsung'*console.log(userInput); *// 'saMsUng'*console.log(userInput === brandName); *// false*console.log(lowercaseInput); *// 'samsung'*console.log(lowercaseInput === brandName); *// true*`

# **Öyleydi**

`normalizeInput(input, to)` işlevi iki parametre bildirir:

- `input` - duruma duyarlı hale getirilecek dize.
- `to` - `input` değerinin hangi duruma atılması gerektiğini açıklayan iki olası "`upper`" veya "`lower`" değerine sahip bir string.

İşlev kodunu aynı satırı döndürecek şekilde, ancak `to` kayıt defteri parametresinin karşılık gelen değerinde tamamlayın.

# **Öyle olacak**

`normalizeInput(input, to)` fonksiyonu iki parametre bildirir:

- `input` — belirli bir duruma dönüştürülmesi gereken bir dize.
- `to` — iki olası değere sahip bir dize: "`upper`" veya "`lower`", `input` değerinin hangi duruma dönüştürülmesi gerektiğini belirtir.

Fonksiyon kodunu şu şekilde tamamlayın:

- `to` parametresinin değeri "`upper`” ise — fonksiyon aynı dizeyi büyük harfle döndürür.
- Aksi takdirde, işlev aynı dizeyi küçük harfle döndürür.

# **Testler**

- `normalizeInput(input, to)` işlevi şöyle bildirilir.
- `normalizeInput("This ISN'T SpaM", "lower")` işlevinin çağrılması "`this isn't spam`" ifadesini döndürür.
- `normalizeInput("This ISN'T SpaM", "upper")` işlevi çağrıldığında "`THIS ISN'T SPAM`" döndürülür.
- `normalizeInput("Big SALE", "lower")` işlevi çağrıldığında "`big sale`" döndürülür.
- `normalizeInput("Big SALE", "upper")` işlevi çağrıldığında "`BIG SALE`" döndürülür.
- `normalizeInput("Stay Awhile and Listen", "lower")` işlevinin çağrılması "`stay awhile and listen`" döndürür.
- `normalizeInput("Stay While and Listen", "upper")` işlevi çağrıldığında "`STAY AWHILE AND LISTEN`" döndürülür.

function normalizeInput(input, to) {
if (to === "upper") {
return input.toUpperCase();
} else {
return input.toLowerCase();
}
}

// Testler
console.log(normalizeInput("This ISN'T SpaM", "lower")); // "this isn't spam"
console.log(normalizeInput("This ISN'T SpaM", "upper")); // "THIS ISN'T SPAM"
console.log(normalizeInput("Big SALE", "lower"));        // "big sale"
console.log(normalizeInput("Big SALE", "upper"));        // "BIG SALE"
console.log(normalizeInput("Stay Awhile and Listen", "lower")); // "stay awhile and listen"
console.log(normalizeInput("Stay Awhile and Listen", "upper")); // "STAY AWHILE AND LISTEN"