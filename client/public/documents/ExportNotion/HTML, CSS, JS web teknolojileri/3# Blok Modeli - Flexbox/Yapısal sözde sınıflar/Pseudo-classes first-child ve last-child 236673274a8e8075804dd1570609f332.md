# Pseudo-classes :first-child ve :last-child

`first-child` ve `last-child` sözde sınıfları, komşu öğelerden oluşan bir koleksiyonda yalnızca ilk veya son öğeye uygulanan bir seçici oluşturmanıza olanak tanır. Bu sayede, belirli öğeleri hedef alarak stil vermeniz mümkün olur.

`<ul class="list">
  <li class="list-item">HTML</li>
  <li class="list-item">CSS</li>
  <li class="list-item">JavaScript</li>
  <li class="list-item">React</li>
</ul>`

`.list-item {
  color: blue;
}

.list-item:first-child {
	color: red;
}

.list-item:last-child {
	color: green;
}`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/518f51df-7a2a-4d36-aee5-c7ec3ab0235cFrame%2048265.png)

Liste öğeleri arasında bir kenar boşluğu olması gerektiğini düşünün (aşağıdaki diyagramda turuncu ile gösterilmiştir). Her liste öğesinin bir alt veya üst `margin` değeri olması gerekir.

Ancak, bu durumda, listenin ilk öğesi için bir üst kenar boşluğuna veya son öğesi için bir alt kenar boşluğuna ihtiyaç duyulmaz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/559eb001-4372-4684-bc77-8497a51c8270Frame%2048277.png)

Gereksiz kenar boşluklarını temizlemek, istemeden ana kapsayıcıyı etkilememek için önemlidir.

`.list-item {
  margin-bottom: 12px;
}

.list-item:last-child {
  margin-bottom: 0;
}`

![Screen Shot 2025-07-20 at 19.35.14 PM.png](Pseudo-classes%20first-child%20ve%20last-child/Screen_Shot_2025-07-20_at_19.35.14_PM.png)

---

## **🎨 Hayal Et:**

Bir oyuncak kutun var ve içine 4 tane blok diziyorsun:

🟥 HTML

🟦 CSS

🟨 JavaScript

🟩 React

Bunlar bir sıra halinde duruyor.

---

## **🧩 Her bloğun altına biraz boşluk koyuyorsun:**

```
.list-item {
  margin-bottom: 12px;
}
```

Yani her bloğun altında biraz **nefes alma alanı** var. (Bu boşluk, margin-bottom: 12px oluyor.)

Ama… 🎯

## **❗ Sorun:**

**En sondaki bloğun** altında boşluk koyarsan, kutunun en altında **gereksiz bir boşluk** olur.

Bu da kutunun altında ekstra yer kaplar. Bu genellikle tasarımda istenmez.

---

## **✅ Çözüm:**

Son bloğa özel davran:

```
.list-item:last-child {
  margin-bottom: 0;
}
```

🟩 React bloğu, **en son olduğu için** altına artık boşluk bırakmazsın.

---

## **👶 Şimdi gelelim**

## **:first-child**

## **ve**

## **:last-child**

## **nedir?**

- :first-child → **İlk çocuğa** özel stiller uygular.
    
    Yani sadece HTML bloğu etkilenir.
    
- :last-child → **Son çocuğa** özel stiller uygular.
    
    Yani sadece React bloğu etkilenir.
    

---

## **🧠 Özetle:**

| **Pseudo-class** | **Anlamı** | **Ne işe yarar?** |
| --- | --- | --- |
| :first-child | İlk öğe | Özel stil verilir (örneğin rengi kırmızı yapmak) |
| :last-child | Son öğe | Özel stil verilir (örneğin boşluğu kaldırmak) |

---

## **🔚 Neden önemli?**

- Sayfan daha düzenli görünür
- Gereksiz boşluklar olmaz
- Tüm öğelere tek tek sınıf yazmadan sadece **ilk veya son** için özel kurallar yazabilirsin

---