# transition-property özelliği

`transition-property` özelliği, geçiş efektinin uygulanacağı özellikleri belirtir. Değer tek bir özellik veya virgülle ayrılmış bir özellik listesi olabilir.

Varsayılan değer `all’`dır — bu da tüm özelliklerin geçiş efektine dahil edileceği anlamına gelir.

`.box {
  background-color: teal;
  transition-property: background-color;
}

.box:hover {
  background-color: orange;
}`

```
Animasyon uygulanabilecek özelliklerin listesi gelecekte değişebilir. Bu nedenle, canlandırmak istediğiniz özelliği belirtmelisiniz, aksi takdirde öğenin tüm olası özellikleri canlandırılacak ve bu da beklenmedik sonuçlara yol açacaktır.

```

Birden fazla özellik belirtmeniz gerekiyorsa, bunlar virgülle ayrılır.

`.box {
	color: orange;
  background-color: teal;
  transition-property: color, background-color;
}

.box:hover {
  background-color: orange;
	color: white;
}`

Soruda verilen CSS koduna ve şıklara birlikte bakalım. Önce kodu analiz edelim:

---

### **📄 Kod:**

```
.button {
  color: black;
  background-color: gray;
  font-size: 14px;
  transition-property: opacity font-size;
}

.button:hover {
  font-size: 36px;
}
```

---

### **⚠️ Görülen Hatalar:**

### **✅ 1. transition-property içinde belirtilen özellikler virgülle ayrılmalıdır.**

Doğru.

Şu anki yazımda:

```
transition-property: opacity font-size;
```

yanlış. Çünkü özellikler boşlukla değil, **virgül** ile ayrılmalı.

✔ Doğru yazımı şöyle olmalı:

```
transition-property: opacity, font-size;
```

---

### **✅ 2. opacity özelliği için son durumu belirtmelisiniz.**

Doğru.

opacity geçiş yapılacak bir özellik olarak yazılmış ama .button veya .button:hover sınıflarında **hiçbir yerde opacity belirtilmemiş**. Bu durumda opacity için bir değişim olmadığı için **transition da çalışmaz**.

Bunu düzeltmek için, örneğin :hover durumunda opacity eklenmelidir:

```
.button {
  opacity: 1;
  transition-property: opacity, font-size;
}

.button:hover {
  font-size: 36px;
  opacity: 0.7;
}
```

---

### **.button:hover sınıfı, .button sınıfı ile aynı özelliklere sahip olmalıdır**

Bu yanlıştır.

.button:hover sınıfı, sadece değişmesini istediğiniz özellikleri içermek zorunda. Diğer özellikleri tekrar yazmak gerekmez. Yani bu bir hata **değildir**.

---

### **✅ Sonuç — Doğru Yanıtlar:**

1. ✅ **transition-property içinde belirtilen özellikler virgülle ayrılmalıdır.**
2. ✅ **opacity özelliği için son durumu belirtmelisiniz.**