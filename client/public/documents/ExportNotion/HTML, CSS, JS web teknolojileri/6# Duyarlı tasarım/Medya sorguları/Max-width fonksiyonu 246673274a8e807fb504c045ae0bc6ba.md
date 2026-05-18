# Max-width fonksiyonu

`max-width` ortam işlevi, iç içe CSS kurallarının uygulanacağı görüntü alanının maksimum genişliğini tanımlar.

`*/* CSS kuralları, görüntü alanının genişliği 600 piksele eşit veya daha az olduğunda uygulanır */*@media (max-width: 600px) {
  body {
    background-color: green;
  }
}`

Görüntü alanının genişliğini 0'dan sonsuza kadar bir çizgi olarak düşünürseniz, `max-width` işlevine sahip medya kuralı, stilleri uygulamak istediğiniz aralığı tanımlar.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/0561139d-2496-4ae1-8180-8a25980dd37fScreenshot%202023-05-20%20at%2015.59.36.png)

## **max-width nedir?**

max-width, **en fazla şu kadar genişlikteki ekranlarda şu kuralları uygula** demek.

### **🟩 Örnek:**

```
@media (max-width: 600px) {
  body {
    background-color: green;
  }
}
```

Yani bu ne demek?

➡️ Ekran genişliği **600 piksel veya daha küçükse**, sayfanın arka planı **yeşil** olur.

Eğer ekran 601px, 700px, 1000px ise bu kural çalışmaz.

---

## **📐**

## **Genişlikler bir çizgi gibidir**

Ekran genişliğini şöyle düşün:

```
0px ---- 600px ---- 960px ---- sonsuz
```

Sen diyorsun ki:

> “960 pikselden küçük ekranlar için stilleri uygula.”
> 

O zaman bu çizgide, **0px ile 959px arası** hedefleniyor.

---

## **❓ Seçeneklere bakalım:**

| **Seçenek** | **Anlamı** | **Uygun mu?** |
| --- | --- | --- |
| @media (max-width: 600px) | 0 - 600px arası | ❌ **Yetersiz** (960’dan küçükleri kapsamaz) |
| @media (min-width: 600px) | 600px ve **üstü** | ❌ **Yanlış yön** |
| @media (max-width: 960px) | 0 - 960px arası | ✅ **Doğru cevap** |
| @media (min-width: 960px) | 960px ve **üstü** | ❌ **Ters yön** |

---

## **✍️ Özet Not**

- max-width: **üst sınır belirler** (bu piksele kadar uygula).
- min-width: **alt sınır belirler** (bu piksellikten itibaren uygula).
- 960 pikselden **küçük** ekranlar için @media (max-width: 960px) kullanılır.

---

CSS düzenleyicide, görüntü alanı `500px`e kadar daraldığında uygulanacak bir medya sorgusu ekleyin ve `text` sınıfına sahip öğenin yazı tipi boyutunu `24px` olarak değiştirin.

- Kod, medya sorgularının dışında `.text`sınıfına sahip bir CSS kuralı içermelidir.
- `.text` sınıfına ait kuralın `font-family` özelliği `sans-serif` olarak ayarlanmalıdır.
- `.text` sınıfına ait kuralın `line-height` özelliği `1.5` değerinde olmalıdır.
- `.text` sınıfına ait kuralın `color` özelliği `black` değerine sahip olmalıdır.
- Kod, `max-width` özelliğini kullanan bir medya sorgusu içermelidir.
- Görüntü alanı genişliği `500px` veya daha küçük olduğunda, `max-width` özelliğini kullanan medya sorgusu devreye girmelidir.
- Görüntü alanı genişliği `500px`veya daha küçük olduğunda, .text sınıfına sahip öğenin yazı tipi boyutu `24px`olarak değişmelidir.

---

### **✅ Doğru hali:**

```
.text {
  font-family: sans-serif;
  line-height: 1.5;
  color: black;
}

@media (max-width: 500px) {
  .text {
    font-size: 24px;
  }
}
```

---

### **❌ Sizin yazdığınız hali:**

```
@media (max-width: 500px) {
    text {  /* Hatalı: "text" bir HTML etiketi gibi görünüyor */
        font-size: 24px;
    }
}
```

---

### **Açıklama:**

- .text → Nokta (.) ile başlayanlar **sınıf seçicisi**dir. HTML’de <div class="text"> gibi öğeleri hedef alır.
- text → Nokta **yoksa**, bu bir HTML etiketi sanılır (örneğin <text> gibi bir etiket… ama böyle bir HTML etiketi yok!).

Bu yüzden medya sorgusu içinde .text yazmalısınız, text değil.

---

### **Bonus: Örnek HTML ile birlikte tam test edilebilir örnek**

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Media Query Example</title>
  <style>
    .text {
      font-family: sans-serif;
      line-height: 1.5;
      color: black;
    }

    @media (max-width: 500px) {
      .text {
        font-size: 24px;
      }
    }
  </style>
</head>
<body>
  <p class="text">Bu yazı mobilde daha büyük görünecek.</p>
</body>
</html>
```

Bu yapı ile, ekran genişliği 500px ve altına düştüğünde .text sınıfına sahip öğenin yazı tipi boyutu 24px olacaktır.