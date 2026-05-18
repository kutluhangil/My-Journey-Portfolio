# Formlardaki spesifik bilgiler

*Bir Form yaratmak biraz sipariş üzerine ayakkabı yapmaya benzer.*

*Form elemanları boyuta uygun olmalıdır: küçük cevaplar için <input> ve daha uzun yorumlar için <textarea>. Ayrıca, e-posta adresi girerken @ sembolünü uzun süre aramak gibi en küçük rahatsızlıkları öngörmek ve gidermek gerekmektedir.*

### **JavaScript Notları: `undefined` ve `null`**

`undefined` ve `null` her ikisi de bir değerin "boş" olduğunu ifade eder, ancak kullanım amaçları ve anlamları farklıdır. Aralarındaki farkı bilmek, kodunuzda mantıksal hataları önlemek için çok önemlidir.

### **`undefined` (Tanımsız)**

- **Anlamı:** Bir değişkenin **tanımlı olduğu** ancak henüz **değer atanmadığı** anlamına gelir.
- **Kim Atar?** JavaScript motoru tarafından otomatik olarak atanır.
- **Temel Durumları:**
    - Sadece `let degisken;` şeklinde tanımlanan, değer atanmamış değişkenler.
    - Bir değer döndürmeyen (`return` ifadesi olmayan veya boş olan) fonksiyonlar.
    - Bir nesnenin var olmayan bir özelliğine erişim denemesi.
- **`typeof` Sonucu:** `"undefined"`
- **Örnekler:**
    
    ```
    let adi; // Değer atanmadı.
    console.log(adi); // Çıktı: undefined
    
    function test() { /* ... */ } // Return ifadesi yok.
    console.log(test()); // Çıktı: undefined
    
    let kullanici = { ad: "Selin" };
    console.log(kullanici.soyad); // Soyad özelliği yok.
    console.log(typeof kullanici.soyad); // Çıktı: "undefined"
    
    ```
    

### **`null` (Boş)**

- **Anlamı:** Bir değişkenin **bilinçli olarak** ve açıkça bir değer içermediği anlamına gelir. Geliştirici, bu değişkeni "boş" olarak işaretler.
- **Kim Atar?** Geliştirici tarafından bilinçli olarak atanır.
- **Temel Durumları:**
    - Bir değişkenin değerini bilerek temizlemek istendiğinde.
    - Bir durumun "hiçbir şeye işaret etmediği" belirtilmek istendiğinde.
- **`typeof` Sonucu:** `"object"`
    - **Not:** Bu, JavaScript'in eski bir hatasıdır ve düzeltilmemiştir. Mantıksal olarak bir ilkel tiptir ancak `typeof` yanlış bir değer döndürür.
- **Örnekler:**
    
    ```
    let secilenUrun = null; // Başlangıçta boş bir değer atandı.
    console.log(secilenUrun); // Çıktı: null
    
    let sepet = ["elma", "armut"];
    sepet = null; // Sepet bilerek boşaltıldı.
    console.log(sepet); // Çıktı: null
    console.log(typeof null); // Çıktı: "object"
    
    ```
    

### **`undefined` ve `null` Karşılaştırması**

| **Özellik** | **undefined** | **null** |
| --- | --- | --- |
| **Anlamı** | Değer atanmamış. | Bilinçli olarak atanmış boş değer. |
| **Kim Atar?** | JavaScript motoru. | Geliştirici. |
| **`typeof`** | `"undefined"` | `"object"` |
| **Önemli Not** | Kodda değer atanmamış durumu belirtir. | Kodda bir değerin var olmadığını belirtmek için kullanılır. |

### **Eşitlik ve `Falsy` Davranışları**

- **`==` (Sadece Değer Eşitliği):**
    - `null` ve `undefined` değer olarak eşittir.
    - **Unutma:** `null == undefined` ifadesi `true` döner.
- **`===` (Değer ve Tip Eşitliği):**
    - `null` ve `undefined` hem değer hem de tip olarak eşit değildir.
    - **Unutma:** `null === undefined` ifadesi `false` döner.
- **`Falsy` (Yanlışlık) Değerler:**
    - Her ikisi de koşul ifadelerinde `false` olarak değerlendirilir.
    - **Unutma:** `if (undefined)` ve `if (null)` içindeki kod blokları **çalışmaz**.

[**Posta giriş alanı**](Formlardaki%20spesifik%20bilgiler/Posta%20giri%C5%9F%20alan%C4%B1%20242673274a8e80b2aa4af1b5d887ad45.md)

[**Şifre giriş alanı**](Formlardaki%20spesifik%20bilgiler/%C5%9Eifre%20giri%C5%9F%20alan%C4%B1%20242673274a8e8042a4a7e8238bc85bfb.md)

[**Telefon numaraları**](Formlardaki%20spesifik%20bilgiler/Telefon%20numaralar%C4%B1%20242673274a8e8023940acdc4d74b59ce.md)

[**Sayılar**](Formlardaki%20spesifik%20bilgiler/Say%C4%B1lar%20242673274a8e804eb594cb51f471886b.md)

[**Tarih ve saat**](Formlardaki%20spesifik%20bilgiler/Tarih%20ve%20saat%20242673274a8e809ca25ef38b9e4bf8d0.md)