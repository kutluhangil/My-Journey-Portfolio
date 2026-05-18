# JavaScript Basit Veri Tipi: Number (Metinler)

`String` veri tipi, JavaScript'te metinsel verileri temsil etmek için kullanılır. İsimler, adresler, mesajlar, cümleler veya herhangi bir karakter dizisi gibi metin tabanlı bilgileri depolamak için vazgeçilmezdir.

**1. Nasıl Tanımlanır?**

JavaScript'te bir metin (string) tanımlamak için metin değerini tek tırnak (`'...'`), çift tırnak (`"..."`) veya ters tırnak (backtick - ``...``) içine almanız gerekir.

- **Tek Tırnaklar:**
    
    ```
    let ad = 'Ayşe';
    let mesaj = 'Merhaba dünya!';
    
    ```
    
- **Çift Tırnaklar:**
    
    ```
    let soyad = "Yılmaz";
    let urunAdi = "Laptop Pro 15\""; // Çift tırnak içinde çift tırnak kullanmak için kaçış karakteri (\)
    
    ```
    
- **Ters Tırnaklar (Template Literals - Şablon Dizeleri):** ES6 (ECMAScript 2015) ile tanıtılan bu yöntem, çok daha esnek metin tanımlamaları sağlar.
    - **Çok Satırlı Metinler:** Metinleri birden fazla satıra yayabilirsiniz.
    - **Değişken Yerleştirme (Interpolation):** `${degiskenAdi}` sözdizimi ile JavaScript ifadelerini doğrudan metin içine yerleştirebilirsiniz.
    - **İfade Değerlendirme:** Sadece değişkenler değil, herhangi bir JavaScript ifadesi de `${}` içine yazılabilir.
    
    ```
    let kullanici = "Ali";
    let yas = 30;
    
    let karsilama = `Merhaba, benim adım ${kullanici} ve ben ${yas} yaşındayım.`;
    console.log(karsilama); // Çıktı: Merhaba, benim adım Ali ve ben 30 yaşındayım.
    
    let cokSatirliMesaj = `
      Bu,
      çok
      satırlı
      bir mesajdır.
    `;
    console.log(cokSatirliMesaj);
    
    let islemSonucu = `2 + 3 = ${2 + 3}`;
    console.log(islemSonucu); // Çıktı: 2 + 3 = 5
    
    ```
    

**2. Karakterlere Erişim ve Uzunluk**

