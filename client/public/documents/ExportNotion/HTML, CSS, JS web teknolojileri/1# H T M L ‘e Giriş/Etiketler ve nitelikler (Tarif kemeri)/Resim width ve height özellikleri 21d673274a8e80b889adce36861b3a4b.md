# Resim: width ve height özellikleri

Tarayıcı varsayılan olarak herhangi bir resmi (resim, fotoğraf, şema) orijinal boyutunda görüntüler.

Resmin boyutlarını değiştirmek için `<img>` etiketi `width` ve `height` özelliklerine sahip olmalıdır. Bunlar resmin tarayıcıdaki genişliğini ve yüksekliğini belirler. Değerler piksel cinsinden belirtilir, yani ekrandaki noktalar olarak. Kodda yalnızca `px` işareti olmadan bir sayı belirtilir (aşağıdaki örneğe bakınız).

Eğer yalnızca bir boyut belirlenirse - genişlik veya yükseklik - tarayıcı oranı korumak için diğer boyutu otomatik olarak hesaplar.

`<img
  src="<https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg>"
  alt="Gri ahşap masa üzerinde Macbook Air"
  width="400"
/>`

### **📌 Örnek:**

```
<img
  src="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg"
  alt="Gri ahşap masa üzerinde Macbook Air"
  width="300"
  height="200"
/>
```

---

### **✅ Açıklaması:**

- **width="300"** → Görselin genişliği 300 piksel olarak ayarlanır.
- **height="200"** → Görselin yüksekliği 200 piksel olarak ayarlanır.
- Tarayıcı, resmi bu belirlenen ölçülerle gösterir.
- Eğer sadece width="300" yazarsan, yüksekliği otomatik olarak oranlı şekilde ayarlanır.

---

### **📌 Sadece genişlik belirlenirse:**

```
<img
  src="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg"
  alt="Gri ahşap masa üzerinde Macbook Air"
  width="300"
/>
```

Tarayıcı bu durumda orijinal oranı koruyarak yüksekliği **otomatik hesaplar**.

---