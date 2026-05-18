# JavaScript Türleri

JavaScript, dinamik olarak tipleştirilmiş (dynamically typed) bir dildir. Bu, bir değişkenin veri tipini tanımlarken belirtmenize gerek olmadığı ve bir değişkenin değerinin tipi çalışma zamanında değişebileceği anlamına gelir. JavaScript'te iki ana kategori altında toplanan toplam **8 adet veri tipi** bulunur:

### **1. İlkel (Primitive) Veri Tipleri (7 Adet)**

İlkel veri tipleri, tek bir değeri temsil eden ve doğrudan değişkenin kendisinde saklanan basit veri tipleridir. Değerleri değiştirilemez (immutable) olarak kabul edilirler; yani bir ilkel tipi değiştirdiğinizde, aslında yeni bir değer oluşturmuş olursunuz.

### **a) `string` (Metin Dizisi)**

Metin verilerini temsil eder. Tek tırnak (`'...'`), çift tırnak (`"..."`) veya ters tırnak (backtick - ``...``) içinde tanımlanır. Ters tırnaklar (template literals) özellikle çok satırlı metinler ve değişkenleri metin içine kolayca yerleştirmek için kullanışlıdır.

- **Örnekler:**
    
    ```
    let ad = "Ayşe";
    let soyad = 'Yılmaz';
    let tamAd = `Benim adım ${ad} ${soyad}.`; // Template literal kullanımı
    
    ```
    

### **b) `number` (Sayı)**

Hem tam sayıları (integers) hem de ondalık sayıları (floating-point numbers) temsil eder. JavaScript'te sayılar 64-bit çift duyarlıklı kayan nokta formatında saklanır. Özel sayı değerleri de vardır: `Infinity` (sonsuzluk), `-Infinity` (eksi sonsuzluk) ve `NaN` (Not-a-Number - bir sayı değil).

- **Örnekler:**
    
    ```
    let yas = 30;
    let fiyat = 99.99;
    let sonuc = 10 / 0; // Infinity
    let hata = "Merhaba" / 2; // NaN
    
    ```
    

### **c) `boolean` (Mantıksal)**

Sadece iki değeri olabilir: `true` (doğru) veya `false` (yanlış). Genellikle koşullu ifadelerde (if-else) ve mantıksal işlemlerde kullanılır.

- **Örnekler:**
    
    ```
    let aktifMi = true;
    let yetkiliMi = false;
    
    ```
    

### **d) `undefined` (Tanımsız)**

Bir değişkene değer atanmadığında veya bir fonksiyon bir değer döndürmediğinde otomatik olarak atanan özel bir tiptir. Bir değişkenin tanımlandığını ancak henüz bir değer içermediğini gösterir.

- **Örnekler:**
    
    ```
    let x; // Değer atanmadığı için x'in değeri undefined'dır.
    console.log(x); // Çıktı: undefined
    
    function test() {
      // Değer döndürmediği için undefined döner.
    }
    let sonuc = test();
    console.log(sonuc); // Çıktı: undefined
    
    ```
    

### **e) `null` (Boş)**

Bilerek atanmış "hiçbir değer" veya "boş değer" anlamına gelen özel bir tiptir. `undefined`'dan farklı olarak, `null` bir geliştirici tarafından açıkça atanan bir değerdir.

- **Örnekler:**
    
    ```
    let seciliUrun = null; // Bilerek boş bir değer atandı.
    console.log(seciliUrun); // Çıktı: null
    
    ```
    
- **Önemli Not:** `typeof null` ifadesi `object` döndürür. Bu, JavaScript'in ilk sürümlerinden kalma ve düzeltilmemiş bir hatadır. Mantıksal olarak `null` bir ilkel tiptir.

### **f) `symbol` (Sembol)**

ES6 (ECMAScript 2015) ile tanıtılmıştır. Her zaman benzersiz ve değiştirilemez bir değer oluşturur. Genellikle nesne özelliklerinin çakışmasını önlemek için kullanılır, özellikle kütüphane veya framework geliştirirken.

- **Örnekler:**
    
    ```
    const id1 = Symbol('id');
    const id2 = Symbol('id');
    console.log(id1 === id2); // Çıktı: false (her ikisi de benzersizdir)
    
    let kullanici = {
      ad: "Ali",
      [id1]: 123 // Symbol bir obje anahtarı olarak kullanılabilir
    };
    
    ```
    

### **g) `bigint` (Büyük Tam Sayı)**

