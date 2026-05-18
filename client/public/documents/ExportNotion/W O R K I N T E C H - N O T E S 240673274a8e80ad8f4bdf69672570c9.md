# W O R K I N T E C H - N O T E S

---

### **JavaScript Değişkenleri: Veri Depolama ve Yönetimi**

Değişkenler, programlama dillerinde verileri geçici olarak depolamak ve bu verilere bir isim aracılığıyla erişmek için kullanılan adlandırılmış bellek konumlarıdır. Bir nevi, içine farklı türde bilgiler koyabileceğiniz "etiketli kutular" gibidirler.

**Neden Değişken Kullanırız?**

- **Veri Depolama:** Sayılar, metinler, doğru/yanlış değerleri gibi her türlü bilgiyi program içinde saklamamızı sağlarlar.
- **Veriye Erişim ve Yeniden Kullanım:** Bir veriyi bir kez bir değişkene atadığımızda, programın farklı yerlerinde o veriye değişkenin adını kullanarak kolayca erişebilir ve onu tekrar tekrar kullanabiliriz.
- **Dinamiklik:** Programın çalışması sırasında verilerin değişmesine olanak tanır.
- **Okunabilirlik ve Bakım:** Anlamlı değişken isimleri, kodun ne yaptığını anlamayı kolaylaştırır ve ileride değişiklik yapmayı basitleştirir.

**Örnek:** Facebook örneğiniz çok yerinde. Facebook'a giriş yaptığınızda, sistem sizin kullanıcı adınızı, profil resminizi, arkadaş listenizi vb. bilgileri değişkenlerde tutar. Sayfayı görüntülerken "Hoş geldin [kullanıcı adı]" gibi bir ifade gösterilmesi gerektiğinde, ilgili değişkene bakar ve o anki kullanıcının adını ekrana yansıtır. Bu sayede her kullanıcı kendi bilgilerini görür.

### **JavaScript'te Değişken Tanımlama Yöntemleri: `let` ve `const`**

Modern JavaScript'te değişken tanımlamak için ağırlıklı olarak `let` ve `const` anahtar kelimeleri kullanılır. Eski bir yöntem olan `var` da mevcuttur ancak yeni projelerde kullanımı önerilmez çünkü `let` ve `const` daha güvenli ve öngörülebilir davranışlar sunar.

### **1. `let` ile Değişken Tanımlama**

- **Değiştirilebilir Değer:** `let` ile tanımlanan bir değişkenin değeri sonradan değiştirilebilir (yeniden atanabilir).
- **Blok Kapsamı (Block Scope):** `let` değişkenleri, tanımlandıkları kod bloğu (`{ }` süslü parantezler arası) ile sınırlıdır. Bloğun dışından erişilemezler. Bu, kodunuzun daha düzenli ve hataya daha az yatkın olmasını sağlar.

**Formül:** `let degiskenAdi = deger;`

**Örnek:**

```
let kullaniciAdi = "Alice"; // kullaniciAdi değişkeni tanımlandı ve "Alice" değeri atandı.
console.log(kullaniciAdi); // Çıktı: Alice

kullaniciAdi = "Bob"; // kullaniciAdi değişkeninin değeri değiştirildi.
console.log(kullaniciAdi); // Çıktı: Bob

if (true) {
  let mesaj = "Merhaba!"; // mesaj değişkeni sadece bu blok içinde geçerlidir.
  console.log(mesaj); // Çıktı: Merhaba!
}
// console.log(mesaj); // Hata verir: mesaj is not defined (blok dışında olduğu için)

```

### **2. `const` ile Değişken Tanımlama**

- **Sabit Değer (Constant):** `const` ile tanımlanan bir değişkenin değeri, **tanımlandıktan sonra değiştirilemez (yeniden atanamaz)**. Bu nedenle, `const` değişkenleri tanımlanırken mutlaka bir başlangıç değeri atanmalıdır.
- **Blok Kapsamı (Block Scope):** Tıpkı `let` gibi, `const` değişkenleri de tanımlandıkları blok ile sınırlıdır.
- **Önemli Not (Referans Tipleri):** `const` bir değişkenin değerinin değiştirilemez olması, **ilkel (primitive) veri tipleri** (sayı, metin, boolean) için geçerlidir. Eğer `const` ile bir **referans tipi** (dizi veya obje) tanımlarsanız, değişkenin kendisi başka bir diziye/objeye yeniden atanamaz, ancak dizinin/objenin **içeriği** değiştirilebilir.

**Formül:** `const degiskenAdi = deger;` (değer ataması zorunludur)

**Örnek:**

```
const PI = 3.14159; // PI değişkeni tanımlandı ve değeri atandı.
console.log(PI); // Çıktı: 3.14159

// PI = 3.14; // Hata verir: Assignment to constant variable (değeri değiştirilemez)

const renkler = ["kırmızı", "mavi"]; // renkler dizisi tanımlandı.
console.log(renkler); // Çıktı: ["kırmızı", "mavi"]

renkler.push("yeşil"); // Dizinin içeriği değiştirilebilir.
console.log(renkler); // Çıktı: ["kırmızı", "mavi", "yeşil"]

// renkler = ["sarı", "mor"]; // Hata verir: Assignment to constant variable (değişkenin kendisi yeniden atanamaz)

```

