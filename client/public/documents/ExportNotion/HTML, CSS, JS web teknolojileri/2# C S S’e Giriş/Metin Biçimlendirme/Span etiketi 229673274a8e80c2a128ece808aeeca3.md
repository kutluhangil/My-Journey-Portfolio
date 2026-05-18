# Span etiketi

`span` etiketi, bir metin dizisi içindeki tek sözcükler, sözcük parçaları veya tüm ifadeler gibi küçük metin içeriği için kullanılan genel amaçlı bir kapsayıcıdır. Bu etiketin kendisi anlamsal bir bilgi taşımaz ve ek stil vermek amacıyla kullanılır.

`<p>
  Тег <span class="accent">span</span> küçük metin içeriği için evrensel bir kapsayıcıdır.
</p>`

```
CSS'yi kullanarak <span> etiketinetheclass="accent" niteliğiyle stiller ekleyebilirsiniz, örneğin farklı bir metin rengi, metin boyutu vb.
```

---

### **<span> etiketi nedir?**

<span> = “Küçük parçaları süslemek için kullanılan yapışkanlı not”

> Düşün ki bir kitap okuyorsun ve bir kelime çok önemli. İşte o kelimeyi vurgulamak için fosforlu kalemle altını çiziyorsun.
> 

> HTML’de bunu yapmak için <span> etiketini kullanırız.
> 

Ama:

🔴 <span> kelimenin anlamını değiştirmez.

🔴 Ekran okuyucular ya da Google, bu kelimenin özel bir anlamı olduğunu düşünmez.

✅ Sadece süsleme (renk, kalınlık vs.) yapmak içindir.

---

### **📦 Neden**

### **<span>**

### **kullanıyoruz?**

Çünkü HTML’de genelde tüm paragrafı değil de, sadece **bir kelimeyi ya da ifadeyi** vurgulamak isteriz.

Ama bu kelimeyi vurgulamak için paragrafı (<p>) ya da başlık (<h1>) gibi büyük şeyleri kullanamayız.

İşte bu küçük işler için **küçük bir kapsayıcı** olan <span> var!

---

### **🧪 Örnek**

```
<p>Bu bir <span class="kirmizi">önemli</span> kelimedir.</p>
```

Burada:

- Tüm cümle bir paragraf.
- Sadece **“önemli”** kelimesine özel bir stil vereceğiz.
- O yüzden bu kelimeyi <span> ile sardık.
- Ve buna class="kirmizi" adını verdik.

---

### **🎨 CSS ile nasıl süsleriz?**

```
.kirmizi {
  color: red;
  font-weight: bold;
}
```

Yani .kirmizi sınıfına sahip olan şey kırmızı ve kalın olur.

Bu kuralları sadece span değil, başka etiketler de kullanabilir.

---

### **✅ Doğru bilgiler**

1. <span> semantik (anlamlı) bir etiket değildir.
2. Ama CSS ile istediğin kelimeye stil vermek için mükemmeldir.
3. Stil vermek için:
    - Kelimeyi <span> içine al
    - Bir class adı ver
    - CSS’de bu sınıfı tanımla

---

### **❌ Yanlış anlaşılmasın**

- <span> ekran okuyuculara “burası önemli!” demez.
- Google’a da “burası manalı bir şey” diye bilgi vermez.
- Sadece süsleme, görünüş içindir.

---