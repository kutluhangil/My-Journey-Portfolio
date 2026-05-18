# Template Stringler

Template string'ler, **statik** metni **dinamik** içeriklerle (örneğin değişkenler, hesaplamalar vb.) birleştirmeyi kolaylaştıran bir sözdizimidir.

Bu yapı, karmaşık ve kafa karıştırıcı birleştirme işlemlerinden kaçınmanıza ve kodunuzu daha okunabilir hale getirmenize yardımcı olur.

# **Template string sözdizimi**

1. Template stringler ters tırnak işaretleriyle sarılır (````)

```
Uyarı
Template stringleri normal tek veya çift tırnak işaretleriyle sararsanız kod çalışmaz.

```

`` tırnak işaretlerini geri eklemek için İngilizce düzenine gidin ve

- ~ tuşuna (bkz. aşağıda 1–3)

Ya da

- Klavye kısayolları (bkz. aşağıda 4)

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/ba5e8081-5485-433d-b639-ab984e0289e9m01-b03-s03.jpg)

2.  Şablon dizeleri, **enterpolasyon sözdizimi** kullanarak `${degisken}` biçiminde değişken değerlerini doğrudan dizenin içinde kullanmanıza olanak tanır.

`const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); *// "Welcome Mango, your room number is 207!"*`

Yukarıdaki örnekte, `guestName` ve `roomNumber` değişkenlerinin değerlerini doğrudan dizeye yerleştirmek için enterpolasyon (`${}` yapısı) kullandık. Bu dize oluşturulurken, değişkenlerin değerleri, karşılık gelen enterpolasyon yerlerinde otomatik olarak yerleştirilir.

# **Birleştirme ve şablon dizelerinin karşılaştırılması**

Birleştirme işlemiyle yazılan bu kodda:

- `"Hoş geldiniz "`, `"oda numaranız "` ve `"!"` **statik metinlerdir.**
- `guestName` ve `roomNumber` ise **değişken isimleridir.**
- 

`const guestName = "Mango";
const roomNumber = 207;
const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); *// "Welcome Mango, your room number is 207!"*`

Bu, değişkenlerin değerlerinin **template string** ile kullanıldığı koddur.

`const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); *// "Welcome Mango, your room number is 207!"*`

Template string kulanımı kodu daha okunabilir kılar.

---

### **🔹 Normal string birleştirme (eski yöntem):**

Düşün ki lego parçalarını **tek tek birleştiriyorsun**.

```
const guestName = "Mango";
const roomNumber = 207;

const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
```

Burada:

- "Welcome " → bir lego parçası,
- guestName → başka bir parça,
- ", your room number is " → bir parça daha,
- roomNumber → başka bir parça,
- "!" → son parça.

👉 Hepsini **+ işaretiyle yapıştırıyorsun**.

Bu biraz yorucu ve karmaşık görünüyor.

---

### **🔹 Template string (yeni yöntem):**

Bu sefer sihirli bir lego tahtan var 🪄.

Parçaları tek tek yapıştırmak yerine, boşluk bıraktığın yerlere otomatik oturuyorlar.

```
const guestName = "Mango";
const roomNumber = 207;

const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
```

Burada:

- ` ` → özel ters tırnak işaretleri kullanıyorsun.
- ${guestName} → boşluğa “Mango” kendi kendine yerleşiyor.
- ${roomNumber} → boşluğa “207” kendi kendine yerleşiyor.

👉 Hiç + işareti kullanmana gerek kalmıyor.

---

### **🧸 Özet:**

- **+ ile birleştirmek** → lego parçalarını tek tek yapıştırmak.
- **Template string** → sihirli bir lego tahtası; parçalar kendiliğinden doğru yerlere oturuyor.

Sonuç **ikisiyle de aynı**, ama template string çok daha temiz ve okunabilir.

---

# **Görev**

`message` değişkenini tanımlayın ve satın alma ile ilgili mesajı içine yazın.

Bu, formatta bir dize olacaktır: `"You picked <ürün adı>, price per item is <ürün fiyatı> credits"`

- `<ürün adı>`, `productName` değişkeninin değeridir
- `<ürün fiyatı>`, `pricePerItem` değişkeninin değeridir.

Şablon dizelerinin sözdizimini kullanın. Gereksiz karakterlerden kaçının (dize içeriği tarafından gerekli olmayan boşluklar, virgüller veya noktalar).

# **Testler**

- `productName` değişkeni tanımlanır
- `productName` değişkeni `"Droid"` dizesidir.
- `pricePerItem` değişkeni tanımlanır
- `pricePerItem` değişkeni `3500` sayısıdır.
- `message` değişkeni tanımlanır
- `message` değişkeninin değeri `"You picked Droid, price per item is 3500 credits"`.

const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

# **Görev**

Tamir robotları satan bir dükkan açılmaya hazır. Şimdi, bu robotları sipariş etmek için bir komut dosyası yazmanız gerekiyor.

Gerekli değişkenleri tanımlayın ve onlara uygun değerleri atayın:

- `pricePerDroid` — bir robotun fiyatı `800`
- `orderedQuantity` değeri `6`
- `deliveryFee` teslimat ücreti değeri `50`
- `totalPrice` — ödenecek siparişin toplam tutarı (bir robot fiyatı ile siparişteki robot sayısının çarpımı, artı kargo ücreti)
- `message` — siparişin durumu hakkında `"You ordered droids worth <total price> credits."` biçiminde bir mesaj.

# **Testler**

- `orderedQuantity` değişkeni tanımlanır
- `orderedQuantity` değişken değeri `6`
- `pricePerDroid` değişkeni tanımlanır
- `pricePerDroid` değişken değeri `800`
- `deliveryFee` değişkeni tanımlanır
- `deliveryFee` değişken değeri `50`
- `totalPrice` değişkeni tanımlanır
- `totalPrice` değişken değeri `64850`
- `message` değişkeni tanımlanır
- `message` değişken değeri `"You ordered droids worth 4850 credits."`
- 

Harika bir deneme yapmışsın 👏 Ama küçük bir hata var: sen **tüm sayıları string (metin)** olarak tanımlamışsın, yani "800", "6", "50" gibi.

JavaScript’te:

- "800" → bu **string** (metin), sayı değil.
- 800 → bu **number** (sayı).

Senin yazdığın:

```
const pricePerDroid = "800"; // string ❌
const orderedQuantity = "6"; // string ❌
const deliveryFee = "50";    // string ❌
const totalPrice = "4850";   // string ❌
```

Bunun sonucu, **JavaScript matematik yapamaz**, çünkü metinleri çarpmaya çalışır.

---

✅ Doğru hali şöyle olmalı:

```
const pricePerDroid = 800;   // sayı
const orderedQuantity = 6;   // sayı
const deliveryFee = 50;      // sayı

const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

const message = `You ordered droids worth ${totalPrice} credits`;

console.log(message);
// "You ordered droids worth 4850 credits"
```

---

🔎 Adım adım:

- pricePerDroid * orderedQuantity → 800 * 6 = 4800
- 4800 + deliveryFee → 4800 + 50 = 4850
- ${totalPrice} → 4850 → mesajın içine otomatik yazılır

Sonuç:

👉 "You ordered droids worth 4850 credits"

---