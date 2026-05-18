# DOM Navigasyonu

DOM, bir eleman ve içeriğiyle çalışma imkanı sunan geniş bir yelpazeye sahiptir. Ancak bu imkanlardan yararlanmak için, öncelikle — örneğin `document.querySelector()` yöntemiyle — ona bir referans almak gerekir.

DOM elemanları hiyerarşik bir ilişkiye sahiptir. Bu ilişkileri tanımlamak için **atasal**(ancestor), **soy** (descendant), **ebeveyn** (parent), **çocuk** (child) ve **kardeş** (sibling) terimleri kullanılır.

- En üst eleman **kök düğüm** olarak adlandırılır.
- Kök düğüm haricindeki her elemanın yalnızca bir **ebeveyni** vardır.
- Bir elemanın istediği kadar **çocuğu** olabilir.
- **Kardeşler**, ortak bir ebeveyn elemana sahip elemanlardır.
- **Çocuk elemanlar**, mevcut elemana doğrudan gömülü olan elemanlardır (yüksek seviyede gömülü olmayan elemanlar).
- **Soylar**, mevcut elemanda bulunan, çocuklarının çocuklarıyla birlikte tüm elemanları içerir. Yani bir ağacın yapısına benzer şekilde.

Aşağıdaki şemada `<ul>` bir **ebeveyn** elemandır. Üç `<li>` elemanı, `<ul>` için **çocuklardır** ve birbirleri arasında **kardeştirler**. Aynı şekilde, `<span>`, `<a>`, `<p>`elemanları da **kardeştir**. Tüm bunlar, `<li>` için **çocuktur** ve `<ul>` için **soy**dur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/07ab207e-2f00-4ff1-8df1-aa84a788e34bFrame%2048661.jpg)

Bu hiyerarşi üzerinde gezinmek için öğeler şu özelliklere sahiptir:

- `elem.parentNode` – `elem` düğümünün ebeveyn düğüm-elemanına referans içerir.
- `elem.childNodes` – `elem` düğümünde tüm alt düğüm-elemanları ve metin düğümlerini içeren bir yarı-dizi (NodeList) bulunur.
- `elem.children` – `elem` düğümünde tüm alt **eleman** düğümlerini içeren bir yarı-dizi bulunur; yani yalnızca etiketlere karşılık gelenleri içerir.
- `elem.firstChild` – `elem` düğümünün ilk alt düğümüne (eleman ya da metin olabilir) referans içerir.
- `elem.firstElementChild` – `elem` içindeki ilk alt **eleman düğümüne** referans içerir; yani etikete karşılık gelen.
- `elem.lastChild` – `elem` düğümünün son alt düğümüne (eleman ya da metin olabilir) referans içerir.
- `elem.lastElementChild` – `elem` içindeki son alt **eleman düğümüne** referans içerir; yani etikete karşılık gelen.
- `elem.previousSibling` – `elem` öğesine göre önceki komşu düğüme referans içerir; bu hem bir eleman hem de metin düğümü olabilir.
- `elem.previousElementSibling` – `elem` öğesine göre önceki komşu **eleman düğümüne** referans içerir; yani etikete karşılık gelen.
- `elem.nextSibling` – `elem` öğesine göre sonraki komşu düğüme referans içerir; bu hem bir eleman hem de metin düğümü olabilir.
- `elem.nextElementSibling` – `elem` öğesine göre sonraki komşu **eleman düğümüne** referans içerir; yani etikete karşılık gelen.

```
Temelde, tüm bu özellikler DOM ağacının yapısını oluşturur. DOM'u anlamak için bunları bilmek önemlidir. Ayrıca, mülakatlarda bu özelliklerle ilgili sorular sorulabilir.
Pratikte, bu özellikler nadiren kullanılır; çünkü öğelerin iç içe geçme yapısı ve sayısı dinamik olarak değişebilir. Bu durum, bu özellikleri kullanan kodun güvensiz hale gelmesine neden olabilir.

```

Örnek penceresinin sağ tarafındaki CODEPEN logosuna tıklayarak bu örneği ayrı bir pencerede açın ve geliştirici konsolundaki günlükleri görüntüleyin.

---

## **🧠 DOM Navigasyonu – Mantığı Nedir?**

### **🌳 Büyük resim:**

DOM, **HTML’in ağaç gibi bir yapıya çevrilmiş halidir**.

JavaScript bu ağaçta **yukarı–aşağı–sağa–sola dolaşabilir**.

> Tıpkı bir
> 
> 
> **aile ağacı**
> 

---

## **👨‍👩‍👧‍👦 Aile benzetmesi (en kolay haliyle)**

Bir HTML etiketi düşün:

```
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

- <ul> → **anne/baba**
- <li> → **çocuklar**
- <li>’ler → **kardeş**
- <ul>’ün içindeki her şey → **soy (descendant)**

---

## **🚶‍♂️ DOM’da gezinmek ne demek?**

Bir elemana ulaştıktan sonra şunları sorabilirsin:

- **Annem kim?**
- **Çocuklarım kim?**
- **İlk çocuğum kim?**
- **Son çocuğum kim?**
- **Benden önceki / sonraki kardeşim kim?**

İşte DOM navigasyonu tam olarak bunu yapar.

---

## **🔑 En önemli özellikler (ezberlik)**

### **⬆️ Yukarı git**

```
elem.parentNode
```

👉 Ebeveynini verir

---

### **⬇️ Aşağı git**

```
elem.children
```

👉 Sadece **etiket olan çocukları** verir (en çok kullanılan)

```
elem.childNodes
```

👉 Etiket + **boşluk + metin** (pek tercih edilmez)

---

### **🥇 İlk / Son çocuk**

```
elem.firstElementChild
elem.lastElementChild
```

---

### **↔️ Kardeşler**

```
elem.previousElementSibling
elem.nextElementSibling
```

---

## **⚠️ Neden pratikte az kullanılır?**

Çünkü:

- HTML yapısı değişirse
- Yeni boşluklar / elemanlar eklenirse

👉 Kod **kırılabilir**.

Bu yüzden genelde:

```
querySelector
querySelectorAll
```

tercih edilir 👍

---

## **🧠 Tek cümlelik özet (altın bilgi)**

> DOM navigasyonu, bir HTML elemanından başlayıp aile ağacında yukarı–aşağı–sağa–sola dolaşmaktır.
>