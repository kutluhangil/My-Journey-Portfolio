# Bağlantı stilleri

Bir HTML belgesine stil eklemenin üç ana yöntemi vardır. Her bir yöntemin kendine özgü avantajları, dezavantajları, sınırlamaları ve kapsamı bulunur:

1. Satır İçi (inline) Stiller
2. Dahili (internal) Stiller.
3. Harici (external) Stiller.

Bu bölümde, üç yöntemi de detaylı olarak ele alacağız.

---

## **📘 HTML’de 3 Yöntemle CSS (Stil) Uygulama**

### **1. Satır İçi Stil (Inline CSS)**

- **Tanım:** Stil doğrudan HTML etiketinin içine yazılır.
- **Nerede kullanılır:** Küçük projelerde, hızlıca sadece bir öğeye özel stil vermek için.
- **Dezavantaj:** Kod karışır, tekrar kullanılamaz.

🔹 **Örnek:**

```
<p style="color: red; font-size: 18px;">Merhaba dünya!</p>
```

Bu örnekte sadece bu <p> etiketi kırmızı renkte ve 18px boyutundadır.

---

### **2. Dahili Stil (Internal CSS)**

- **Tanım:** Stil kuralları, HTML dosyasının <head> kısmına <style> etiketi içinde yazılır.
- **Nerede kullanılır:** Küçük–orta ölçekli projelerde, birden fazla öğeye stil vermek için.
- **Avantaj:** Kod daha düzenli, stiller tekrar kullanılabilir.

🔹 **Örnek:**

```
<head>
  <style>
    h1 {
      color: orange;
    }

    p {
      color: cyan;
    }
  </style>
</head>

<body>
  <h1>Başlık</h1>
  <p>Bu bir paragraf.</p>
</body>
```

Bu örnekte, tüm <h1> etiketleri turuncu, tüm <p> etiketleri cam göbeği (cyan) renkte görünür.

---

### **3. Harici Stil (External CSS)**

- **Tanım:** Stil kuralları ayrı bir .css dosyasına yazılır ve HTML sayfasına <link> etiketi ile bağlanır.
- **Nerede kullanılır:** Büyük projelerde, tüm sitenin stilini tek yerden yönetmek için.
- **Avantaj:** Kod çok düzenli olur, tüm sayfalarda aynı stil kullanılabilir.

🔹 **style.css (harici dosya):**

```
h1 {
  color: green;
}

p {
  font-size: 16px;
}
```

🔹 **HTML dosyasında:**

```
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

Bu şekilde HTML sayfası, harici dosyadaki tüm stilleri kullanır.

---

## **📝 Kısa Karşılaştırma Tablosu**

| **Yöntem** | **Nerede Yazılır?** | **Avantajı** | **Dezavantajı** |
| --- | --- | --- | --- |
| Satır içi (inline) | HTML etiketinin içinde | Hızlıdır | Kod karmaşık ve tekrar içermez |
| Dahili (internal) | <head> içindeki <style> | Düzenlidir, kolay yönetilir | Büyük projelerde yeterli olmaz |
| Harici (external) | Ayrı .css dosyasında | Tüm sitelerde kullanılabilir | Dosya yönetimi gerekir |

---

[**SATIR İÇİ Stil**](Ba%C4%9Flant%C4%B1%20stilleri/SATIR%20%C4%B0%C3%87%C4%B0%20Stil%20225673274a8e80a8ac01d600bf5983a2.md)

[**DAHİLİ Stiller (Internal CSS)**](Ba%C4%9Flant%C4%B1%20stilleri/DAH%C4%B0L%C4%B0%20Stiller%20(Internal%20CSS)%20225673274a8e8020ad57cddeba316dc6.md)

[**HARİCİ Stil Sayfası**](Ba%C4%9Flant%C4%B1%20stilleri/HAR%C4%B0C%C4%B0%20Stil%20Sayfas%C4%B1%20225673274a8e80e09008c4acee1a0691.md)

[Örnekler ](Ba%C4%9Flant%C4%B1%20stilleri/%C3%96rnekler%20225673274a8e803183fdd6a9a5296714.md)