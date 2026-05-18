# JavaScript & Web Geliştirme — Düzenli Ders Notları

---

## **🔹 1. String (Metin) Kavramı**

### **String Property vs Method**

**Property (özellik)**

Bilgi verir, işlem yapmaz.

```
"Hello".length; // 5
```

**Method (metot)**

String üzerinde işlem yapar.

```
"hello".toUpperCase(); // "HELLO"
```

### **Boşluk Temizleme**

```
const text = "  Mango ";
console.log(text.trim()); // "Mango"
```

---

## **🔹 2. Yaygın String Metotları**

| **Metot** | **Açıklama** |
| --- | --- |
| slice(start, end) | Alt string alır |
| toLowerCase() | Küçük harfe çevirir |
| toUpperCase() | Büyük harfe çevirir |
| includes() | İçeriyor mu kontrol eder |
| startsWith() | Başlangıç kontrolü |
| endsWith() | Bitiş kontrolü |
| indexOf() | Konum döndürür, yoksa -1 |

---

## **🔹 3. String Birleştirme**

### **+ Operatörü**

```
const name = "Poly";
const age = 24;

console.log("User " + name + " is " + age + " years old");
```

### **Template String (Önerilen)**

```
console.log(`User ${name} is ${age} years old`);
```

✔ Daha okunabilir

✔ Daha modern

---

## **🔹 4. String Uzunluğu ve İndeksleme**

```
const word = "Droid";

console.log(word.length); // 5
console.log(word[0]); // "D"
console.log(word[word.length - 1]); // "d"
```

📌 **Not:**

String’ler **immutable**’dır → değiştirilemez.

---

## **🔹 5. Döngüler (Loops)**

### **while**

```
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### **do…while (en az 1 kez çalışır)**

```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
```

### **for**

```
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log(total); // 15
```

### **break / continue**

```
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;        // Döngüyü bitir
  if (i % 2 === 0) continue; // Çiftleri atla
  console.log(i);
}
```

---

## **🔹 6. Events (Olaylar)**

### **Event Propagation (Yayılım)**

1️⃣ Capturing (dıştan içe)

2️⃣ Target (asıl öğe)

3️⃣ Bubbling (içten dışa)

```
parent.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

### **Event Özellikleri**

| **Özellik** | **Açıklama** |
| --- | --- |
| event.target | Tıklanan gerçek öğe |
| event.currentTarget | Dinleyicinin bağlı olduğu öğe |

### **Olay Durdurma**

```
event.stopPropagation();
event.stopImmediatePropagation();
```

---

## **🔹 7. Event Delegation (Olay Yetkilendirme)**

Çok sayıda öğe için **tek event listener** kullanma tekniği.

```
const box = document.querySelector(".box");

box.addEventListener("click", (event) => {
  if (event.target.nodeName !== "BUTTON") return;
  console.log(event.target.dataset.color);
});
```

✔ Performanslı

✔ Dinamik içerikler için ideal

---

## **🔹 8. Kütüphaneler & CDN**

### **CDN Nedir?**

Dosyaları en yakın sunucudan yükler → hızlıdır.

### **Lodash Örneği**

```
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
<script>
  console.log(_.sum([1, 2, 3])); // 6
</script>
```

### **basicLightbox**

```
const instance = basicLightbox.create(`<img src="img.jpg">`);
instance.show();
```

---

## **🔹 9. Destructuring (Yeniden Yapılandırma)**

### **Nesne**

```
const user = { name: "Ali", age: 20 };
const { name, age } = user;
```

Varsayılan:

```
const { city = "İstanbul" } = user;
```

Yeniden adlandırma:

```
const { name: userName } = user;
```

### **Dizi**

```
const colors = [200, 255, 100];
const [r, g, b] = colors;
```

Rest operatörü:

```
const [first, ...rest] = [1, 2, 3, 4];
```

### **Fonksiyon Parametresinde**

```
function printUser({ name, age }) {
  console.log(name, age);
}
```

---

## **🔹 10. HTTP & HTTPS**

| **HTTP** | **HTTPS** |
| --- | --- |
| Şifreleme yok | SSL/TLS ile şifreli |
| Güvensiz | Güvenli |
| http:// | 🔒 https:// |

---

## **🔹 11. Backend, Server & REST API**

- **Server:** İstekleri karşılayan sistem
- **Backend:** İş mantığı
- **API:** Yazılımlar arası iletişim
- **REST API:** JSON + HTTP metotları

📌 Örnek:

```
https://jsonplaceholder.typicode.com/users
```

---

## **🔹 12. Fetch API**

```
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

### **Response Metotları**

| **Metot** | **Açıklama** |
| --- | --- |
| res.json() | JSON |
| res.text() | Metin |
| res.blob() | Dosya |

---

## **🔹 13. HTTP Metotları (CRUD)**

| **Metot** | **İşlem** |
| --- | --- |
| GET | Oku |
| POST | Ekle |
| PUT/PATCH | Güncelle |
| DELETE | Sil |

---

## **🔹 14. Headers (Üstbilgiler)**

```
headers: {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": "API_KEY"
}
```

---

## **🔹 15. CORS**

Tarayıcı güvenlik politikasıdır.

Sunucu şu header’ı göndermelidir:

```
Access-Control-Allow-Origin
```

---

## **🔹 16. AJAX**

- Sayfa yenilenmeden veri alışverişi
- Modern kullanım: **Fetch / Axios**

---

## **🔹 17. Axios**

```
npm install axios
```

```
import axios from "axios";

axios.get("/users")
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
```

✔ Otomatik JSON

✔ Hataları otomatik reject eder

---

## **🔹 18. Query Parametreleri**

```
axios.get("/users", {
  params: {
    _limit: 5,
    _sort: "name"
  }
});
```

---

## **🔹 19. async / await**

```
const fetchUsers = async () => {
  try {
    const res = await axios.get("/users");
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
```

✔ Daha okunabilir

✔ Senkron gibi görünür

---

## **🔹 20. Pagination (Sayfalama)**

```
let page = 1;
const limit = 5;

const loadMore = async () => {
  const res = await axios.get("/posts", {
    params: { _limit: limit, _page: page }
  });
  console.log(res.data);
  page++;
};
```

---

# **📊 GENEL ÖZET TABLO**

| **Konu** | **Amaç** |
| --- | --- |
| String Metotları | Metin işlemleri |
| Döngüler | Tekrarlı işlemler |
| Events | Kullanıcı etkileşimi |
| Delegation | Performans |
| Fetch / Axios | Backend iletişimi |
| CRUD | Veri yönetimi |
| async/await | Asenkron kontrol |
| Pagination | Büyük veri yönetimi |

---

İstersen bir sonraki adımda:

- 📌 **PDF / Markdown versiyonu**
- 📌 **Sınav öncesi mini özet**
- 📌 **Sadece önemli yerlerin “cheat sheet”i**

hazırlayabilirim.