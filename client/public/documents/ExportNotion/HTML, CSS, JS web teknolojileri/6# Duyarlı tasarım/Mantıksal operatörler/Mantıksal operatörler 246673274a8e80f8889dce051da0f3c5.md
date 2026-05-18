# Mantıksal operatörler

Bir kesme noktasından önce ve sonra stilleri uygulamak için bir koşulu nasıl belirleyeceğimizi gördük. Diyelim ki `600px` ile `900px` arasında bir boşluk tanımlamak veya 600px'ten önce ve 900px'ten sonra aynı stile sahip kuralları gruplamak istiyoruz.

Yeşil boşlukta uygulanacak stiller için medya sorgusunu nasıl tanımlarız?

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/5de060a2-7ff8-4043-8d88-d9b5a5e5a0d4Screenshot%202023-05-20%20at%2021.58.03.png)

Medya sorguları `and`, `or`, `not` mantıksal operatörlerini destekler,

Bu operatörler matematik, mantık veya programlama dillerinde kullanılanlara benzer. Bu yüzden onları tekrar tekrar duyacaksınız.

Boolean operatörleri, bir medya sorgusunun koşullarını birleştirmenize olanak tanır.

- Mantıksal operatör `and` (Ve), bir ifadenin doğru olması için tüm koşulların karşılanması gerektiği anlamına gelir.
- Mantıksal operatör `or` (VEYA), ifadenin doğru olması için en az bir koşulun doğru olması gerektiğini ima eder.
- Mantıksal operatör `not` tersine çevirme anlamına gelir, yani koşul karşılanmadığında ifade doğru olacaktır.

İşleç belirtilmezse, varsayılan değer `only` olur.

`@media only|not media-type only|and|not (media-feature) {
  /*
    Belgeye uygulanacak CSS kuralları kümesi,
    medya türü ve ifade doğrulama koşulu doğruysa
  */
}`

---

### **🧠 Özetle ne anlatılıyor?**

> Medya sorgularında, sadece **tek bir koşul birden fazla koşulu birleştirerek**
> 

> Bunu yapmak için **and, or, not kullanılır.**
> 

---

## **and (VE)** Hem şu doğru olsun **hem de**

Mesela:

```
@media (min-width: 600px) and (max-width: 900px)
```

Bu ne demek?

🟩 Ekran genişliği **600px ile 900px ARASINDA** ise bu kuralları uygula.

Yani:

- 599px → ❌
- 600px → ✅
- 750px → ✅
- 900px → ✅
- 901px → ❌

💡 **and** kullanırsan, iki koşulun **ikisi birden doğru** olmalı.

---

## **or (VEYA)** Şu doğruysa da olur, bu doğruysa da olur.

Örneğin:

```
@media (max-width: 600px) or (min-width: 900px)
```

Bu ne demek?

🟠 Ekran genişliği **600px’ten küçükse** **veya** **900px’ten büyükse**, bu kuralları uygula.

Yani:

- 500px → ✅
- 800px → ❌
- 950px → ✅

💡 **or** kullanırsan, **bir tanesi doğru** olsa yeter.

---

## **not (DEĞİL)** Bu doğru **değilse**

Örneğin:

```
@media not (min-width: 600px)
```

Bu ne demek?

❌ Ekran **600px VE DAHA GENİŞ değilse** stilleri uygula.

Yani:

- 500px → ✅
- 600px → ❌
- 800px → ❌

💡 **not**, koşulu tersine çevirir.

---

## **⚙️ Ekstra Bilgi:**

## **only**

> Medya sorgusunda hiçbir mantıksal operatör yazmazsan,
> 
> 
> **varsayılan olarak only kullanılır.**
> 

```
@media screen and (min-width: 600px)
```

Burada only aslında gizli olarak vardır. only, bazı eski tarayıcıların medya sorgularını **yanlış anlayıp çalıştırmaması** için bir önlemdir. Artık çok yaygın kullanılmasa da bilmek iyidir.

---

## **🎯 Örnek Senaryo:**

> 600px ile 900px arasında
> 

```
@media (min-width: 600px) and (max-width: 900px) {
  .card {
    background-color: yellow;
  }
}
```

---

## **🧩 Sonuç:**

Bu bölüm sana şunu öğretmeye çalışıyor:

> CSS’de ekran boyutuna göre stilleri
> 
> 
> **daha esnek ve akıllı şekilde**
> 
- ✅ **and** → birlikte doğru olmalı
- ✅ **or** → biri doğru olsa yeter
- ✅ **not** → tersine çevir

---