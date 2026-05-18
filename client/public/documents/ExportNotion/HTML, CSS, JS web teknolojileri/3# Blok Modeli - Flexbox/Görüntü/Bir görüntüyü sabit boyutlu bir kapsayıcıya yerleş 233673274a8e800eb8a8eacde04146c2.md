# Bir görüntüyü sabit boyutlu bir kapsayıcıya yerleştirme

Bu tekniğin işe yaraması için iki zorunlu adım vardır.

`<div class="thumb">
  <img src="" alt="" />
</div>`

İlk olarak, konteynere açıkça sabit bir yükseklik verilmelidir. Genişlik, canlı örnekte olduğu gibi ana öğenin genişliği olabilir.

`.thumb {
  height: 400px;
  width: 300px;
}`

İkinci olarak, img yüksekliğini ve genişliğini %100 olarak ayarlayarak ve `object-fit` i belirterek görüntüyü konteynere "sığdırmanız" gerekir.

`.thumb img {
  height: 100%;
  width: 100%;
	object-fit: cover;
}`

```
img öğesinin kendisi için sabit boyutlar ayarlayarak bir kapsayıcı kullanmaktan kaçınabilirsiniz, ancak bu en yaygın düzendir. Kapsayıcı elemanı, görüntü alanıyla ilgili animasyonlar ve diğer dekoratif efektler oluşturmak için kullanılır.
```

---

## **Bir Görüntüyü Sabit Boyutlu Bir Kapsayıcıya Yerleştirme**

Amaç:

Bir resmi belirli boyutlara sahip bir kutuya (örneğin 300x400px) yerleştirmek ve bu kutunun dışına taşmadan, hem şık hem de uyumlu şekilde göstermektir.

---

### **1. Adım: Kapsayıcıya (container) sabit boyut ver**

İlk iş, resmin içinde bulunacağı dış kutuya (div) sabit bir yükseklik ve genişlik tanımlamak:

```
.thumb {
  height: 400px;
  width: 300px;
}
```

Bu, resmin yerleştirileceği alanı tanımlar. Örneğin bir ürün kartı gibi düşünebilirsin.

---

### **2. Adım: Görüntüyü kapsayıcıya orantılı şekilde sığdır**

Şimdi <img> etiketinin **kapsayıcıyı tamamen doldurması**, ama **bozulmaması** ya da **taşmaması** için şu ayarları yaparız:

```
.thumb img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

Açıklamaları:

- width: 100% → Resim, kapsayıcının genişliğini tamamen kaplar.
- height: 100% → Aynı şekilde yüksekliği de tamamen doldurur.
- object-fit: cover → Resim, **orantılı olarak** boyutlandırılır ve kapsayıcıya taşmadan tam sığar.
    
    Gerekirse **bir kısmı kırpılır**, ama hiçbir şekilde deforme olmaz.
    

---

### **🔍 Neden bu yöntem kullanılıyor?**

Çünkü doğrudan <img> öğesine sabit boyutlar vermek (örneğin img { width: 300px; height: 400px }) genellikle:

- Resmin orantısını bozar,
- Görüntü kötü ve sıkışık görünür.

Bunun yerine, bir kapsayıcı (div.thumb) ile alanı kontrol edip resmi bu alana sığdırmak, hem daha esnek hem de görsel olarak daha hoş bir yöntemdir.

---

### **Ekstra Avantaj: Kapsayıcıya dekoratif efektler verebilirsin**

Örneğin .thumb kapsayıcısına:

- Kenarlık (border),
- Gölge (box-shadow),
- Hover efekti,
- Yuvarlatılmış köşe (border-radius)
- Geçiş animasyonu (transition)

gibi CSS stilleri ekleyebilirsin. Bu tür şeyler doğrudan <img> öğesinde zor olur, ama kapsayıcı ile çok kolay yapılır.

---

### **🧠 Kısaca Özet**

| **Öğrenilen** | **Açıklama** |
| --- | --- |
| .thumb | Resmi çevreleyen sabit boyutlu kutu |
| width: 100%; height: 100% | Resmin kutuyu tamamen kaplaması için |
| object-fit: cover | Resmin orantılı ve estetik biçimde sığması |
| Neden kapsayıcı? | Görsel efektler, animasyonlar, layout kontrolü için |

---