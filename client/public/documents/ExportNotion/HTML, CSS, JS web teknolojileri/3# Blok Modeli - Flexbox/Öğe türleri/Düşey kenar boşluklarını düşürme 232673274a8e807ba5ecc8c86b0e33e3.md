# Düşey kenar boşluklarını düşürme

İç içe geçmiş bir bloğun dikey kenar boşluğu, üst bloğun kenar boşluğuna eklenmez. Bunun yerine, her iki bloğu (üst ve iç içe geçmiş) komşu öğelerden veya sayfanın üst kısmından uzaklaştırır.

Eğer üst öğenin de bir üst kenar boşluğu varsa, daha büyük kenar boşluğu değeri uygulanır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f37aac57-e78c-4457-b4b2-e3f5b24bad24Frame%2048018.png)

`<div class="outer-box">
  <div class="inner-box"></div>
</div>`

`div.inner-box` için `40px` üst kenar boşluğu ayarlandığında, sonuç olarak `div.outer-box` öğesi ekranın kenarından veya komşu öğeden uzaklaşır, üst kenar boşluğunun etkisi doğrudan üst öğenin kenarından gözlemlenmez.

`.outer-box {
  width: 200px;
  height: 200px;
  background-color: teal;
}

.inner-box {
  width: 100px;
  height: 100px;
  margin-top: 40px;
  background-color: palevioletred;
}`

```
Ana bloğun üst ve alt kenar boşlukları birleştiğinde, üst öğe içindeki kenar boşluğu dışarı taşabilir. Bu en yaygın düzen hatalarından biridir. Kenar boşluklarını yalnızca bitişik öğeler arasında düzenlemeye özen gösterin.
```

---

### **🧱 Durum: İç içe kutular var**

```
<div class="outer-box">
  <div class="inner-box"></div>
</div>
```

```
.outer-box {
  width: 200px;
  height: 200px;
  background-color: teal;
}

.inner-box {
  width: 100px;
  height: 100px;
  margin-top: 40px;
  background-color: palevioletred;
}
```

---

### **❓ Beklenti ne olur?**

Sen belki şunu beklersin:

.inner-box yukarıdan 40px boşluk bırakır → ama bu boşluk, .outer-box kutusunun **içinde olur**.

---

### **⚠️ Gerçekte ne olur?**

CSS böyle çalışmaz. Eğer bir **blok elemanın ilk çocuğu**, üstten margin-top değerine sahipse, bu boşluk bazen **ana kutunun dışına taşar!**

Yani:

- margin-top: 40px **inner-box’a** verilir
- Ama boşluk **outer-box’ın da dışına** etki eder
- Sonuç: Tüm .outer-box ekranın tepesinden 40px aşağıya kayar

---

### **📌 Peki neden böyle oluyor?**

Bu, CSS’teki **“margin collapsing”** davranışıdır:

### **🔽 Kurallar:**

1. **İki dikey margin** üst üste geldiğinde → sadece **büyük olan uygulanır.**
2. Bir **çocuk öğe**, sadece margin-top içeriyorsa → bu boşluk **ebeveyne taşar**.
3. Aynı şey margin-bottom için de geçerli olabilir.

---

### **💡 Ne yapmak gerekir?**

- **Kenar boşluğunu sadece bitişik öğeler için kullan**. (Yani: kardeşler arası margin)
- Eğer inner-box’ın margin’inin dışarı taşmasını istemiyorsan:
    - Ebeveyn kutuya padding-top, border, ya da overflow: hidden gibi bir şey verebilirsin.

---

### **✅ Özet:**

> Eğer bir kutunun içine başka bir kutu yerleştirirsen ve içteki kutuya margin-top verirsen, bu boşluk bazen **dış kutuya da etki eder**. Bu da tasarımı bozabilir. Bu yüzden dikey boşlukları planlarken **sadece öğeler arası margin** kullanmak en doğrusudur.
>