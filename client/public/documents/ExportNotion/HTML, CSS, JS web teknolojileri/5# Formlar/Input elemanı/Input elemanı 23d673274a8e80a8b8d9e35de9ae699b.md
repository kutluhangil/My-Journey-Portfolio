# Input elemanı

`input` elemanı, çeşitli girdi alanları oluşturmak için kullanılan evrensel bir elemandır.

Alanın türü `type` niteliği tarafından belirlenir.

`type` niteliğinin varsayılan değeri: `text` şeklindedir. Kullanımı, herhangi bir karakteri kabul eden tek satırlı bir metin alanı oluşturur.

`<form>
  <input type="text" name="username" />
  <button type="submit">Submit feedback</button>
</form>`

Varsayılan olarak, bir giriş alanı, bir yazı tipi ailesini miras almayan bir dizedir. Bu nedenle, tüm giriş alanları için genel stillere bir kural ekleyebilirsiniz.

`input {
	font-family: inherit;
}`

Kavramsal olarak, `input` sunucuya gönderilen bir sözlük girdisini temsil eder.

`name` niteliği bu girdinin adını tanımlar ve değer kullanıcının girdiği bilgidir. Alan adı form içinde benzersiz olmalıdır. `name` niteliğinin değeri, JavaScript'te formla çalışırken de kullanılır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/141df55e-ac77-49fe-a896-92b9d787c868image%20%2853%29.png)

---

### **📌 Temel Yapı:**

```
<form>
  <input type="text" name="username" />
  <button type="submit">Submit feedback</button>
</form>
```

### **Açıklamalar:**

- <input type="text">: Bu, kullanıcıdan tek satırlık bir metin almanı sağlar.
- name="username": Bu alanın formda sunucuya gönderilecek adıdır. Sunucu bu isme göre değeri okur.
- <button type="submit">: Forma girilen verileri gönderir.

---

### **type Niteliği Neye Yarar?**

type niteliği, input’un ne tür bir veri kabul edeceğini belirler:

| type **Değeri** | **Açıklama** |
| --- | --- |
| text | Tek satırlı metin (varsayılan) |
| email | E-posta girişi |
| password | Şifre alanı (karakterler gizli) |
| checkbox | Onay kutusu |
| radio | Seçim düğmeleri |
| number | Sayı girişi |
| date | Tarih seçici |

---

### **🎨 Stil Mirası**

Tarayıcılar, <input> elemanına kendi varsayılan yazı tipi stillerini uygular. Bu yüzden web sayfanda bütünlük olması için, input alanlarının yazı tipini sayfanın genel yazı tipiyle eşleştirmen gerekebilir:

```
input {
  font-family: inherit;
}
```

Bu satır sayesinde input içindeki yazılar, sayfada kullandığın yazı tipiyle aynı görünür.

---

### **🧠 Kavramsal Olarak**

Form gönderildiğinde, her <input> elemanı aslında bir *anahtar-değer* çifti gönderir:

- **Anahtar (key)**: name niteliğinde yazılan değer.
- **Değer (value)**: Kullanıcının yazdığı şey.

Örnek olarak:

```
<input type="text" name="username" />
```

Kullanıcı “kutluhan” yazarsa ve form gönderilirse, sunucuya şu bilgi gider:

```
username=kutluhan
```

JavaScript ile bu değeri şöyle de alabilirsin:

```
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // sayfa yenilenmesin
  const username = form.elements.username.value;
  console.log(username); // Kullanıcının girdiği değeri gösterir
});
```

---

### **✅ Kısa Örnek Uygulama**

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Input Örneği</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }

    input {
      font-family: inherit;
      padding: 8px;
      margin: 5px 0;
    }

    button {
      padding: 8px 12px;
    }
  </style>
</head>
<body>

  <form>
    <label for="username">Kullanıcı adı:</label><br />
    <input type="text" name="username" id="username" /><br />
    <button type="submit">Gönder</button>
  </form>

