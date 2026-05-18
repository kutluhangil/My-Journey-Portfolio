# JavaScript Basit Veri Tipi: Boolean (Doğru-Yanlış)

`Boolean` veri tipi, programlamanın temelini oluşturan mantıksal bir veri tipidir. Sadece iki olası değeri vardır: `true` (doğru) ve `false` (yanlış). Bir durumun doğruluğunu veya yanlışlığını kontrol etmek için kullanılır.

**1. Ne Zaman ve Neden Kullanılır?**

`Boolean` değerleri, genellikle program akışını kontrol etmek için koşullu ifadelerle (örneğin `if`, `else`) birlikte kullanılır. Bir durumun koşula uyup uymadığını kontrol ederek, programın hangi kod bloğunu çalıştıracağına karar vermesini sağlar.

- **Örnek Kullanım Alanları:**
    - Bir kullanıcının oturum açıp açmadığını kontrol etme (`isLoggedIn: true/false`).
    - Bir formun geçerli olup olmadığını doğrulama (`isValidForm: true/false`).
    - Bir işlemin başarılı olup olmadığını belirleme (`isSuccess: true/false`).
    - Bir ayarın açık veya kapalı olduğunu gösterme (`isDarkMode: true/false`).

**2. Nasıl Tanımlanır?**

`Boolean` değerleri doğrudan `true` veya `false` anahtar kelimeleri kullanılarak tanımlanır.

- **Örnekler:**
    
    ```
    let kullaniciGirisYaptiMi = true;
    let urunStoktaYok = false;
    
    ```
    
- **Önemli Not:** `Boolean` değerleri metin olarak (`"true"`, `"false"`) yazılmaz. Tırnak işaretleri, onları bir `string` veri tipi yapar ve mantıksal bir değer olarak çalışmazlar.
    
    ```
    let dogruMetin = "true";
    console.log(typeof dogruMetin); // Çıktı: "string"
    
    ```
    

**3. Karşılaştırma Operatörleri ve `Boolean` Değerleri**

Karşılaştırma operatörleri (`>`, `<`, `===`, `!==`, vb.), her zaman bir `Boolean` değeri döndürür. Bu, onların bir koşulun sonucunu değerlendirmesi için ana mekanizmadır.

- **Örnekler:**
    
    ```
    let sayi1 = 10;
    let sayi2 = 20;
    
    console.log(sayi1 < sayi2);  // Çıktı: true
    console.log(sayi1 === 10);   // Çıktı: true (değer ve tip eşitliği)
    console.log(sayi1 !== sayi2); // Çıktı: true (eşit değil)
    console.log(sayi1 > sayi2);  // Çıktı: false
    
    ```
    

**4. Mantıksal Operatörler**

`Boolean` değerleri üzerinde işlem yapmak için mantıksal operatörler kullanılır.

- **`&&` (AND - Ve):** Her iki taraf da `true` ise `true` döner. Aksi halde `false` döner.
    
    ```
    let yetkili = true;
    let abone = true;
    
    if (yetkili && abone) {
      console.log("Yetkili ve abone girişi başarılı.");
    }
    
    ```
    
- **`||` (OR - Veya):** En az bir taraf `true` ise `true` döner. Her iki taraf da `false` ise `false` döner.
    
    ```
    let misafir = false;
    let admin = true;
    
    if (misafir || admin) {
      console.log("Sayfaya erişim izni var.");
    }
    
    ```
    
- **`!` (NOT - Değil):** Bir `Boolean` değerini tersine çevirir. `true` ise `false`, `false` ise `true` yapar.
    
    ```
    let islemBitti = false;
    if (!islemBitti) {
      console.log("İşlem henüz bitmedi.");
    }
    
    ```
    

**5. `Truthy` ve `Falsy` Değerler (Gerçeklik ve Yanlışlık)**

JavaScript'te bazı değerler `true` veya `false` olmamasına rağmen, koşullu ifadelerde `Boolean` değerleri gibi davranır. Bunlara `Truthy` (doğruluk) ve `Falsy` (yanlışlık) değerler denir.

- **`Falsy` (Yanlışlık) Değerler:** Koşul ifadelerinde `false` olarak değerlendirilen 6 değer vardır:
    1. `false`
    2. `0` (sıfır)
    3. `""` (boş metin dizisi)
    4. `null`
    5. `undefined`
    6. `NaN` (Not-a-Number)
- **`Truthy` (Doğruluk) Değerler:** Yukarıdaki 6 değer dışındaki tüm değerler `Truthy`'dir.
    - Örnekler: `true`, `1`, `"-1"`, `"Merhaba"`, `[]` (boş dizi), `{}` (boş nesne).
    
    ```
    let bosDizi = [];
    if (bosDizi) { // Dizi boş olmasına rağmen Truthy bir değer olduğu için koşul true döner.
      console.log("Bu kod çalışır.");
    }
    
    let sayi = 0;
    if (sayi) { // 0, Falsy bir değerdir.
      console.log("Bu kod çalışmaz.");
    }
    
    ```
    

Bu kavram, kod yazarken beklenmedik sonuçlar almamak için oldukça önemlidir. Bir değişkenin değerinin boş olup olmadığını kontrol ederken, sadece `if (degisken)` yazmak, `null`, `undefined` ve `""` gibi değerler için `false` döndürürken `[]` veya `{}` gibi boş nesneler için `true` döndürür.

**Özetle:**

`Boolean` veri tipi, programınızın mantıksal kararlar almasını sağlayan temel bir yapı taşıdır. `true` ve `false` değerleriyle birlikte koşul ve mantıksal operatörler, kodunuzun akışını dinamik olarak yönetmenize olanak tanır.