# JavaScript Basit Veri Tipi: Number (Sayılar)

`Number` veri tipi, JavaScript'te hem tam sayıları (integers) hem de ondalık sayıları (floating-point numbers) temsil etmek için kullanılır. Programlamada matematiksel işlemler yapmak, miktarları, fiyatları, boyutları ve benzeri sayısal verileri depolamak için vazgeçilmezdir.

**1. Nasıl Tanımlanır?**

JavaScript'te bir sayı tanımlamak için özel bir anahtar kelimeye ihtiyacınız yoktur. Doğrudan sayısal değeri yazmanız yeterlidir.

- **Tam Sayılar:**
    
    ```
    let yas = 30;
    let urunAdedi = 150;
    
    ```
    
- **Ondalık Sayılar (Kayan Noktalı Sayılar):**
    
    ```
    let fiyat = 29.99;
    let piSayisi = 3.14159;
    
    ```
    
- **Negatif Sayılar:**
    
    ```
    let sicaklik = -5;
    
    ```
    

**2. Bellekte Saklanma Şekli (IEEE 754 Standardı)**

JavaScript'teki tüm sayılar, 64**-bit çift duyarlıklı kayan nokta (double-precision floating-point)** formatında saklanır. Bu, IEEE 754 standardı olarak bilinir.

- **Anlamı:**
    - 64**bit:** Sayıyı depolamak için 64 bitlik (ikili hane) bir alan kullanılır.
    - **Çift Duyarlıklı:** Tek duyarlıklı (single-precision) sayılara göre daha fazla hassasiyet ve daha geniş bir sayı aralığı sunar.
    - **Kayan Noktalı:** Sayının ondalık kısmının "kayan" bir noktayla temsil edildiği anlamına gelir, bu da çok büyük veya çok küçük sayıları temsil etmeyi mümkün kılar.
- **Sonuçları:**
    - **Hassasiyet Sınırı:** 64-bit kayan nokta formatı, tüm sayıları sonsuz hassasiyetle temsil edemez. Özellikle çok büyük tam sayılarda veya belirli ondalık sayılarda hassasiyet kayıpları yaşanabilir. JavaScript'te güvenli bir şekilde temsil edilebilen tam sayılar −(253−1) ile 253−1 (9,007,199,254,740,991) arasındadır. Bu aralık dışındaki tam sayılar için `BigInt` veri tipi kullanılmalıdır.
    - **Ondalık Sayı Problemleri:** Kayan noktalı sayıların ikili (binary) sistemde tam olarak temsil edilememesinden kaynaklanan klasik bir problem vardır. Örneğin, 0.1+0.2 işlemi bazı dillerde olduğu gibi JavaScript'te de tam olarak 0.3 sonucunu vermeyebilir, bunun yerine 0.30000000000000004 gibi bir sonuç verebilir.
        
        ```
        console.log(0.1 + 0.2); // Çıktı: 0.30000000000000004
        console.log((0.1 * 10 + 0.2 * 10) / 10); // Çözüm yollarından biri
        
        ```
        

**3. Matematiksel Operatörler**

Sayılar üzerinde standart matematiksel işlemler yapabilirsiniz:

- `+` (Toplama)
- (Çıkarma)
- (Çarpma)
- `/` (Bölme)
- `%` (Modülo - Kalanı bulma)
- `*` (Üs alma - ES2016)
- **Örnekler:**
    
    ```
    let a = 10;
    let b = 3;
    
    console.log(a + b); // Çıktı: 13
    console.log(a - b); // Çıktı: 7
    console.log(a * b); // Çıktı: 30
    console.log(a / b); // Çıktı: 3.3333333333333335
    console.log(a % b); // Çıktı: 1
    console.log(a ** b); // Çıktı: 1000 (10 üzeri 3)
    
    ```
    

**4. Özel Sayı Değerleri**

JavaScript'in `Number` tipiyle birlikte gelen bazı özel değerler vardır:

- **`Infinity` (Sonsuzluk):** Pozitif sonsuzluğu temsil eder. Bir sayıyı sıfıra böldüğünüzde veya çok büyük bir sayıya ulaştığınızda elde edilir.
    
    ```
    console.log(1 / 0); // Çıktı: Infinity
    console.log(Number.MAX_VALUE * 2); // Çıktı: Infinity
    
    ```
    
- **`Infinity` (Eksi Sonsuzluk):** Negatif sonsuzluğu temsil eder.
    
    ```
    console.log(-1 / 0); // Çıktı: -Infinity
    
    ```
    
