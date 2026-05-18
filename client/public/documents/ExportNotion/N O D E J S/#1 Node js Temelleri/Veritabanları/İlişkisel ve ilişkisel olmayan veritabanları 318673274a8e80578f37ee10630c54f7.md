# İlişkisel ve ilişkisel olmayan veritabanları

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/feefcf33-4294-489c-b714-3010c868b544Untitled%20-%202024-12-12T223619.595.png)

*İlişkisel ve İlişkisel Olmayan Veritabanları*

```
💡 İlişkisel ve ilişkisel olmayan veritabanları (Veritabanı), yapı, veri organizasyonu ve bilgi depolama ile işleme yaklaşımları açısından farklılık gösterir.
```

Bu iki tür veritabanı arasındaki temel farkları anlamak için karşılaştırmalı bir tablo sunuyoruz:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/89ba31d6-325f-44b1-a6cb-cb0b37e2600fimage.png)

---

# **📦 “İlişkisel” ve “İlişkisel Olmayan” Veritabanı Ne Demek?**

Veritabanı = verileri sakladığımız sistem.

Ama bu verileri **nasıl sakladığımız** önemli.

Burada iki ana yaklaşım var:

---

# **🟦 1️⃣ İlişkisel Veritabanı (Relational Database)**

Bunlara genelde **SQL veritabanları** denir.

Örnekler:

- MySQL
- PostgreSQL
- Microsoft SQL Server
- Oracle

---

## **🧱 Yapısı Nasıldır?**

Veriler **tablolar** içinde tutulur.

Tıpkı Excel gibi:

| **id** | **name** | **email** |
| --- | --- | --- |
| 1 | Ali | ali@mail.com |
| 2 | Ayşe | ayse@mail.com |

Her tablo:

- Satırlardan (rows)
- Sütunlardan (columns)
    
    oluşur.
    

---

## **🔗 Neden “İlişkisel” deniyor?**

Çünkü tablolar **birbirine bağlanabilir**.

Örnek:

### **Users tablosu**

| **id** | **name** |
| --- | --- |
| 1 | Ali |

### **Orders tablosu**

| **id** | **user_id** | **product** |
| --- | --- | --- |
| 1 | 1 | Laptop |

Burada user_id, Users tablosundaki id ile ilişkilidir.

Yani:

> Veriler arası ilişki vardır.
> 

---

## **🧠 Özellikleri**

- Katı şema (schema zorunlu)
- Önceden kolonları belirlemelisin
- Veri yapısı nettir
- SQL dili ile sorgu yapılır

Örnek SQL:

```
SELECT * FROM users WHERE id = 1;
```

---

# **🟩 2️⃣ İlişkisel Olmayan Veritabanı (NoSQL)**

Bunlara genelde **NoSQL** denir.

Örnekler:

- MongoDB
- Firebase
- Redis
- Cassandra

---

## **🧱 Yapısı Nasıldır?**

Tablo zorunluluğu yoktur.

Genelde **JSON benzeri veri** saklar.

Örnek MongoDB dokümanı:

```
{
  "name": "Ali",
  "email": "ali@mail.com",
  "orders": [
    { "product": "Laptop" },
    { "product": "Mouse" }
  ]
}
```

Burada her şey tek belge içinde.

---

## **🔓 Neden “İlişkisel Olmayan”?**

Çünkü:

- Tablolar arası ilişki zorunlu değil
- Foreign key yok
- Daha esnek yapı var

---

# **⚔️ Temel Fark**

| **Özellik** | **İlişkisel (SQL)** | **İlişkisel Olmayan (NoSQL)** |
| --- | --- | --- |
| Yapı | Tablo | JSON / Doküman |
| Şema | Katı | Esnek |
| İlişki | Foreign key ile | Genelde embed edilir |
| Ölçeklenme | Dikey (server büyütme) | Yatay (server çoğaltma) |
| Kullanım | Banka, finans | Sosyal medya, büyük veri |

---

# **🎯 Basit Örnekle Anla**

## **📌 E-Ticaret Sitesi**

### **SQL mantığı:**

- Users tablosu
- Orders tablosu
- Products tablosu
- Aralarında ilişki

### **NoSQL mantığı:**

- Kullanıcı belgesi içinde siparişler gömülü olabilir.

---

# **🧠 Ne Zaman Hangisi?**

## **SQL kullan:**

- Veri yapısı net ve değişmeyecekse
- Finans, muhasebe gibi kritik sistemlerde
- İlişkiler çoksa

## **NoSQL kullan:**

- Veri yapısı sık değişiyorsa
- Büyük ve esnek veri varsa
- Yüksek trafik varsa

---

# **🔥 Node.js ile Bağlantısı**

Node backend yazarken:

- SQL için → Sequelize, Prisma
- NoSQL için → Mongoose (MongoDB)

React + Node projelerinde genelde:

- MongoDB (NoSQL)
    
    kullanılır.
    

---

# **🧠 Kısaca**

SQL = düzenli, katı, ilişkili

NoSQL = esnek, hızlı, JSON tabanlı

---