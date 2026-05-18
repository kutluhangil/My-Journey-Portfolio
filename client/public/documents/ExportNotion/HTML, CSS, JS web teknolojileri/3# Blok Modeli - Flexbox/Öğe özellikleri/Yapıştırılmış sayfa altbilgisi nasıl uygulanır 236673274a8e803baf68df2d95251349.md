# Yapıştırılmış sayfa altbilgisi nasıl uygulanır?

Bunu uygulamak için ek bir sarmalayıcı öğeye ihtiyacımız var.

`<div class="page-container">
	<header>Page header</header>
	<main>Main content</main>
	<footer>Page footer</footer>
</div>`

1. Yapacağımız ilk şey, `vh` birimlerini kullanarak (viewport height - viewport yüksekliğinin yüzdesi 5vh = yüksekliğin %5'i) kullanıcının ekranındaki tarayıcı sekmesinin yüksekliğinin %100'ü kadar minimum bir yüksekliğe ayarlamaktır.

`.page-container {
	min-height: 100vh;
}`

2. Ardından, bunu bir flex konteynere dönüştürün ve ana eksenin yönünü dikey, yani yukarıdan aşağıya doğru değiştirin. Bu, flex öğeleri bir sütun halinde düzenlenmeye zorlayacaktır.

`.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}`

3. Yapılması gereken tek şey, `flex-grow` özelliğini `main` olarak ayarlayarak ana eksendeki tüm boş alanı kaplamasını sağlamak ve altbilgiyi sonuna, yani aşağıya taşımaktır.

`main {
  flex-grow: 1;
}`

Şimdi, `main` ne kadar içerik olursa olsun, her zaman altbilgi ve üstbilgiden sonra kalan ana eksendeki tüm boş alanı kaplar.

**“Sayfa kısa bile olsa footer (altbilgi) her zaman ekranın en altında görünsün”** istiyoruz. İşte bu duruma **“yapıştırılmış altbilgi (sticky footer)”** deniyor.

---

## **🔧 Bu Yapının Amacı Ne?**

Bir web sayfası yaptığında eğer içerik kısaysa, footer genelde yukarıda kalır. Ama biz footer’ın **her zaman ekranın en altına yapışmasını** isteriz. Bunu yapmanın en modern ve kolay yolu Flexbox kullanmaktır.

---

## **✅ Nasıl Yapılır? 3 Adımda Açıklayalım:**

---

### **1. HTML Yapısı**

HTML içine tüm sayfayı saran bir <div class="page-container"> eklersin:

```
<div class="page-container">
  <header>Page header</header>
  <main>Main content</main>
  <footer>Page footer</footer>
</div>
```

Bu page-container, tüm sayfa düzenini taşıyan kapsayıcıdır.

---

### **2. Kapsayıcıya Yükseklik Ver (min-height: 100vh)**

```
.page-container {
  min-height: 100vh;
}
```

🔸 100vh = ekran yüksekliğinin %100’ü

Yani bu satır, kapsayıcıya **ekran kadar bir yükseklik** verir. Eğer içerik azsa bile en az ekran boyutunda olur.

---

### **3. Kapsayıcıyı Flexbox’a Çevir**

```
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
```

- display: flex → Kapsayıcıyı Flexbox yapar.
- flex-direction: column → Elemanlar yukarıdan aşağı sıralanır (header, main, footer).

---

### **4. main’e flex-grow: 1 Ver**

```
main {
  flex-grow: 1;
}
```

Bu satır, main’e **kalan tüm boşluğu kaplama** görevi verir.

- Eğer içerik kısaysa: main, boş alanı kaplar → footer alta itilir.
- Eğer içerik uzunsa: Zaten sayfa uzadığı için footer doğal olarak aşağıya gider.

---

## **📊 Sonuç Ne Olur?**

Her durumda sayfa şu şekilde görünür:

```
[header]
[main - içerik]
[footer]  ← her zaman sayfanın en altında
```

---

## **🎯 Kısaca Hatırlayalım:**

| **Adım** | **Açıklama** |
| --- | --- |
| 1 | .page-container kapsayıcıya min-height: 100vh ver |
| 2 | display: flex ve flex-direction: column yap |
| 3 | main’e flex-grow: 1 ver → boş alanı o kapsasın |
| ✅ | Böylece footer her zaman alta yapışır |

---