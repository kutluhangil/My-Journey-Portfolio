# Mutlak Konumlandırma

*Bir öğenin belirli bir öğeye "eklenmesi" gerektiği oldukça sık görülür. Örneğin, bir ürün kartı resmine bir metin açıklaması eklenir.*

Mutlak konumlandırma, göreceli konumlandırmaya kıyasla tamamen farklı sonuçlar üretir.

1. Mutlak konumlandırma ile bir öğe sayfa akışından kaldırılır, yani etrafındaki diğer öğeler onun yerini alır.
2. `top`, `left`, `bottom` ve `right` özellikleri, öğenin konumunu ayarlamak için kullanılır. Ancak, bu özelliklerin değerlerinin hangi referansa göre ayarlandığını göz önünde bulundurmak önemlidir.
3. `position` özelliği `static` dışında olan en yakın üst öğeyi referans alır. Eğer böyle bir üst öğe bulunamazsa, referans olarak `<body>` öğesi kullanılır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/04b80b6a-c459-444d-b21f-38f8d67fb07eFrame%2048380.png)

Mutlak konumlandırma, genellikle tek başına çok kullanışlı değildir.

Daha etkili bir kullanım için genellikle göreceli konumlandırma ile birlikte kullanılır. Bu durumda, bir öğe sayfa akışındaki belirli bir üst öğeye göre "kesinlikle" konumlandırılır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/c8077889-84d1-413e-a8ee-d552e9cca78fFrame%2048381.png)

Bu bağlamda, mutlak konumlandırılmış öğenin `top`, `left`, `bottom` ve `right` değerleri `<body>`'den değil, bu üst öğenin çerçevesinden hesaplanır. Dolayısıyla, bir üst öğenin `position: relative` özelliği yalnızca mutlak konumlandırılmış öğeyi o üst öğeye göre konumlandırmak için kullanılır.

```
bottom: 20px ifadesi, göreceli konumlandırılmış üst öğenin alt kenarı ile mutlak konumlandırılmış öğenin alt kenarı arasındaki mesafeyi ifade eder. Benzer şekilde,right,left vetop değerleri de aynı şekilde çalışır; yani, bu değerler aynı üst öğenin ve mutlak konumlandırılmış öğenin kenarları arasındaki mesafeyi ayarlar.

```

Her birinde bir resim ve metin bulunan üç blok oluşturalım.

Metni bu bloktaki görüntünün üstüne yerleştirebilmek için `div.thumb` öğesini göreli konumlandırmaya ve `p.label` — öğesini mutlak konumlandırmaya ayarlayalım. `p.label`'deki kenar boşluğunu kaldırmayı unutmayın, çünkü bu, öğenin kendisinin ofsetini etkiler, ancak akıştaki diğer öğeleri etkilemez.

![Screen Shot 2025-07-25 at 22.26.49 PM.png](Mutlak%20Konumland%C4%B1rma/Screen_Shot_2025-07-25_at_22.26.49_PM.png)

```
div.thumb öğesinin göreceli konumlandırmasını belirtmezseniz,top veright değerler<body> öğesine göre hesaplanacağından, üçp.label da pencerenin sağ üst köşesinde yer alacaktır.
```

Bu metin aslında çok temel ama **çok önemli** bir CSS konusunu açıklıyor:

**Mutlak (absolute) konumlandırmanın nasıl çalıştığını** ve **neden genellikle göreceli (relative) konumlandırmayla birlikte kullanıldığını**.

Şimdi sana bunu ELI5 (çocuk seviyesinde açıklar gibi) şekilde, örneklerle anlatayım 👇

---

## **🎯 Ne anlatıyor?**

### **position: absolute → Öğeyi sayfa akışından çıkarır**

- Yani artık o öğe, diğer öğelerle birlikte hizalanmaz.
- **Boşluk kaplamaz**, sanki orada değilmiş gibi davranır.
- Artık onu manuel olarak istediğin yere koyman gerekir (top, left, right, bottom ile).

---

## **🧭 Ama nereye göre konumlanacak?**

Bu çok kritik:

> position: absolute olan bir öğe,
> 
> 
> **üstündeki ilk position: relative, absolute, fixed ya da sticky öğeye göre**
> 

🧱 Eğer böyle bir üst öğe **yoksa**, o zaman **body’ye (tüm sayfaya)** göre konumlanır.

---

## **📌 Neden position: relative ile birlikte kullanılır?**

Çünkü biz genelde bir öğeyi, **kendi kapsayıcısının içinde bir yere** koymak isteriz.

Mesela:

- Bir görselin üstüne yazı bindirmek (etiket gibi)
- Kartın içine sabit bir buton eklemek
- Bir öğenin sağ alt köşesine ikon eklemek

Bunları yapmak için:

### **✨ Ne yaparız?**

1. **Kapsayıcıya position: relative veririz.**
2. **İçindeki bindirilecek öğeye position: absolute veririz.**
3. Sonra top, left, bottom, right ile yerine karar veririz.

---

## **🧪 Örnek: Resmin üstüne yazı yerleştirme**

### **✅ HTML:**

```
<div class="thumb">
  <img src="https://via.placeholder.com/300x200" alt="resim" />
  <p class="label">Etiket</p>
</div>
```

### **✅ CSS:**

```
.thumb {
  position: relative; /* İçerideki absolute öğe buna göre hizalanır */
  width: 300px;
  height: 200px;
}

.label {
  position: absolute;
  top: 8px;
  right: 8px;
  margin: 0; /* Etiketin kendi boşluğu kaydırma yapmasın */
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}
```

---

## **✨ Ne olur?**

- .label (Etiket) öğesi **resmin sağ üst köşesine** konur.
- Eğer .thumb div’ine position: relative vermezsek, .label öğesi tüm sayfanın sağ üstüne fırlar!

---

## **💬 Son cümle ne diyor?**

> Eğer div.thumb’a position: relative vermezsen, o zaman p.label öğeleri body’ye göre hizalanır ve hepsi
> 
> 
> **sayfanın sağ üst köşesine üst üste**
> 

---

## **🧠 Kısaca:**

| **Terim** | **Ne işe yarar?** |
| --- | --- |
| position: absolute | Öğeyi tam istediğin yere koyar. Sayfa akışından çıkar. |
| position: relative | Kendi yerini korur ama içinde absolute öğelere referans olur. |

---

## **🧩 Ne zaman işine yarar?**

- Etiketler (indirim, yeni, vb.)
- Görselin üstüne yazı bindirme
- Kartın içinde sabit buton yerleştirme
- Açılır menüleri belli bir konumda gösterme
- Hover’la çıkan bilgi kutuları

---