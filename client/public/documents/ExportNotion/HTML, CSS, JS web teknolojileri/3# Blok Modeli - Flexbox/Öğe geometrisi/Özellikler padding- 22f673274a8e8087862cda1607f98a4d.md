# Özellikler padding-*

Yalnızca bir veya iki tarafta dolgu belirtmek için, her bir taraf için ayrı ayrı `padding` özelliklerini kullanın. Açıkça belirtilmeyen kenarlar için aşağıdakiler kullanılır

- tarayıcının stil sayfasındaki varsayılan değerler kullanılır;
- ve hiçbiri yoksa, değerin `0` olduğu varsayılır.

`padding-top: 20px;
padding-right: 10px;
padding-bottom: 15px;
padding-left: 30px;`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/1bf6d555-cc49-4578-bb73-cabd79be9326Frame%2047967.png)

## **padding-***

## **Ne Demek?**

Bu ifade aslında bir **genellemedir** ve şu anlama gelir:

> “Tüm yönlere özel padding tanımları”
> 

Yani:

- padding-top
- padding-right
- padding-bottom
- padding-left

Bu dört özelliğin **her biri ayrı ayrı padding-* olarak anılır.**

Bu ifade CSS’te gerçek bir kod değildir ama dökümanlarda veya açıklamalarda **kısa yoldan tüm padding yönlerini anlatmak** için kullanılır.

---

## **✅Örnekle Gösterelim:**

Şu dört satır:

```
padding-top: 10px;
padding-right: 15px;
padding-bottom: 10px;
padding-left: 5px;
```

Hepsi birlikte, padding-* ailesine aittir.

---

## **🔤 Peki Nerede Kullanılır Bu Anlatım?**

### **🔸 Belge ve dökümanlarda:**

> “Bir veya iki kenara padding uygulamak için padding-* özelliklerini kullanın.”
> 

Buradaki *, “top, right, bottom, left” yer tutucusudur.

### **🔸 Ama gerçek CSS kodunda**

### **padding-* diye bir şey YAZILMAZ.**

- Bu sadece anlatım kolaylığı içindir.
- Kod yazarken yukarıdaki gibi açık açık yazarsın: padding-left, padding-top gibi.

---

## **🧾 Özetle:**

| **Terim** | **Gerçek CSS kodu mu?** | **Anlamı** |
| --- | --- | --- |
| padding-* | ❌ Hayır (sembolik) | Tüm yönlere özel padding özelliklerini temsil eder |
| padding-top vb. | ✅ Evet | Belirli kenarlar için padding ayarı yapılır |

---