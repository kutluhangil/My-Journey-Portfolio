# JavaScript “Kompleks” Veri Türleri

### **JavaScript'teki Kompleks (Non-Primitive / Referans) Veri Tipleri**

JavaScript'teki ilkel veri tipleri (string, number, boolean, undefined, null, symbol, bigint) tek ve basit değerleri tutarken, **kompleks veri tipleri** birden fazla veriyi düzenli bir şekilde depolayabilir ve daha karmaşık işlemler yapabilir. Bu tiplere "referans tipleri" denmesinin nedeni, bir değişkenin bu tür bir değeri tuttuğunda, aslında o değerin bellekteki konumunu (adresini) işaret etmesidir, doğrudan değeri değil.

**Neden Referans Tipleri Önemlidir?**

- **Bellek Yönetimi:** Karmaşık yapılar bellekte daha fazla yer kaplar. Referans tipleri, bu yapıları bellekte bir kez oluşturup, farklı değişkenlerin aynı bellek konumuna işaret etmesini sağlayarak bellek kullanımını optimize eder.
- **Esneklik:** Tek bir değişken altında birden fazla ilişkili veriyi (örneğin bir kişinin adı, yaşı, adres bilgisi) gruplamanıza olanak tanır.
- **Dinamik Değişim:** İlkel tiplerin aksine, referans tiplerinin içeriği, değişkenin kendisi yeniden atanmadan değiştirilebilir.

### **Kompleks Veri Tiplerinin Detaylı Açıklaması ve Örnekleri:**

Verdiğiniz listeyi takip ederek her bir kompleks veri tipini inceleyelim:

### **1. `Object` (Nesne)**

- **Açıklama:** JavaScript'in en temel kompleks veri yapısıdır. Anahtar-değer çiftlerinden (key-value pairs) oluşur. Her anahtar bir özelliğin adıdır ve bu özelliğin bir değeri vardır. Nesneler, gerçek dünyadaki varlıkları veya kavramları modellemek için kullanılır.
- **`typeof` Sonucu:** `"object"`
- **Örnek:**
    
    ```
    let kullanici = {
      ad: "Deniz",
      soyad: "Kara",
      yas: 28,
      email: "deniz.kara@example.com",
      aktif: true,
      adres: { // Nesne içinde başka bir nesne
        sehir: "İstanbul",
        ulke: "Türkiye"
      },
      selamla: function() { // Nesne içinde bir fonksiyon (metot)
        console.log(`Merhaba, ben ${this.ad} ${this.soyad}.`);
      }
    };
    
    console.log(kullanici.ad);           // Çıktı: Deniz
    console.log(kullanici.adres.sehir);  // Çıktı: İstanbul
    kullanici.selamla();                 // Çıktı: Merhaba, ben Deniz Kara.
    
    ```
    

### **2. `Array` (Dizi)**

