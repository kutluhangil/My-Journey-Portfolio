# Box-sizing özelliği

`box-sizing` özelliği, bir elemanın blok modelinin türünü tanımlar ve bu modelin boyut hesaplama yöntemini belirler.

`box-sizing: content-box | border-box | inherit`

- **`content-box`**: Bu durumda, `width` ve `height` özellikleri sadece içerik alanının genişliğini ve yüksekliğini belirler. Kenar boşlukları (`padding`), kenarlıklar (`border`) ve dış boşluklar (`margin`) bu hesaplamaya dahil edilmez. Bu, varsayılan değerdir.
- `border-box` - `width` ve `height` özellikleri öğenin son boyutunu belirler ve kenar boşluklarının (`padding`), kenarlıkların (`border`) değerlerini içerir ancak dış girintileri (`margin`) içermez.
- `inherit` - Bu değer, elemanın üst öğesinin `box-sizing` değerini miras alır.

```
Bir elemanın genişliği veya yüksekliği hesaplanırken kenar boşlukları dikkate alınmaz
```

## **box-sizing Nedir?**

box-sizing, bir HTML elemanının **toplam genişliğini ve yüksekliğini** nasıl hesaplayacağımızı belirler.

Bir HTML öğesinin kutu modeli (box model) dört parçadan oluşur:

```
+-------------------------------+
|           margin              |  ← dış boşluk
|   +-----------------------+   |
|   |       border          |   |  ← kenarlık
|   |   +---------------+   |   |
|   |   |   padding     |   |   |  ← iç boşluk
|   |   |  +--------+   |   |   |
|   |   |  | content |   |   |   |  ← içerik (width / height)
|   |   |  +--------+   |   |   |
|   |   +---------------+   |   |
|   +-----------------------+   |
+-------------------------------+
```

### **Şimdi 2 temel değerini inceleyelim:**

---

### **🔹 content-box**

### **(Varsayılan değer)**

- width ve height → **sadece içerik (content)** kısmını kapsar.
- **padding** ve **border** bu ölçülere **eklenir.**
- Yani toplam boyut hesaplanırken padding ve border da ayrıca eklenir.

### **🧪 Örnek:**

```
.box1 {
  box-sizing: content-box;
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid black;
}
```

- İçerik: 200px genişliğinde
- Padding: 20px * 2 (sağ + sol) = 40px
- Border: 5px * 2 = 10px

**Toplam görünür genişlik:** 200 + 40 + 10 = **250px**

---

### **🔹 border-box**

- width ve height → **padding ve border dahil** toplam boyutu kapsar.
- Yani tarayıcı tüm içeriği, padding’i ve kenarlığı bu genişlik ve yükseklik içinde **sıkıştırır**.

### **🧪 Örnek:**

```
.box2 {
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid black;
}
```

Burada **width 200px**’tir ve bu değer:

- İçeriği
- Padding’i
- Border’ı **birlikte** kapsar.

**Yani toplam görünür genişlik:** **200px** (değişmez!)

Tarayıcı içerik boyutunu padding ve border’dan sonra kalan alana göre **otomatik ayarlar.**

---

### **🔹 inherit**

Bu değer, üst öğenin (parent) box-sizing değerini miras alır.

```
.parent {
  box-sizing: border-box;
}
.child {
  box-sizing: inherit;
}
```

child elemanı da artık border-box davranışı gösterir.

---

## **🧠 Hangisini Kullanmalıyız?**

Günümüzde çoğu modern CSS projesinde **box-sizing: border-box** kullanılır çünkü:

- Toplam genişlik ve yükseklik kontrolü **daha kolay** olur.
- Özellikle padding ve border eklendiğinde hesaplama yapmanıza gerek kalmaz.

Genellikle şu şekilde tüm site için ayarlanır:

```
* {
  box-sizing: border-box;
}
```

---

## **🎯 Özet Tablo**

| **Değer** | **Genişlik / Yükseklik neyi kapsar?** | **Toplam Boyut Nasıl Hesaplanır?** |
| --- | --- | --- |
| content-box | Sadece içerik (content) | content + padding + border |
| border-box | İçerik + padding + border (hepsi dahil) | Sabit genişlik — padding ve border içeriden düşülür |
| inherit | Üst öğeden gelen değeri alır | Üstteki elemana bağlı |

---