ES2020 ile tanıtılmıştır. JavaScript'in `number` tipiyle temsil edilemeyecek kadar büyük tam sayıları (yani 253−1'den büyük veya −253−1'den küçük) temsil etmek için kullanılır. Bir sayının sonuna `n` eklenerek veya `BigInt()` fonksiyonuyla oluşturulur.

- **Örnekler:**
    
    ```
    const buyukSayi = 9007199254740991n; // Sonundaki 'n' BigInt olduğunu belirtir.
    const baskaBuyukSayi = BigInt("12345678901234567890");
    
    ```
    

### **2. İlkel Olmayan (Non-Primitive / Referans) Veri Tipleri (1 Adet)**

İlkel olmayan veri tipleri, birden fazla değeri veya daha karmaşık yapıları temsil ederler. Bu tipler doğrudan değişkenin kendisinde saklanmaz; değişken, bellekteki değerin adresini (referansını) tutar. Bu nedenle, bu tiplere "referans tipleri" de denir.

### **a) `object` (Nesne)**

JavaScript'teki tüm ilkel olmayan veri tipleri aslında birer nesnedir. Nesneler, anahtar-değer çiftlerinden oluşan koleksiyonlardır. Verileri ve bu veriler üzerinde işlem yapabilen fonksiyonları (metotları) bir araya getirmek için kullanılırlar.

- **Örnekler:**
    
    ```
    // Genel bir obje
    let kisi = {
      ad: "Mehmet",
      yas: 25,
      hobiler: ["kitap okumak", "yürüyüş yapmak"]
    };
    
    // Diziler (Arrays) de birer objedir
    let sayilar = [1, 2, 3, 4, 5]; // typeof sayilar -> "object"
    
    // Fonksiyonlar (Functions) da birer objedir
    function selamVer() {
      console.log("Merhaba!");
    } // typeof selamVer -> "function" (özel bir obje türü)
    
    // Tarih (Date) nesneleri
    let bugun = new Date(); // typeof bugun -> "object"
    
    // Düzenli İfadeler (RegExp)
    let desen = /abc/; // typeof desen -> "object"
    
    ```
    

### **`typeof` Operatörü**

Bir değişkenin veya değerin veri tipini öğrenmek için `typeof` operatörünü kullanabilirsiniz.

- **Örnekler:**
    
    ```
    console.log(typeof "Merhaba");   // Çıktı: "string"
    console.log(typeof 123);        // Çıktı: "number"
    console.log(typeof true);       // Çıktı: "boolean"
    console.log(typeof undefined);  // Çıktı: "undefined"
    console.log(typeof null);       // Çıktı: "object" (JavaScript'in eski bir hatası)
    console.log(typeof Symbol('foo')); // Çıktı: "symbol"
    console.log(typeof 10n);        // Çıktı: "bigint"
    console.log(typeof {});         // Çıktı: "object"
    console.log(typeof []);         // Çıktı: "object"
    console.log(typeof function(){}); // Çıktı: "function" (objenin özel bir türü)
    
    ```
    

[JavaScript “Kompleks” Veri Türleri](JavaScript%20T%C3%BCrleri/JavaScript%20%E2%80%9CKompleks%E2%80%9D%20Veri%20T%C3%BCrleri%20240673274a8e80d485cced85a639ec34.md)

[**JavaScript Basit Veri Tipi: `Number` (Metinler)**](JavaScript%20T%C3%BCrleri/JavaScript%20Basit%20Veri%20Tipi%20Number%20(Metinler)%20241673274a8e8080959ef12e07b8e1c5.md)

[**JavaScript Basit Veri Tipi: `Number` (Sayılar)**](JavaScript%20T%C3%BCrleri/JavaScript%20Basit%20Veri%20Tipi%20Number%20(Say%C4%B1lar)%20241673274a8e80b8b64fdcfb60f1161e.md)

[**JavaScript Basit Veri Tipi: `Boolean` (Doğru-Yanlış)**](JavaScript%20T%C3%BCrleri/JavaScript%20Basit%20Veri%20Tipi%20Boolean%20(Do%C4%9Fru-Yanl%C4%B1%C5%9F)%20241673274a8e801e81e0c5f07a506f5d.md)

[**JavaScript Basit Veri Tipleri: `undefined` ve `null`**](JavaScript%20T%C3%BCrleri/JavaScript%20Basit%20Veri%20Tipleri%20undefined%20ve%20null%20241673274a8e8081aa26df9d8e321af8.md)