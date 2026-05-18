# #4 Veri Doğrulama, Sayfalama, Sıralama ve Filtreleme

[**Doğrulama**](#4%20Veri%20Do%C4%9Frulama,%20Sayfalama,%20S%C4%B1ralama%20ve%20Filtrele/Do%C4%9Frulama%2031e673274a8e80f09ea3ecee03bd2ea6.md)

[**Sayfalama ve Filtreler**](#4%20Veri%20Do%C4%9Frulama,%20Sayfalama,%20S%C4%B1ralama%20ve%20Filtrele/Sayfalama%20ve%20Filtreler%2031e673274a8e80239ffdf03b4bcd2cd3.md)

AI dan bilgi:

Bu konu aslında **backend API’lerde büyük veriyle düzgün çalışmayı** öğretiyor. Yani:

> Kullanıcıya
> 
> 
> **tüm veriyi bir anda göndermek yerine**
> 
> **sayfalara bölmek, sıralamak ve filtrelemek**
> 

3 ana şey anlatılıyor:

1️⃣ Pagination (Sayfalama)

2️⃣ Sorting (Sıralama)

3️⃣ Filtering (Filtreleme)

Ben sana **mantığını sade şekilde anlatacağım**, çünkü metin biraz akademik yazılmış.

---

# **1️⃣ Pagination (Sayfalama) — Neden gerekli?**

Diyelim veritabanında:

```
10000 contact var
```

Eğer kullanıcı:

```
GET /contacts
```

yaparsa backend:

```
10000 kayıt gönderir
```

Bu kötü çünkü:

- API yavaşlar
- Frontend donar
- Gereksiz veri taşınır

Bu yüzden veriyi sayfalara bölüyoruz.

---

## **Pagination nasıl çalışır?**

Frontend şöyle istek atar:

```
GET /contacts?page=2&perPage=10
```

Bu şu demek:

```
page = 2
perPage = 10
```

Yani:

```
2. sayfayı getir
her sayfada 10 kayıt olsun
```

---

## **Backend ne yapar?**

Backend hesaplar:

```
skip = (page - 1) * perPage
```

Örnek:

```
page = 2
perPage = 10
```

```
skip = (2 - 1) * 10
skip = 10
```

MongoDB’ye şu sorgu gider:

```
Model.find().skip(10).limit(10)
```

Yani:

```
ilk 10 kaydı atla
sonraki 10 kaydı getir
```

---

## **Backend response**

Backend sadece veri göndermez.

Pagination bilgisi de gönderir:

```
{
  "data": [...],
  "page": 2,
  "perPage": 10,
  "totalItems": 53,
  "totalPages": 6,
  "hasNextPage": true,
  "hasPreviousPage": true
}
```

Frontend bu sayede:

```
← Previous
1 2 3 4 5
Next →
```

gibi sayfalama yapabilir.

---

# **2️⃣ Sorting (Sıralama)**

Kullanıcı veriyi farklı şekilde görmek isteyebilir.

Örnek:

```
isim sırasına göre
en yeniye göre
telefon numarasına göre
```

Frontend şöyle gönderir:

```
GET /contacts?sortBy=name&sortOrder=asc
```

Backend:

```
Model.find().sort({ name: 'asc' })
```

---

## **Asc / Desc**

```
asc  = A → Z
desc = Z → A
```

---

## **Örnek**

```
GET /contacts?sortBy=createdAt&sortOrder=desc
```

Bu demek:

```
en yeni kayıtlar önce gelsin
```

---

# **3️⃣ Filtering (Filtreleme)**

Kullanıcı tüm veriyi istemez.

Örnek:

```
sadece favourite olanlar
sadece work contactlar
```

Frontend:

```
GET /contacts?contactType=work
```

Backend:

```
Contact.find({ contactType: "work" })
```

---

## **Daha gelişmiş filtre**

Örnek:

```
yaşı 18 ile 30 arasında
```

MongoDB:

```
User.find({
 age: { $gte: 18, $lte: 30 }
})
```

---

## **Kullanılan operatörler**

| **Operatör** | **Anlam** |
| --- | --- |
| $eq | eşit |
| $ne | eşit değil |
| $gt | büyük |
| $gte | büyük veya eşit |
| $lt | küçük |
| $lte | küçük veya eşit |
| $in | listede varsa |
| $nin | listede yoksa |

---

# **4️⃣ Query Builder mantığı**

Bu çok önemli.

Kod şöyle başlar:

```
const query = Contact.find();
```

Sonra filtreler eklenir:

```
if (filter.gender) {
  query.where('gender').equals(filter.gender);
}
```

Sonra pagination eklenir:

```
query.skip(skip).limit(limit)
```

Sonra sorting:

```
query.sort({ name: 'asc' })
```

En sonunda:

```
query.exec()
```

Yani query **adım adım büyür**.

---

# **5️⃣ Promise.all neden kullanılıyor?**

Normalde şöyle çalışır:

```
1️⃣ countDocuments()
bekle

2️⃣ find()
bekle
```

Ama Promise.all ile:

```
ikisi aynı anda çalışır
```

```
const [count, data] = await Promise.all([
 countQuery,
 dataQuery
])
```

Bu API’yi **daha hızlı yapar**.

---

# **Bu konunun özeti**

Bu ders sana backend için 3 çok önemli şeyi öğretiyor:

### **Pagination**

```
?page=2&perPage=10
```

veriyi sayfalara bölmek

---

### **Sorting**

```
?sortBy=name&sortOrder=asc
```

veriyi sıralamak

---

### **Filtering**

```
?gender=male
?minAge=18
```

veriyi filtrelemek

---

# **Bu neden önemli?**

Gerçek projelerde:

```
10
100
1000
100000
```

kayıt olur.

Pagination + filtering + sorting olmadan:

```
API çöker
```

---

💡 Eğer istersen sana ayrıca **bir sonraki ödevde %90 gelecek gerçek endpoint örneğini** de gösterebilirim:

```
GET /contacts?page=1&perPage=10&sortBy=name&sortOrder=asc&isFavourite=true
```

ve bunu **services + controllers içinde nasıl yazacağımızı**. Bu kursun en önemli backend konularından biri.