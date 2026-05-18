# Min-width fonksiyonu

Çoğu zaman bir medya isteğinde tarayıcının görüntü alanının genişliğini kontrol etmek için bir koşul belirtmeniz gerekir. `Min-width` fonksiyonu görüntü alanının minimum genişliğini tanımlar. Ekran `min-width` içindeki değerle eşleşirse, iç içe CSS kuralları uygulanır.

`*/* CSS kuralları, görüntüleme penceresinin genişliği 800 piksele eşit veya daha büyük olduğunda aşağıdakileri uygular: */*@media (min-width: 800px) {
  body {
    background-color: orange;
  }
}`

Görüntü alanının genişliğini 0'dan sonsuza kadar bir çizgi olarak hayal ederseniz, `min-width` işlevine sahip bir medya kuralı, stilleri uygulamak istediğiniz aralığı tanımlar.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/962651bd-393f-4452-a2f2-6ec3c4b07cd6Screenshot%202023-05-20%20at%2015.55.32.png)

Yukarıdaki resimde 800px **kırılma noktasıdır (breakpoint)**, yani tüm mizanpajın veya tek tek parçalarının stillerini ve tasarımlarını değiştirdiği görüntü alanı boyutudur.

CSS düzenleyicide, `500px` ve üzeri bir görünüm alanı için yürütülecek bir medya sorgusu eklemeniz gerekmektedir.Bu medya sorgusuyla, `text` sınıfına sahip öğedeki metin boyutu `20px` olarak değiştirilmelidir.

- Kodunuz, medya sorgularının dışında `.text` seçicisine sahip bir kural içermelidir.
- `.text` seçicisine sahip kuralın `font-family` özelliği `sans-serif` değerine sahip olmalıdır.
- `.text` seçicisine sahip kuralın `line-height` özelliği `1.5` olmalıdır.
- `.text` seçicisine sahip kuralın `color` özelliği `black` olmalıdır.
- Kodunuz, `min-width` işlevine sahip bir medya sorgusu içermelidir.
- Görüntü alanının genişliği `500px`den büyük olduğunda `min-width` işlevine sahip medya sorgusu yürütülmelidir.
- Görüntü alanının genişliği `500px` olduğunda, `text` sınıfına sahip öğedeki metin boyutu `20px` olarak değiştirilmelidir.

```
.text {
  font-family: sans-serif;
  line-height: 1.5;
  color: black;
}

@media (min-width: 500px) {
  .text {
    font-size: 20px;
  }
}
```

### **Açıklama:**

- .text seçicisiyle genel stiller tanımlandı.
- @media (min-width: 500px) medya sorgusu, ekran genişliği 500px ve **üzeri** olduğunda çalışır.
- Medya sorgusunun içinde .text için font-size: 20px; uygulanır.
- Kodun tüm gereklilikleri yerine getirilmiştir.

## **min-width nedir?**

min-width, “**en az bu kadar genişlik varsa** şu kuralları uygula” demek.

---

## **🟠 Örnek:**

```
@media (min-width: 800px) {
  body {
    background-color: orange;
  }
}
```

Yani:

➡️ Eğer ekran genişliği **800 piksel veya daha büyükse**, sayfanın arka planı **turuncu** olur.

📱 799px? ❌

💻 800px ve üstü? ✅

---

## **📐 Ekran genişliğini çizgi gibi hayal et:**

```
0px ---- 800px ---- 1000px ---- sonsuz
```

min-width: 800px dediğinde, **800 piksel ve sonrası** hedefleniyor:

```
👉 800px, 900px, 1200px, 2000px ... ✅
👈 799px, 700px, 500px ... ❌
```

---

## **“min-width” ne işe yarar?**

min-width, genelde büyük ekranlara (tablet, laptop, masaüstü) özel CSS yazmak için kullanılır.

Küçük ekranlar için varsayılan stil tanımlanır, büyük ekranlara geçince yeni kurallar devreye girer.

---

## **✍️ Kısa Not:**

| **Terim** | **Ne Anlama Gelir?** |
| --- | --- |
| min-width | Bu genişlikten **büyük veya eşitse** uygula |
| max-width | Bu genişliğe **kadar (dahil)** uygula |
| Breakpoint | Stil değişiminin olduğu genişlik noktasıdır |

---

## **🧠 Hatırlaması kolay cümle:**

> min-width
> 
> 
> **en az bu kadar büyükse**
> 

> max-width
> 
> 
> **bu kadar küçükse**
> 

---

İstersen sana min-width ve max-width farklarını gösteren karşılaştırmalı bir tablo ya da örnek HTML sayfası da verebilirim.