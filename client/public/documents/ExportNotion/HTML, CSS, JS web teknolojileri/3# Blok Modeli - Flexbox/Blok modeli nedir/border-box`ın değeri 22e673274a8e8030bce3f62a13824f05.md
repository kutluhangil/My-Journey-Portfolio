# border-box`ın değeri

Bu blok modelinde, `width` ve `height` özellikleri, öğenin toplam boyutlarını belirler. İçerik, `padding` ve `border` değerlerine göre otomatik olarak "sıkıştırılır", böylece eleman bu değerleri kapsar.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/8c9cd621-b511-4587-b615-2b3309df6e42Frame%2047921.png)

`border-box` değerine sahip bir bloğun son genişliğini ve yüksekliğini hesaplamak için formüller.

`Genişlik = width
Yükseklik = height`

Eğer `box-sizing` özelliğini `border-box` olarak ayarlarsanız, geçerli elemanın kutu modelinin tipi değişecektir.

`.box {
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  border: 5px solid #f44336;
  padding: 30px;
  margin: 100px;
  background-color: #ffeb3b;
}`

Geliştirici araçlarında, `Elements > Computed` sekmesi bu elemanın geometrisini gösterir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/71824011-b525-4fb7-b48f-fab7bb3a8899image%20%2820%29.png)

## **📦 1. box-sizing: border-box;**

## **Ne Anlama Geliyor?**

```
.box {
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  border: 5px solid #f44336;
  padding: 30px;
  margin: 100px;
  background-color: #ffeb3b;
}
```

Bu örnekte box-sizing: border-box; olduğu için şunlar geçerlidir:

- **width = 150px**
- **height = 150px**

Ama bu ölçüler:

- İçerik (content)
- Kenar boşlukları (padding)
- Kenarlıklar (border)

**hepsi dahil edilmiş toplam ölçüdür.**

---

## **✅ Bu Ne Demek?**

Sen tarayıcıya width: 150px dediğinde, tarayıcı bu 150 pikselin içine hem paddingi hem borderı sığdırır. İçeriğin genişliği bu değerlere göre **otomatik daraltılır**.

---

### **🔍 Genişlik Nasıl Hesaplanır?**

```
Toplam genişlik = border + padding + content = 150px (SABİT)
```

Yani:

- border: 5px (sağ) + 5px (sol) = 10px
- padding: 30px (sağ) + 30px (sol) = 60px
- içerik (content): 150 - 10 - 60 = **80px**

Aynı şey yükseklik için de geçerlidir:

- height = 150px
- padding + border çıktıktan sonra kalan içerik yüksekliği = **80px**

---

## **❗ Margin Dahil Değil**

```
margin: 100px;
```

- Bu değer sadece kutunun **etrafındaki boşlukları** belirler.
- width ve height hesaplamasına **dahil edilmez**.
- Tarayıcı öğeyi çizerken bu margin değerini, diğer öğelerden boşluk bırakmak için kullanır.

---

## **🧪 Geliştirici Araçlarında Nasıl Görülür?**

Tarayıcının geliştirici araçlarında (örneğin Chrome’da):

1. Sağ tıklayıp → “İncele” dersen
2. Elements sekmesinde box sınıfına ait HTML öğesini bulursun
3. Yan sekmede **Computed** bölümüne geçersen
4. Bir **kutu diyagramı (box model)** görürsün. Burada:
    - İçerik boyutu
    - Padding
    - Border
    - Margin
        
        hepsi ayrı ayrı gösterilir.
        

Bu sana, elemanın ekranda **gerçekte ne kadar yer kapladığını** görsel olarak anlatır.

---

## **🎯 Özet**

> box-sizing: border-box; kullandığında,
> 
> 
> **padding ve border değerleri width/height içine dahil edilir.**
> 

> Tarayıcı, bu değerlere göre
> 
> 
> **içeriği küçültür.**
> 

> Geliştirici araçlarındaki “Computed” sekmesi bu hesaplamaları görsel olarak gösterir.
> 

| **Soru** | **Doğru Cevap** | **Neden?** |
| --- | --- | --- |
| Varsayılan tarayıcı stilinde hangi model kullanılır? | content-box | Tarayıcılar varsayılan olarak content-box uygular |
| Modern projelerde standart olan kutu modeli hangisidir? | border-box | Daha kolay hesaplama ve daha az hata için border-box tercih edilir |