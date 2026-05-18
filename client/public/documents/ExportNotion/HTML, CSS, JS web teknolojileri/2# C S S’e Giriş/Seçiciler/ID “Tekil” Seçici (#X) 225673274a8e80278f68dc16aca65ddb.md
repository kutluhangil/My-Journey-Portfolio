# ID “Tekil” Seçici (#X)

Etiketlerin global bir `id` niteliği ile ayarlanabileceğini zaten biliyorsunuz, bunu çapa bağlantılar oluşturmak için kullandık (bkz. Modül 1, Çapa Bağlantılar). Bir öğenin `id` değerinin sayfada benzersiz olması gerektiğini, yani aynı id değerine sahip iki öğe olamayacağını unutmayın.

`<h1 id="title">Sayfa başlığı</h1>`

CSS seçicisinde, `#` sembolü tanımlayıcı adının önüne yerleştirilir.

`#title {
  font-weight: 500;
  color: orange;
}`

Uygulamada, tanımlayıcılar kayıt için kullanılmamaktadır.

Değerlerinin benzersizliği kuralı, stillerin yeniden kullanılmasını imkansız hale getirir. Tanımlayıcılar, geçerli sayfanın bölümlerine bağlantılar oluşturmak için kullanılır.

---

## **🎯 Amaç Nedir?**

Her bir başlık elementine (örneğin <h1>, <h2>) verilen id değerlerine göre, bu başlıkların **metin rengini** CSS ile değiştirmek istiyoruz.

---

## **📌 ID Seçici Nedir?**

CSS’te bir öğeyi ID’sine göre seçmek için # sembolü kullanılır.

Örneğin:

```
#hero {
  color: red;
}
```

Bu, HTML’de id="hero" olan öğenin metnini kırmızı yapar.

---

## **✅ Senden İstenenler:**

Aşağıdaki gibi ID’leri olan başlıkların renklerini belirli hexadecimal renklerle değiştirmen gerekiyor:

| **ID** | **Renk Kodu** |
| --- | --- |
| hero | #3f51b5 |
| clubs | #9c27b0 |
| benefits | #00bcd4 |
| programs | #ff9800 |

---

## **💡 Nasıl Yapılır?**

Stil sayfana (örneğin styles.css) **şu kuralları** eklersen gerekeni yapmış olursun:

```
#hero {
  color: #3f51b5;
}

#clubs {
  color: #9c27b0;
}

#benefits {
  color: #00bcd4;
}

#programs {
  color: #ff9800;
}
```

---

## **🔍 Açıklama:**

- #hero ⇒ HTML’de id="hero" olan başlık bu rengi alır.
- color ⇒ Başlık metninin rengini belirler.
- # ⇒ CSS’te ID seçmek için kullanılır.
- Renk kodları hexadecimal formattadır (örnek: #3f51b5 = mavi ton).

---

## **✅ Örnek HTML Parçası (senin sayfanda böyle olabilir):**

```
<h1 id="hero">Welcome to Planet Fatness</h1>
<h2 id="clubs">Our Clubs</h2>
<h2 id="benefits">PF Benefits</h2>
<h2 id="programs">Tips and Programs</h2>
```

---

## **📦 Sonuç:**

Yukarıdaki CSS kurallarını stil sayfana eklersen:

- Başlıklar renkli olur.
- Kontrol sistemi tüm kuralları **başarılı** olarak algılar.
- Görevini tam ve eksiksiz yapmış olursun 🎉

Hazırsan dilersen diğer CSS görevlerini de birlikte gözden geçirebiliriz.