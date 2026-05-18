# style Özelliği

`style` özelliği, DOM öğelerinin içindeki stilleri **okumak** ve **değiştirmek** için kullanılır.

Yalnızca öğenin içindeki tüm **satır içi stil** özelliklerinin listesini içeren bir `CSSStyleDeclaration` arabirim örneği döndürür; tüm CSS'i değil.

Özellikler yazılırken, genellikle CSS'de kullanılan tireler (`-`) yerine **camelCase**notasyonu kullanılır. Yani `background-color`, `backgroundColor` şeklinde yazılır.

```
const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // inline styles object
```

Pratikte, öğelerin stilize edilmesi genellikle **CSS sınıflarının eklenmesi** yoluyla gerçekleştirilir.

```
style özelliği, örneğin arka uçtan önceden bilinmeyen bir arka plan resmi bağlantısı geldiğinde, dinamik stillerin eklenmesi için kullanılır.
```

## **style özelliği nedir?**

**style**, bir HTML öğesinin **satır içi (inline) stillerini**

JavaScript ile **okumak ve değiştirmek** için kullanılır.

📌 **Sadece inline stilleri görür**, CSS dosyasındaki stilleri değil.

---

## **👶 ELI5 (çok basit)**

Bir düğme düşün 🟦

CSS dosyası = dolabın içindeki kıyafetler

style = **üstüne sonradan giydirdiğin kıyafet**

👉 style sadece **sonradan giydirilenleri** bilir.

---

## **📌 Örnek**

```
<button class="btn">Click</button>
```

```
const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";
```

HTML şu hale gelir 👇

```
<button
  class="btn"
  style="background-color: teal; font-size: 24px; text-align: center;"
>
  Click
</button>
```

---

## **🧠 Neden camelCase?**

CSS:

```
background-color
font-size
```

JavaScript:

```
backgroundColor
fontSize
```

📌 Çünkü - JavaScript’te değişken adında kullanılamaz.

---

## **🔍 Okuma örneği**

```
console.log(button.style.backgroundColor); // "teal"
```

⚠️ Eğer stil **CSS dosyasından geliyorsa**, burada görünmez.

---

## **❌ style neyi göstermez?**

```
.btn {
  background-color: red;
}
```

```
console.log(button.style.backgroundColor); // ""
```

❌ Boş gelir, çünkü bu **inline değil**

---

## **✅ Ne zaman style kullanılır?**

✔️ Dinamik değer geliyorsa

✔️ JS ile anlık değişiklik gerekiyorsa

Örnek:

```
button.style.backgroundImage = `url(${imageFromServer})`;
```

---

## **🟢 Pratikte en doğru yaklaşım**

🎯 **Genel stil → CSS class**

🎯 **Anlık / dinamik → style**

```
button.classList.add("active"); // tercih edilir
```

```
button.style.left = "120px"; // dinamik durum
```

---

## **🧠 Tek cümlelik özet**

> style, bir öğenin sadece inline stillerini JS ile değiştirmek için kullanılır; kalıcı stiller için class eklemek daha doğrudur.
>