- **Açıklama:** Sıralı bir liste veri yapısıdır. Birden fazla değeri tek bir değişkende, indeks numaralarıyla (0'dan başlayarak) depolamanızı sağlar. Diziler aslında özel bir tür nesnedir.
- **`typeof` Sonucu:** `"object"`
- **Örnek:**
    
    ```
    let meyveler = ["elma", "armut", "kiraz"]; // Bir dizi tanımlama
    console.log(meyveler[0]);     // Çıktı: elma (ilk elemana erişim)
    console.log(meyveler.length); // Çıktı: 3 (dizinin uzunluğu)
    
    meyveler.push("muz"); // Diziye yeni eleman ekleme
    console.log(meyveler); // Çıktı: ["elma", "armut", "kiraz", "muz"]
    
    ```
    

### **3. `Function` (Fonksiyon)**

- **Açıklama:** Belirli bir görevi yerine getiren, yeniden kullanılabilir kod bloklarıdır. JavaScript'te fonksiyonlar "first-class citizens" (birinci sınıf vatandaşlar) olarak kabul edilir, yani değişkenlere atanabilir, başka fonksiyonlara parametre olarak aktarılabilir ve fonksiyonlardan döndürülebilirler. Fonksiyonlar da aslında birer nesnedir.
- **`typeof` Sonucu:** `"function"` (Nesne olmasına rağmen, `typeof` özel olarak `"function"` döndürür.)
- **Örnek:**
    
    ```
    function toplama(a, b) {
      return a + b;
    }
    
    let carpma = function(a, b) { // Fonksiyonu bir değişkene atama
      return a * b;
    };
    
    console.log(toplama(5, 3)); // Çıktı: 8
    console.log(carpma(4, 2));  // Çıktı: 8
    
    ```
    

### **4. `Date` (Tarih)**

- **Açıklama:** Tarih ve saat bilgilerini tutmak ve bu bilgiler üzerinde çeşitli işlemler yapmak için kullanılır.
- **`typeof` Sonucu:** `"object"`
- **Örnek:**
    
    ```
    let simdi = new Date(); // Şu anki tarih ve saati içeren bir Date nesnesi
    console.log(simdi); // Çıktı: (Örn: Thu Jul 31 2025 02:08:00 GMT+0300 (GMT+03:00))
    
    let dogumGunu = new Date("1995-08-15"); // Belirli bir tarih
    console.log(dogumGunu.getFullYear()); // Çıktı: 1995
    
    ```
    

### **5. `RegExp` (Düzenli İfade)**

- **Açıklama:** Metin içinde belirli desenleri (pattern) aramak, eşleştirmek veya değiştirmek için kullanılan güçlü bir nesnedir.
- **`typeof` Sonucu:** `"object"`
- **Örnek:**
    
    ```
    let desen = /merhaba/i; // "merhaba" kelimesini büyük/küçük harf duyarsız ara
    let metin = "Merhaba Dünya!";
    console.log(desen.test(metin)); // Çıktı: true (metinde "Merhaba" geçtiği için)
    
    let epostaDeseni = /\S+@\S+\.\S+/; // Basit bir e-posta deseni
    console.log(epostaDeseni.test("test@example.com")); // Çıktı: true
    
    ```
    

### **6. `Map` (Harita)**

- **Açıklama:** Anahtar-değer çiftlerini tutan bir koleksiyondur. `Object`'ten farklı olarak, `Map`'lerde anahtar olarak herhangi bir veri tipi (obje, fonksiyon, hatta `null` veya `NaN`) kullanılabilir ve anahtarların sırası korunur.
- **`typeof` Sonucu:** `"object"`
- **Örnek:**
    
    ```
    let kullaniciAyarlari = new Map();
    kullaniciAyarlari.set("tema", "koyu");
    kullaniciAyarlari.set("dil", "Türkçe");
    kullaniciAyarlari.set({ id: 1 }, "Admin"); // Obje anahtar olarak kullanılabilir
    
    console.log(kullaniciAyarlari.get("tema")); // Çıktı: koyu
    console.log(kullaniciAyarlari.has("dil"));  // Çıktı: true
    
    ```
    

### **7. `Set` (Küme)**

- **Açıklama:** Tekrarsız (benzersiz) değerlerden oluşan bir koleksiyondur. Bir `Set`'e aynı değeri birden fazla eklemeye çalışsanız bile, yalnızca bir kez saklanır.
- **`typeof` Sonucu:** `"object"`
- **Örnek:**
    
    ```
    let sayilarKumesi = new Set([1, 2, 3, 2, 4]); // 2 bir kez saklanır
    console.log(sayilarKumesi); // Çıktı: Set { 1, 2, 3, 4 }
    
    sayilarKumesi.add(5);
    sayilarKumesi.add(1); // Zaten var olduğu için eklenmez
    console.log(sayilarKumesi.has(3)); // Çıktı: true
    
    ```
    

### **8. `Error` (Hata)**

- **Açıklama:** Çalışma zamanı hatalarını temsil eden bir nesnedir. Bir hata oluştuğunda (örneğin geçersiz bir işlem yapıldığında), bir `Error` nesnesi oluşturulur ve bu nesne hata mesajı, hata türü ve hata izi (stack trace) gibi bilgiler içerir. Genellikle `try...catch` bloklarında hataları yakalamak ve yönetmek için kullanılır.
- **`typeof` Sonucu:** `"object"`
- **Örnek:**
    
    ```
    try {
      throw new Error("Bu bir özel hatadır!"); // Yeni bir hata nesnesi oluşturma
    } catch (hata) {
      console.error(hata.name);    // Çıktı: Error
      console.error(hata.message); // Çıktı: Bu bir özel hatadır!
    }
    
    ```
    

### **Referans Tipi Kopyalama Notu: Adres Kopyalanır, Değer Değil**

Bu kompleks (referans) tiplerle çalışırken en önemli noktalardan biri, atama ve kopyalama davranışlarıdır:

- Bir değişkeni başka bir değişkene atadığınızda (örneğin `let yeniDizi = eskiDizi;`), aslında dizinin kendisi kopyalanmaz. Bunun yerine, `yeniDizi` de `eskiDizi` ile aynı bellek konumuna (aynı nesneye) işaret etmeye başlar.
- Bu nedenle, bir değişken aracılığıyla nesnede veya dizide yaptığınız herhangi bir değişiklik, diğer değişken aracılığıyla da görünür olacaktır, çünkü ikisi de aynı temel veriye başvurmaktadır.

**Örnek:**

```
let orijinalDizi = [1, 2, 3];
let kopyaDizi = orijinalDizi; // Kopyalama değil, referans ataması

kopyaDizi.push(4); // kopyaDizi üzerinden değişiklik yapıldı

console.log(orijinalDizi); // Çıktı: [1, 2, 3, 4] (orijinal dizi de değişti!)
console.log(kopyaDizi);    // Çıktı: [1, 2, 3, 4]

```

Eğer bir referans tipinin bağımsız bir kopyasını oluşturmak isterseniz, farklı yöntemler (örneğin diziler için `[...orijinalDizi]` spread operatörü, objeler için `{...orijinalObje}` veya `JSON.parse(JSON.stringify(orijinalObje))` gibi derin kopyalama teknikleri) kullanmanız gerekir.