Bir metin dizisindeki her karakter, bir indeks numarasına (0'dan başlayarak) sahiptir. Metin dizileri, diziler gibi indekslenebilir.

- **Karaktere Erişim:**
    
    ```
    let kelime = "JavaScript";
    console.log(kelime[0]); // Çıktı: J
    console.log(kelime[4]); // Çıktı: S
    
    ```
    
- **Uzunluk (`.length` Özelliği):** Bir metin dizisinin kaç karakterden oluştuğunu `.length` özelliği ile öğrenebilirsiniz.
    
    ```
    let cumle = "Bu bir cümledir.";
    console.log(cumle.length); // Çıktı: 16
    
    ```
    

**3. Değiştirilemezlik (Immutability)**

JavaScript'teki metin dizileri **değiştirilemez (immutable)** yapıdadır. Bu, bir metin dizisi oluşturulduktan sonra, içeriğinin doğrudan değiştirilemeyeceği anlamına gelir. Bir metin dizisi üzerinde bir işlem yaptığınızda (örneğin büyük harfe çevirme veya birleştirme), aslında orijinal metin dizisi değişmez, bunun yerine işlemin sonucunda **yeni bir metin dizisi** oluşturulur.

- **Örnek:**
    
    ```
    let orjinalMetin = "hello";
    let buyukHarfMetin = orjinalMetin.toUpperCase(); // Yeni bir metin dizisi oluşturulur
    
    console.log(orjinalMetin);    // Çıktı: hello (orijinal değişmedi)
    console.log(buyukHarfMetin); // Çıktı: HELLO
    
    ```
    

**4. Metin Birleştirme (Concatenation)**

Metin dizilerini birleştirmek için `+` operatörünü veya `.concat()` metodunu kullanabilirsiniz. Template literals da metin birleştirme için çok etkili bir yoldur.

- **`+` Operatörü:**
    
    ```
    let ad = "Can";
    let soyad = "Yılmaz";
    let tamAd = ad + " " + soyad;
    console.log(tamAd); // Çıktı: Can Yılmaz
    
    ```
    
- **`.concat()` Metodu:**
    
    ```
    let metin1 = "Merhaba";
    let metin2 = "Dünya";
    let birlesikMetin = metin1.concat(" ", metin2, "!");
    console.log(birlesikMetin); // Çıktı: Merhaba Dünya!
    
    ```
    

**5. Yaygın Metin Metotları**

`String` veri tipi, metinler üzerinde çeşitli işlemler yapmanızı sağlayan birçok kullanışlı metoda sahiptir:

- **`.toUpperCase()`:** Metni büyük harflere çevirir.
- **`.toLowerCase()`:** Metni küçük harflere çevirir.
    
    ```
    let mesaj = "JavaScript";
    console.log(mesaj.toUpperCase()); // Çıktı: JAVASCRIPT
    console.log(mesaj.toLowerCase()); // Çıktı: javascript
    
    ```
    
- **`.substring(startIndex, endIndex)`:** Belirtilen indeks aralığındaki bir kısmı yeni bir metin dizisi olarak döndürür. `endIndex` dahil değildir.
- **`.slice(startIndex, endIndex)`:** `substring`'e benzer, ancak negatif indeksleri de destekler (sondan sayar).
    
    ```
    let cumle = "Hello World";
    console.log(cumle.substring(0, 5)); // Çıktı: Hello
    console.log(cumle.slice(-5));      // Çıktı: World
    
    ```
    
- **`.indexOf(searchValue)`:** Bir metin dizisi içinde belirli bir değerin ilk geçtiği indeks numarasını döndürür. Bulamazsa `1` döndürür.
- **`.includes(searchValue)`:** Bir metin dizisi içinde belirli bir değerin olup olmadığını kontrol eder ve `true` veya `false` döndürür.
    
    ```
    let metin = "JavaScript öğreniyorum.";
    console.log(metin.indexOf("Script")); // Çıktı: 4
    console.log(metin.includes("öğreniyorum")); // Çıktı: true
    
    ```
    
- **`.replace(searchValue, replaceValue)`:** Metin dizisindeki ilk eşleşen değeri başka bir değerle değiştirir ve yeni bir metin dizisi döndürür.
- **`.replaceAll(searchValue, replaceValue)`:** Metin dizisindeki tüm eşleşen değerleri başka bir değerle değiştirir ve yeni bir metin dizisi döndürür (ES2021).
    
    ```
    let eskiMetin = "Elma, armut ve elma.";
    console.log(eskiMetin.replace("elma", "muz")); // Çıktı: Muz, armut ve elma.
    console.log(eskiMetin.replaceAll("elma", "muz")); // Çıktı: Muz, armut ve muz.
    
    ```
    
- **`.trim()`:** Bir metin dizisinin başındaki ve sonundaki boşlukları (boşluk karakterleri, yeni satırlar, tablar vb.) kaldırır.
    
    ```
    let boslukluMetin = "   Merhaba Dünya   ";
    console.log(boslukluMetin.trim()); // Çıktı: "Merhaba Dünya"
    
    ```
    
- **`.split(separator)`:** Bir metin dizisini belirtilen ayırıcıya göre bölerek bir dizi (Array) oluşturur.
    
    ```
    let kelimeler = "elma,armut,kiraz";
    let dizi = kelimeler.split(",");
    console.log(dizi); // Çıktı: ["elma", "armut", "kiraz"]
    
    ```
    

**6. Kaçış Karakterleri (Escape Characters)**

Metin dizisi içinde özel karakterleri (örneğin tırnak işaretleri) kullanmak veya belirli formatlamalar (yeni satır) eklemek için kaçış karakteri (`\`) kullanılır.

- `\'` : Tek tırnak
- `\"` : Çift tırnak
- `\\` : Ters eğik çizgi (backslash)
- `\n` : Yeni satır
- `\t` : Tab (sekme)
    
    ```
    let ornek = 'Bu bir "alıntı" içerir.';
    let yeniSatir = "İlk satır.\nİkinci satır.";
    console.log(ornek);
    console.log(yeniSatir);
    
    ```
    

**Özetle:**

`String` veri tipi, JavaScript'te metinsel verilerle çalışmak için temel bir araçtır. Değiştirilemez yapısı ve zengin metot kütüphanesi sayesinde, metinleri kolayca işleyebilir, dönüştürebilir ve analiz edebilirsiniz. Template literals ise modern JavaScript'te metin manipülasyonunu çok daha güçlü ve okunabilir hale getirir.

`Number` veri tipi, JavaScript'te sayısal verilerle çalışmak için temel bir yapı taşıdır. Kayan noktalı doğası nedeniyle hassasiyet limitleri ve `NaN` gibi özel değerleri anlamak, sayısal işlemler yaparken beklenmedik sonuçlarla karşılaşmamak için önemlidir.

Öncelikle, "enSevdigimMeyve" adında bir değişken oluşturmalıyız. Bu değişkenin değerini en sevdiğin meyve ile eşitleyeceğiz. Örneğin, eğer en sevdiğin meyve "elma" ise, kodumuz şöyle olacak:

```jsx
let enSevdigimMeyve = "elma";// Değişkeni oluşturduk ve değerini atadık
console.log("En sevdiğim meyve " + enSevdigimMeyve);// Konsola yazdırdık

```

Burada `let` anahtar kelimesi ile bir değişken oluşturuyoruz. `console.log` ise konsola yazdırmak için kullanılıyor.

```jsx
const ilkMetin = "Benim adım";
let isim;
const sonMetin = "Merhaba!";

```

Burada `ilkMetin` ve `sonMetin` sabit (const) olarak tanımlanmış. `isim` ise değişken (let) olarak tanımlanmış ama henüz bir değer verilmemiş.

Öncelikle `isim` değişkenine bir değer atamalıyız. Örneğin:

```jsx
isim = "Ahmet";// İsim değişkenine bir değer atıyoruz

```

Sonra, bu değişkenleri birleştirip konsola yazdırmak için `console.log` kullanabiliriz. İşte tam kod:

```jsx
const ilkMetin = "Benim adım";
let isim = "Ahmet";// İsim değişkenine bir değer atıyoruz
const sonMetin = "Merhaba!";

console.log(ilkMetin + " " + isim + ". " + sonMetin);

```