### **Değişken Adlandırma Kuralları ve En İyi Uygulamalar**

Değişkenlerinize anlamlı ve okunabilir isimler vermek, kodunuzun kalitesini artırır.

- **Camel Case (Deve Kasa):** JavaScript'te en yaygın adlandırma kuralıdır. İlk kelime küçük harfle başlar, sonraki her kelimenin ilk harfi büyük olur.
    - `kullaniciAdi`
    - `urunFiyati`
    - `siparisNumarasi`
- **Anlamlı İsimler:** Değişkenin ne tür bir veri tuttuğunu açıkça belirten isimler kullanın. `x`, `y`, `temp` gibi genel isimlerden kaçının (kısa döngü sayaçları hariç).
- **Harf, Rakam, Alt Çizgi (**_**) ve Dolar İşareti ($$$):** Değişken isimleri harf, rakam, alt çizgi veya dolar işareti ile başlayabilir. Ancak rakamla başlayamaz.
    - `$fiyat`, `_sayac` geçerlidir.
    - `1sayi` geçersizdir.
- **Büyük/Küçük Harf Duyarlılığı:** JavaScript büyük/küçük harfe duyarlıdır. `kullaniciAdi` ile `KullaniciAdi` farklı değişkenlerdir.
- **Ayrılmış Kelimeler:** `let`, `const`, `function`, `if`, `for`, `while` gibi JavaScript'in kendi anahtar kelimeleri değişken adı olarak kullanılamaz.

### **Değişken Tanımlama Formülü ve Başlangıç Değeri**

Değişken tanımlamanın temel formülü şudur:

`let degiskenAdi = "deger";`

- `let` veya `const`: Değişkenin türünü belirler.
- `degiskenAdi`: Değişkene verdiğiniz isim (yukarıdaki kurallara uygun olmalı).
- `=`: Atama operatörü. Sağdaki değeri soldaki değişkene atar.
- `"deger"`: Değişkenin saklayacağı başlangıç değeri. Bu bir metin, sayı, boolean, obje veya başka bir veri tipi olabilir.
- `;`: İfade sonlandırıcısı. JavaScript'te isteğe bağlı olsa da, genellikle kullanılması iyi bir alışkanlıktır.

**Başlangıç Değeri Olmayan Değişkenler:**

Eğer bir değişkene başlangıç değeri atamazsanız, JavaScript ona otomatik olarak `undefined` (tanımsız) değerini atar. Bu, değişkenin var olduğu ancak henüz bir değer içermediği anlamına gelir.

**Örnek:**

```
let bosKutu; // Sadece değişken tanımlandı, değer atanmadı.
console.log(bosKutu); // Çıktı: undefined

bosKutu = 100; // Sonradan değer atanabilir.
console.log(bosKutu); // Çıktı: 100

```

**`const` ile boş kutu oluşturulamaz:**

`const` ile değişken tanımlarken mutlaka bir değer atamanız gerektiğini unutmayın. Aksi takdirde hata alırsınız:

```
// const PI; // Hata verir: Missing initializer in const declaration

```

### **Veri Tipleri (Kısaca)**

JavaScript'te değişkenler farklı türde verileri saklayabilir:

- **Primitive (İlkel) Tipler:**
    - `string`: Metin (`"Merhaba Dünya"`)
    - `number`: Sayılar (`10`, `3.14`)
    - `boolean`: Doğru veya yanlış (`true`, `false`)
    - `null`: Bilerek atanmış "hiçbir değer"
    - `undefined`: Değer atanmamış değişkenler
    - `symbol`: Benzersiz değerler (ES6 ile geldi)
    - `bigint`: Çok büyük sayılar (ES2020 ile geldi)
- **Non-Primitive (Referans) Tipler:**
    - `object`: Nesneler (örneğin `{ ad: "Ali", yaş: 30 }`)
    - `array`: Diziler (objelerin özel bir türü, örneğin `[1, 2, 3]`)
    - `function`: Fonksiyonlar (objelerin özel bir türü)

Değişkenler, atanan değere göre otomatik olarak veri tipini alırlar.

### **Kapsam (Scope) Kavramı (Kısaca)**

`let` ve `const` ile tanımlanan değişkenler **blok kapsamına** sahiptir. Bu, değişkenin sadece tanımlandığı süslü parantezler `{}` içinde erişilebilir olduğu anlamına gelir.

```
let globalDegisken = "Global";

if (true) {
  let blokDegiskeni = "Blok";
  console.log(globalDegisken); // Çıktı: Global (erişilebilir)
  console.log(blokDegiskeni);  // Çıktı: Blok (erişilebilir)
}

console.log(globalDegisken); // Çıktı: Global (erişilebilir)
// console.log(blokDegiskeni); // Hata: blokDegiskeni is not defined (blok dışında erişilemez)

```

Bu notlar, JavaScript değişkenleri hakkındaki temel bilgileri ve en iyi uygulamaları anlamanıza yardımcı olacaktır. Başka sorularınız olursa çekinmeyin!

[JavaScript Türleri](W%20O%20R%20K%20I%20N%20T%20E%20C%20H%20-%20N%20O%20T%20E%20S/JavaScript%20T%C3%BCrleri%20240673274a8e80b5b147ebb7c81ccb57.md)