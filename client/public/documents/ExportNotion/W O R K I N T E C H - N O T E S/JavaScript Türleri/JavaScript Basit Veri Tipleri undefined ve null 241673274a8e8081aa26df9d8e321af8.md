# JavaScript Basit Veri Tipleri: undefined ve null

`undefined` ve `null`, JavaScript'te bir değerin "boş" veya "yok" olduğunu temsil eden iki özel ilkel veri tipidir. Her ne kadar benzer gibi görünseler de, aralarında önemli bir fark vardır.

**1. `undefined` (Tanımsız)**

- **Açıklama:** `undefined`, bir değişkenin **tanımlanmış ancak henüz bir değer atanmamış** olduğunu ifade eden otomatik bir değerdir. JavaScript, bir değişkene siz değer atamadan onu kullanmaya çalıştığınızda, bu değişkenin değerini otomatik olarak `undefined` olarak ayarlar.
- **Ne Zaman Karşılaşırız?**
    - Bir değişken tanımlanır, ancak ona bir başlangıç değeri atanmaz.
    - Bir fonksiyon, `return` ifadesiyle bir değer döndürmediğinde, otomatik olarak `undefined` döner.
    - Bir nesnenin mevcut olmayan bir özelliğine erişmeye çalıştığınızda.
- **Örnekler:**
    
    ```
    // 1. Değişken tanımlandı ancak değer atanmadı.
    let degisken;
    console.log(degisken); // Çıktı: undefined
    
    // 2. Fonksiyon bir değer döndürmüyor.
    function selamVer(ad) {
      console.log(`Merhaba, ${ad}`);
    }
    let fonksiyonSonucu = selamVer("Ayşe");
    console.log(fonksiyonSonucu); // Çıktı: undefined
    
    // 3. Mevcut olmayan nesne özelliğine erişim.
    let kullanici = { ad: "Ali" };
    console.log(kullanici.soyad); // Çıktı: undefined
    
    ```
    
- **Kısa Not:** `undefined` programcının değil, JavaScript motorunun bir değişkenin durumunu belirtmek için kullandığı bir değerdir.

**2. `null` (Boş)**

- **Açıklama:** `null`, bir değişkenin **bilinçli olarak bir değer içermediğini** ifade eden, geliştirici tarafından atanan bir değerdir. Bir değişkenin var olduğunu, ancak o anda bir değer tutmadığını belirtmek için kullanılır.
- **Ne Zaman Karşılaşırız?**
    - Bir değişkenin değerini bilerek temizlemek veya boş bırakmak istediğinizde.
    - Bir programda bir durumun "hiçbir şeye işaret etmediği" anlamına gelmesi gerektiğinde.
    - Örnek: Bir veritabanından bir kullanıcı aradınız ve bulunamadı. Fonksiyon `null` döndürebilir.
- **Örnekler:**
    
    ```
    // 1. Bilerek null değeri atama.
    let seciliUrun = null; // Başlangıçta hiçbir ürün seçili değil.
    console.log(seciliUrun); // Çıktı: null
    
    // 2. Sonradan değeri temizleme.
    let sepet = ["elma", "armut"];
    sepet = null; // Sepet içeriğini temizleme.
    console.log(sepet); // Çıktı: null
    
    ```
    
- **Kısa Not:** `null` bilinçli bir seçimi, programcının bir değeri açıkça "boş" olarak belirlediğini gösterir.

### **`undefined` ve `null` Arasındaki Fark**

| **Özellik** | **undefined** | **null** |
| --- | --- | --- |
| **Anlamı** | Bir değişkene değer atanmamış. | Bir değişkene bilinçli olarak boş bir değer atanmış. |
| **Kim Atar?** | JavaScript motoru. | Programcı. |
| **Veri Tipi (`typeof`)** | `"undefined"` | `"object"` (Eski bir JavaScript hatasıdır, ancak bu şekilde döner) |
| **Kullanımı** | Bir değişkenin henüz bir değere sahip olmadığını kontrol etmek için. | Bir değişkenin değerini bilerek sıfırlamak veya "boş" olduğunu belirtmek için. |

**3. Karşılaştırma ve Eşitlik Kontrolü**

Bu iki değer arasındaki farklılığı anlamak için eşitlik operatörlerini inceleyelim:

- **Çift Eşittir (`==`) - Sadece Değer Kontrolü:** Bu operatör, veri tiplerini göz ardı ederek sadece değerleri karşılaştırır. Bu yüzden `undefined` ve `null`'u eşit kabul eder.
    
    ```
    console.log(null == undefined); // Çıktı: true
    
    ```
    
- **Üçlü Eşittir (`===`) - Değer ve Tip Kontrolü:** Bu operatör hem değeri hem de veri tipini kontrol eder. `undefined`'ın tipi `"undefined"` iken `null`'un tipi `"object"` olduğu için, bu operatörle eşit kabul edilmezler.
    
    ```
    console.log(null === undefined); // Çıktı: false
    
    ```
    

**4. `Falsy` Değerler Olarak Davranışları**

Her iki değer de JavaScript'teki koşul ifadelerinde **`Falsy` (yanlışlık) değerler** olarak değerlendirilir. Bu, bir `if` ifadesinde her ikisi de `false` olarak kabul edilir ve kod bloğu çalıştırılmaz.

- **Örnek:**
    
    ```
    let bosDegisken1; // undefined
    let bosDegisken2 = null;
    
    if (bosDegisken1) {
      console.log("Bu kod çalışmaz.");
    }
    if (bosDegisken2) {
      console.log("Bu kod da çalışmaz.");
    }
    
    ```
    

**Özetle:**

- **`undefined`:** Bir değişkenin "tanımsız" olduğunu, yani henüz bir değere sahip olmadığını gösterir. Bu, JavaScript'in otomatik olarak atadığı bir durumdur.
- **`null`:** Bir değişkenin "boş" olduğunu, yani geliştirici tarafından bilinçli olarak bir değerden yoksun bırakıldığını belirtir.

Bir değişkenin boş olup olmadığını kontrol ederken, `if (degisken === null)` gibi bir ifadeyle belirli bir durumu (bilinçli boşaltılmış) kontrol edebilir veya `if (degisken === undefined)` ile bir diğer durumu (değer atanmamış) kontrol edebilirsiniz. Genellikle, bilinçli olarak bir değişkenin değerini temizlemek için `null` kullanmak en iyi uygulamadır.