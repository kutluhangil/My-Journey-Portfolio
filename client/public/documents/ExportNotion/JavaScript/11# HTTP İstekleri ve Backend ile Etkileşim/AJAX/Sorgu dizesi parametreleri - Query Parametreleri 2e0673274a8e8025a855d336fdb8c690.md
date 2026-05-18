# Sorgu dizesi parametreleri - Query Parametreleri

Sorgu parametreleri, arka uç için ek kriterler belirlemenize olanak tanır, örneğin

- sorguda kaç koleksiyon öğesi almak istediğimizi;
- belki de bazı nesne özelliklerine göre sıralama eklemeniz gerekir;
- seçimi sınırlamak vb.

Sorgu parametrelerinin listesi, adları ve olası değerleri arka uca bağlıdır ve belgelerinde açıklanmıştır.

`?` sembolü sorgu parametrelerinin başlangıcını gösterir. Her parametre bir `name=value` çiftidir.

Sorgu dizesinde parametreler `&` karakteri ile ayrılır.

[JSONPlaceholder API](https://jsonplaceholder.typicode.com/) belgelerinde olası sorgu dizesi parametreleri açıklanmaktadır:

- `_limit`, yanıttaki öğe sayısını kontrol eder;
- Dizideki nesnelerin sıralanma düzeninden sorumlu olan `_sort`.

`fetch("<https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name>")`

Yukarıdaki örnekte yer alan GET isteği, alfabetik sıraya göre ada (`name` alanı) göre sıralanmış yedi kullanıcıdan (toplam 10) oluşan bir dizi döndürecektir. Parametre adlarındaki alt çizgiler bu arka uca özeldir, standart değildir.

Aşağıda canlı örneğe sorgu dizisi parametrelerinin kullanımını ekledik.

---

## **Query Parametreleri (Sorgu Parametreleri) nedir?**

👉 **URL’nin sonuna eklenen ek ayarlardır.**

Sunucuya şunu söylersin:

- “Kaç tane veri istiyorum?”
- “Neye göre sıralayayım?”
- “Hangilerini istiyorum / hangilerini istemiyorum?”

Yani: **aynı kaynaktan (users) farklı sonuçlar almak** için kullanılır.

---

## **Nerede yazılır?**

URL’de **? işaretiyle başlar**

```
https://site.com/users?parametre=değer
```

---

## **Yapısı**

- ? → sorgu parametreleri başlar
- name=value → parametre yapısı
- & → birden fazla parametre ayırır

Örnek:

```
/users?_limit=7&_sort=name
```

---

## **JSONPlaceholder örneği**

```
fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name")
```

Bu ne demek?

### **_limit=7**

➡️ **En fazla 7 kullanıcı getir**

### **_sort=name**

➡️ **Kullanıcıları name alanına göre sırala**

📌 Sonuç:

- Toplam 10 kullanıcı var
- Ama **alfabetik sırada 7 tanesi** gelir

---

## **Önemli not**

- _limit, _sort gibi isimler **standart değildir**
- Bunlar **bu API’ye özeldir**
- Her API’nin kendi parametreleri vardır (dokümantasyonda yazar)

---

## **Birden fazla parametre örneği**

```
/users?_limit=5&_sort=email
```

➡️ 5 kullanıcı getir

➡️ Email’e göre sırala

---

## **Soru cevabı 🎯**

> URL’de sorgu parametrelerinin başladığını gösteren karakter hangisi?
> 

✅ **?**

---

## **Kısa özet**

- Query parametreleri → **sunucuya filtre / ayar gönderir**
- ? ile başlar
- & ile ayrılır
- API dokümantasyonuna bağlıdır
- Aynı endpoint → farklı sonuçlar üretir