</body>
</html>
```

---

HTML düzenleyicide, butondan önce forma `form-input` sınıfına sahip iki metin giriş alanı ekleyin. İlk alanın adı `username`, ikincisinin adı `topic` olsun.

CSS düzenleyicide, `form-input` sınıfı için özel bir seçici oluşturun ve aşağıdaki özellikleri ayarlayın:

- Tüm kenarlarda dolgu : `4px`
- Metin rengi : `#212121`
- Kenarlık kalınlığı : `1px`, düz, renk `#212121`
- Çerçevenin yarıçapı : `4px`
- HTML düzenleyicisi `<form>` açılış etiketine sahip olmalıdır.
- HTML düzenleyicisi `</form>` kapanış etiketine sahip olmalıdır.
- Formun içinde bir `button` öğesi bulunmalıdır.
- Formun içinde iki `input` öğesi bulunmalıdır.
- Metin alanlarının işaretlemesi gönder düğmesinden önce yer almalıdır.
- Metin alanları, `form-input` sınıfına(`class`) sahip olmalıdır.
- Metin alanları `text` değerine sahip `type` özniteliğine sahip olmalıdır.
- Birinci metin giriş alanının `username` adında bir `name` özniteliğine sahip olması gerekmektedir.
- İkinci metin giriş alanının `topic` adında bir `name` özniteliğine sahip olması gerekmektedir.
- CSS düzenleyicide `.form-input`sınıfına sahip bir kural tanımlanmalıdır..
- `.form-input` sınıfına sahip CSS kuralında, içeriğin etrafında `4px` `padding`(boşluk) olmalıdır.
- `.form-input` sınıfına sahip CSS kuralının metin rengi `#212121` olarak belirlenmelidir.
- `.form-input` sınıfınae sahip CSS kuralının `border`(kenarlık) özelliği `1px solid #212121` olarak tanımlanmalıdır.
- `.form-input` sınıfına sahip CSS kuralının `4px` değerinde bir `border-radius`tanımlanmalıdır.

## **✅ SORUNUN SENİN İÇİN ANLAMI**

Şu anda elinde şöyle bir form var:

```
<form class="form" name="issue_report_form" autocomplete="off">
  <button class="form-button" type="submit">Submit an issue</button>
</form>
```

Ve bir de CSS’in var. Ama bu haliyle formun içinde **hiç input (yani yazı yazılacak alan)** yok.

---

## **💡 GÖREVİN NE?**

1. Formun içine **iki tane metin kutusu (input)** ekleyeceksin.
    - Biri username adlı olacak.
    - Diğeri topic adlı olacak.
    - Her ikisinin de class="form-input" olacak. Bu sınıf sayesinde CSS’te onlara özel stil verebileceksin.
    - Bu input’lar **butonun üstünde (önünde)** olacak.
2. CSS dosyasında .form-input sınıfı için özel kurallar yazman gerekiyor:
    - Tüm kenarlarından boşluk (padding): 4px
    - Yazı rengi: #212121
    - Kenarlık (border): 1px solid #212121
    - Köşeler biraz yuvarlak olacak: border-radius: 4px

---

## **🛠️ ADIM ADIM YAPMAN GEREKENLER**

### **🔷 1. HTML’e 2 input ekle**

<button>dan **önce**, şu satırları formun içine ekle:

```
<input class="form-input" type="text" name="username" />
<input class="form-input" type="text" name="topic" />
```

Bu iki satır, yazı kutularını oluşturur.

---

### **🔷 2. CSS’e .form-input kuralını ekle**

Mevcut CSS dosyanın en altına şunu ekle:

```
.form-input {
  padding: 4px;
  color: #212121;
  border: 1px solid #212121;
  border-radius: 4px;
}
```

---

## **✅ SONUÇTA OLUŞMASI GEREKEN DOSYALAR**

### **✅ HTML KODUN (GÜNCELLENMİŞ):**

```
<form class="form" name="issue_report_form" autocomplete="off">
  <input class="form-input" type="text" name="username" />
  <input class="form-input" type="text" name="topic" />
  <button class="form-button" type="submit">Submit an issue</button>
</form>
```

---

### **✅ CSS KODUN (EKLENMİŞ):**

```
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  line-height: 1.5;
  color: #212121;
}

input,
textarea,
button {
  font-family: inherit;
  line-height: inherit;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
  border: 1px solid #212121;
  max-width: 300px;
}

.form-button {
  align-self: flex-start;
}

/* BURAYA EKLİYORSUN 👇 */
.form-input {
  padding: 4px;
  color: #212121;
  border: 1px solid #212121;
  border-radius: 4px;
}
```

---

## **✅ KONTROL LİSTESİ**

- Form açılıyor ve kapanıyor: <form> ... </form>
- Form içinde bir <button> var
- Form içinde **iki tane <input>** var
- Her iki <input>’ta class="form-input" var
- Birincisinin name="username"
- İkincisinin name="topic"
- Her iki <input> da type="text"
- .form-input için CSS kuralları tanımlanmış

---