- **`NaN` (Not-a-Number - Bir Sayı Değil):** Geçersiz veya tanımsız matematiksel işlemlerin sonucunu temsil eder. Örneğin, bir metni bir sayıya bölmeye çalıştığınızda `NaN` elde edersiniz.
    - **Önemli:** `NaN`'in kendisiyle bile eşit olmaması gibi ilginç bir özelliği vardır (`NaN === NaN` `false` döner). Bir değerin `NaN` olup olmadığını kontrol etmek için `isNaN()` fonksiyonu veya daha güvenli olan `Number.isNaN()` kullanılır.
    
    ```
    console.log("merhaba" / 2); // Çıktı: NaN
    console.log(0 / 0);         // Çıktı: NaN
    console.log(Math.sqrt(-1)); // Çıktı: NaN
    
    console.log(NaN === NaN);     // Çıktı: false
    console.log(isNaN("merhaba")); // Çıktı: true
    console.log(Number.isNaN("merhaba")); // Çıktı: false (daha katı kontrol)
    console.log(Number.isNaN(0 / 0));     // Çıktı: true
    
    ```
    

**5. `Number` Nesnesi ve Metotları**

`Number` aynı zamanda bir global nesnedir ve sayısal değerler üzerinde işlem yapmanızı sağlayan çeşitli metotlara sahiptir. İlkel sayı değerleri, bu nesnenin metotlarını kullanmak için otomatik olarak geçici olarak bir `Number` nesnesine dönüştürülür.

- **`toFixed(digits)`:** Bir sayıyı belirli sayıda ondalık basamağa yuvarlar ve bir `string` olarak döndürür.
    
    ```
    let num = 123.456;
    console.log(num.toFixed(2)); // Çıktı: "123.46" (string)
    
    ```
    
- **`toPrecision(precision)`:** Bir sayıyı belirli bir toplam basamak sayısına (ondalık ve tam sayı dahil) yuvarlar ve bir `string` olarak döndürür.
    
    ```
    let num = 123.456;
    console.log(num.toPrecision(4)); // Çıktı: "123.5" (string)
    
    ```
    
- **`parseInt(string)`:** Bir metin dizisini tam sayıya dönüştürmeye çalışır.
- **`parseFloat(string)`:** Bir metin dizisini kayan noktalı sayıya dönüştürmeye çalışır.
    
    ```
    console.log(parseInt("100px"));   // Çıktı: 100
    console.log(parseFloat("10.5em")); // Çıktı: 10.5
    console.log(parseInt("abc"));     // Çıktı: NaN
    
    ```
    

Aşağıda istediğin gibi `const` kullanarak `sayi1` ve `sayi2` adında iki değişken oluşturup, her birinde `Math.random()` ile ürettiğimiz sayıları saklayıp, bu sayıların toplamını konsola yazdıran bir örnek kod bulabilirsin:

```jsx
const sayi1 = Math.random();// 0 ile 1 arasında rastgele bir sayı
const sayi2 = Math.random();// 0 ile 1 arasında rastgele bir sayı

const toplam = sayi1 + sayi2;// İki sayının toplamı
console.log(toplam);// Toplamı konsola yazdır

```

Bu kodu çalıştırdığında, `sayi1` ve `sayi2` değişkenlerinde rastgele sayılar olacak ve bu sayıların toplamı konsolda görünecektir. Başka bir sorunuz olursa sormaktan çekinmeyin!

Ahmet'in yaşını hesaplamak için önce bir değişken tanımlayacağız ve ardından bu değişkenleri kullanarak yaşını hesaplayacağız. İşte adım adım nasıl yapabileceğin:

1. **Değişkenleri Tanımla**: `dogumYili` ve `yil` adında iki değişken tanımlayacağız. `dogumYili` Ahmet'in doğum yılı olacak, `yil` ise şu anki yılı temsil edecek.
2. **Yaşı Hesapla**: Ahmet'in yaşını hesaplamak için `yil`'den `dogumYili`'ni çıkaracağız.
3. **Sonucu Konsola Yazdır**: Hesapladığımız yaşı konsola yazdıracağız.

İşte kod örneği:

```jsx
let dogumYili = 1992;// Ahmet'in doğum yılı
let yil = 2023;// Şu anki yıl

let yas = yil - dogumYili;// Ahmet'in yaşı

console.log("Ahmet'in 2023 yılındaki yaşı " + yas);// Sonucu konsola yazdır

```

Bu kodu çalıştırdığında, konsolda "Ahmet'in 2023 yılındaki yaşı 31" yazacaktır. Parantez kullanmamıza gerek yok çünkü çıkarma işlemi toplama işleminden önce yapılır. Eğer daha karmaşık bir işlem olsaydı, parantez kullanmak önemli olabilirdi.

Herhangi bir sorunuz olursa sormaktan çekinmeyin!