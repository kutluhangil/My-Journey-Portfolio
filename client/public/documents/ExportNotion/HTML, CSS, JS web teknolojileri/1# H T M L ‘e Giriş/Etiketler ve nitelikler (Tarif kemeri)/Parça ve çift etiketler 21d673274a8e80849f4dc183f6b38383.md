# Parça ve çift etiketler

Önceki adımda bir resim ekledik ve `<img>` etiketinin diğerlerinden sözdizimsel olarak farklı olduğunu fark etmiş olabilirsiniz. `<img>` etiketi tekil bir etikettir; yani aynı isimde bir kapanış etiketi kullanımını gerektirmez.

Çift etiketler:

- Açılış ve kapanış etiketlerinden oluşur;
- Açılış ve kapanış etiketleri metin içeriğini sarmalar;
- İçerikleri konu ve içerik açısından gruplamayı sağlar;
- Çift etiketlerin içine başka etiketler yerleştirilebilir.

Yerleştirme konusunu daha detaylı olarak daha sonra ele alacağız.

`*<!-- Başlığı ve paragrafı olan bir makale -->*<article>
	<h1>Kısaca çift etiketleri hakkında</h1>
	<p>
    Çoğu etiket eşleştirilmiştir. İçerikleri açılış ve kapanış etiketlerinin arasına yerleştirilir.
  </p>
</article>`

Tekil etiketler:

- Sadece açılış etiketinden oluşurlar;
- Metin içeriği bulundurmazlar;
- İçerik veya davranışlarını özniteliklerden alırlar;
- Belgenin özelliklerini değiştirmek, dosyaları eklemek vb. için kullanılırlar.

Bu tür etiketlerden biri `<img>` etiketidir. İçeriği `src` özniteliğinde belirtilir.

`*<!-- Kodlama hakkında meta bilgiler -->*<meta charset="utf-8" />
*<!-- Giriş alanı -->*<input type="text" />
*<!-- Görüntü -->*<img src="cat.jpg" alt="cool cat" />`

Özetle:

### **(alternatif metin) özelliği nedir?**

- Görsel yüklenmezse ya da kullanıcı görme engelliyse, **alt niteliği sayesinde görselin ne olduğu hakkında bilgi verilir.**

---

### **📌 Kurallar:**

1. **Her <img> etiketi mutlaka alt niteliği içermelidir.**
2. alt metni, **resimde ne gösterildiğini** açıkça anlatmalıdır.
3. **Tam bir cümle gibi olmalıdır**, örnek:
    
    ✅ "Gri ahşap masa üzerinde Macbook Air."
    
4. Açıklama:
    - **Eşsiz olmalı** (yani kopya metin olmamalı),
    - Metin içinde zaten yazan şeyleri **tekrar etmemeli**,
    - “Resim”, “fotoğraf”, “illüstrasyon” gibi kelimeler **kullanılmamalıdır**.

---

### **🐾 Örnekler:**

📉 Kötü:

```
<img src="kittens.jpg" alt="Yavru kediler" />
```

📈 İyi:

```
<img src="kittens.jpg" alt="Battaniye üzerinde oynayan beş kedi yavrusu." />
```

---

Kısacası: alt niteliği, resmi göremeyen bir kişiye **gözleriyle görüyormuş gibi** durumu tarif etmelidir.

Gereksiz kelimelerden kaçın, **öz ama net ol**.