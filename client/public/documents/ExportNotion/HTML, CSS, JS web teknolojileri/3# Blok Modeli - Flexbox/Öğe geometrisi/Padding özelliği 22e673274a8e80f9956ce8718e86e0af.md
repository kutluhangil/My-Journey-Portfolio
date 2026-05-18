# Padding özelliği

**`Padding`** özelliği, öğenin tüm kenarları için içerik ile çerçeve arasındaki iç kenar boşluklarını kontrol eden bir özelliktir: üst (top), sağ (right), alt (bottom) ve sol (left). Bu özelliğin değerleri saat yönünde üstten başlayarak belirtilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/c60cb80b-9a05-47a5-8957-a21e1c8b6487Frame%2048394.png)

Sonuç, özellik değerlerinin sayısına bağlıdır.

`*/* Her tarafta aynı 20px kenar boşlukları */*padding: 20px;

*/* Üst ve alt kenar boşlukları 10px, sol ve sağ kenar boşlukları 20px */*padding: 10px 20px;

*/* Üst marj 10px, sol ve sağ marj 20px, alt marj 5px */*padding: 10px 20px 5px;

*/* Üst marj 10px, sağ marj 15px, alt marj 20px, sol marj 25px */*padding: 10px 15px 20px 25px;`

`Padding`, dekoratif efektler oluşturmak için kullanılır. Örneğin, aşağıdaki canlı örnekte olduğu gibi, öğe çerçevesi ile içeriği arasında boşluk oluşturmak için kullanılır. Eğer `padding` ayarlamazsanız, metin paragraf kenarlığına dokunacaktır.

Canlı bir örneğe bakalım.

- **HTML** sekmesine gidin ve sayfa düzenine bakın.
- **CSS** sekmesinde, padding, border ve margin özelliklerinin değerlerine bakın.
- **Result** sekmesinde, öğenin tarayıcıda nasıl görüntülendiğini görün.
    
    ![Screen Shot 2025-07-13 at 23.52.55 PM.png](Padding%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-13_at_23.52.55_PM.png)
    
    ![Screen Shot 2025-07-13 at 23.52.47 PM.png](Padding%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-13_at_23.52.47_PM.png)
    

```
Kenarlık özellikleri açıkça belirtilmese bile, kenarlık hala mevcuttur. Varsayılan olarak, genişliği0dır ve öğenin geometrisini oluşturmak için kullanılır, böylece kenarlık ve içerik arasındaki boşluğu her zaman ayarlayabilirsiniz.
```

# **Kod parçacığını inceleyin**

`div {
  box-sizing: border-box;
  padding: 10px 20px;
  border: 1px solid #000;`

---

### **✅ KOD ANALİZİ**

### **box-sizing: border-box;**

- Genişlik ve yükseklik verildiğinde, bu değer **padding + border + içerik dahil toplamı** kapsar.
- Yani **padding ve border artık ekstra genişlik eklemez**, onun içine dahildir.

### **padding: 10px 20px;**

- Kısa not: CSS’te padding: yukarı-aşağı sağ-sol; şeklindedir.
- Burada:
    - **Üst ve alt**: 10px
    - **Sağ ve sol**: 20px

### **border: 1px solid #000;**

- Bu, her dört kenara da uygulanır:
    - **Üst, alt, sağ, sol**: 1px kalınlık
    - Renk: siyah
    - Stil: düz çizgi

## **✅ SONUÇ: DOĞRU CEVAPLAR**

1. ✅ Tarayıcı, öğenin toplam genişliği ve yüksekliği kadar dolgu ve kenarlık içerir.
2. ✅ Dolgu (öğenin içeriğinden çerçevesine olan mesafe) üstte ve altta 10 piksel, sağda ve solda 20 pikseldir.
3. ✅ Öğenin etrafında 1 piksellik düz siyah bir kenarlık vardır.

---