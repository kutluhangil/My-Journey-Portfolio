# Özelliklere Erişim

DOM öğeleri, **metin içeren HTML etiketlerine** karşılık gelir.

Özelliklere erişim, standart yöntemler kullanılarak sağlanır. Bu yöntemler, HTML içinde bulunan değerlerle çalışır.

`<img class="image" src="<https://picsum.photos/id/15/320/240>" alt="Rocks and waterfall" width="300" />`

# **element.hasAttribute(nameAttribute) Metodu**

`element.hasAttribute(nameAttribute)` metodu, doğrulamak için bir öznitelik adı içeren `nameAttribute` dizesini parametre olarak alır ve bu özniteliğin eleman üzerinde mevcut olup olmadığını kontrol eder. Sonuç olarak `true` veya `false`değerini döndürür.

```
const image = document.querySelector(".image");
console.log(image.hasAttribute("src")); // true
console.log(image.hasAttribute("href")); // false
```

# **element.getAttribute(nameAttribute) Metodu**

`element.getAttribute(nameAttribute)` metodu, belirtilen HTML öğesi (`element`) için, verilen `nameAttribute` adlı özniteliğin **değerini alır**.

Eğer öznitelik bulunamazsa, yöntem `null` değerini döndürür.

`console.log(image.getAttribute("alt")); // "Rocks and waterfall"`

# **element.setAttribute(nameAttribute, value) Metodu**

`element.setAttribute(nameAttribute, value)` metodu, iki argüman alır:

Birincisi, öznitelik adı olarak `nameAttribute`,

İkincisi ise bu özniteliğe atanacak veya değiştirilecek değer olan `value`.

Bu yöntem, belirtilen HTML öğesi (`element`) için belirtilen özniteliğin değerini **ayarlar** veya **değiştirir**.

```
image.setAttribute("alt", "Amazing nature");
console.log(image.getAttribute("alt")); // Amazing nature
```

# **element.removeAttribute(nameAttribute) Metodu**

`element.removeAttribute(nameAttribute)` metodu, belirtilen HTML öğesinden, adı `nameAttribute` olan bir özniteliği **kaldıran** bir metottur.

Belirtilen öznitelik öğede yoksa, yöntem herhangi bir hata üretmez ve hiçbir işlem yapmaz.

```
image.removeAttribute("alt");
console.log(image.hasAttribute("alt")); // false
```

```
Bazı öğe özelliklerine, doğrudan DOM nesnesi özellikleri olarak erişebilir veya değerlerini değiştirebilirsiniz. Bu yöntem, kodun daha az karmaşık olmasını sağlar.
Silme veya varlığını kontrol etme işlemleri ise, ilgili yöntemleri kullanarak daha kullanışlı şekilde gerçekleştirilebilir.
```

---

## **🧩 Özelliklere (Attribute) Erişim Nedir?**

HTML etiketlerindeki **src, alt, href, width** gibi şeylere

JavaScript ile **bakmak, değiştirmek veya silmek** demektir.

```
<img class="image" src="..." alt="Rocks" width="300">
```

---

## **👶 ELI5 (çok basit anlatım)**

Bir HTML öğesini **etiketli bir kutu** gibi düşün 📦

- src → kutunun adres etiketi
- alt → açıklama etiketi
- width → boy etiketi

JavaScript ile:

- “Bu etiket var mı?”
- “Etikette ne yazıyor?”
- “Etiketi değiştir”
- “Etiketi sök at”

işlemlerini yapıyoruz.

---

## **🔍 1️⃣ hasAttribute(name)**

👉 **Var mı, yok mu?**

```
image.hasAttribute("src");  // true
image.hasAttribute("href"); // false
```

🧠 Sadece **kontrol eder**, değerle ilgilenmez.

---

## **📖 2️⃣ getAttribute(name)**

👉 **Değeri nedir?**

```
image.getAttribute("alt");
// "Rocks and waterfall"
```

❌ Yoksa:

```
image.getAttribute("title"); // null
```

---

## **✏️ 3️⃣ setAttribute(name, value)**

👉 **Ekle veya değiştir**

```
image.setAttribute("alt", "Amazing nature");
```

HTML artık:

```
<img alt="Amazing nature">
```

---

## **🗑️ 4️⃣ removeAttribute(name)**

👉 **Tamamen sil**

```
image.removeAttribute("alt");
```

```
image.hasAttribute("alt"); // false
```

⚠️ Attribute yoksa bile **hata vermez**

---

## **✅ Direkt özellik (property) kullanımı**

Bazı attribute’lere **daha kısa yoldan** erişebilirsin:

```
image.src = "https://picsum.photos/200";
image.alt = "New image";
```

Bu:

- Daha **okunaklı**
- Daha **yaygın**

---

## **🤔 Ne zaman hangisi?**

| **İşlem** | **En iyi yöntem** |
| --- | --- |
| Değeri okumak | image.src |
| Değeri değiştirmek | image.alt = "..." |
| Var mı kontrolü | hasAttribute() |
| Attribute silmek | removeAttribute() |
| Dinamik attribute adı | setAttribute() |

---

## **🧠 Tek cümlelik özet**

> HTML attribute’leri, JavaScript ile has/get/set/removeAttribute metodlarıyla kontrol edilir; sık kullanılanlar için doğrudan property kullanmak daha pratiktir.
>