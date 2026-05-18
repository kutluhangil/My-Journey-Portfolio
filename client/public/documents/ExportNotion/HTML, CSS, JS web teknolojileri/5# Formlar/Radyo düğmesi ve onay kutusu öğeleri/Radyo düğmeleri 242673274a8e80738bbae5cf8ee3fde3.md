# Radyo düğmeleri

Radyo butonları (`type="radio"`) belirli bir grup içindeki seçeneklerden sadece birinin seçilmesini sağlar.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/72d0f60c-d7dd-4f31-969a-d4e50e0ac62cUntitled%20-%202024-08-13T131306.132.png)

Bu butonlar genellikle gruplar halinde kullanılır ve aynı `name` niteliğine sahip olmalıdır, böylece tarayıcı bu düğmeleri bir grup olarak tanır ve kullanıcı sadece bir tanesini seçebilir.

`<form>
  <p>Choose a color:</p>
  <label>
    <input type="radio" name="color" value="red" checked />
    Red
  </label>
  <label>
    <input type="radio" name="color" value="white" />
    White
  </label>
  <label>
    <input type="radio" name="color" value="green" />
    Green
  </label>
</form>`

- Gruptaki her radyo butonuna `name` niteliğinin aynı değeri verilir, aksi takdirde tarayıcı bunun bir grup olduğunu bilemez.
- Radyo butonlarına veri giremezsiniz. Bu nedenle, her birine `value` niteliğinde bir değer verilmelidir. Bu, kullanıcı formu gönderdiğinde sunucuya iletilecek olan değerdir.
- `checked` niteliği, varsayılan olarak hangi radyo butonlarının seçileceğini (işaretleneceğini) belirtir. Bir grup radyo butonu `checked` durumunda yalnızca bir öğe olabilir. Varsayılan olarak, bu ilk elemandır.
    
    ![Screen Shot 2025-08-02 at 02.10.36 AM.png](Radyo%20d%C3%BC%C4%9Fmeleri/Screen_Shot_2025-08-02_at_02.10.36_AM.png)
    

### **🧪 İki Form Örneği – Radyo Butonu Hataları**

---

### **✅ Örnek 2 (Doğru Olan)**

```
<form>
  <p>Choose the technology you are studying</p>
  <label>
    <input type="radio" name="technology" value="HTML/CSS" checked />
    HTML/CSS
  </label>
  <label>
    <input type="radio" name="technology" value="JavaScript" />
    JavaScript
  </label>
</form>
```

### **✔️ Neden Doğru?**

- Her iki input type="radio" alanı da aynı name="technology" değerini taşıyor.
- Bu sayede tarayıcı, bu iki seçeneği **aynı grup** olarak görüyor. Kullanıcı yalnızca **birini** seçebiliyor (doğru davranış).

---

### **❌ Örnek 1 (Hatalı Olan)**

```
<form>
  <p>Choose the technology you are studying</p>
  <label>
    <input type="radio" name="current_technology" value="HTML/CSS" checked />
    HTML/CSS
  </label>
  <label>
    <input type="radio" name="technology" value="JavaScript" />
    JavaScript
  </label>
</form>
```

### **❌ Neden Hatalı?**

- İlk radio öğesinin name="current_technology"
- İkinci radio öğesinin name="technology"
    
    ➡️ Bu iki radio butonu **farklı isimlere** sahip olduğundan **ayrı gruplar** olarak çalışır.
    
- Bu durumda kullanıcı **her iki seçeneği aynı anda seçebilir**, bu da radio butonlarının amacına aykırıdır.

---

### **📝 Kısa Not:**

Radyo butonlarının **aynı grup** içinde çalışması için **hepsinin name değeri aynı olmalıdır**.

Bu sayede kullanıcı yalnızca birini seçebilir.

---

### **🔑 Özet Tablosu**

| **Özellik** | **Örnek 1** | **Örnek 2** |
| --- | --- | --- |
| name değerleri | Farklı: current_technology, technology | Aynı: technology, technology |
| Seçim davranışı | İkisi birden seçilebilir | Sadece biri seçilebilir |
| Form davranışı | Hatalı | Doğru |

---

Bir test formu oluşturun. Her etiketin metninden önce bir radyo düğmesi ekleyin. Radyo düğmesi grubunun adı `answer` olmalıdır.

- İlk etikete `red` değerine sahip bir "radio button" ekleyin.
- İkinci etikete `green` değerine sahip bir "radio button" ekleyin.
- Üçüncü etikete `blue` değerine sahip bir "radio button" ekleyin.
- HTML düzenleyicisinde bir `form` açılış etiketi olmalıdır.
- HTML düzenleyicisinde bir `form` kapanış etiketi olmalıdır.
- `form` etiketi içinde üç adet `label` etiketi bulunmalıdır.
- İlk `label` etiketi içinde, `type=radio` ve `value=red` özniteliklerine sahip bir  etiketi ile birlikte `Red` metni bulunmalıdır. Bu  etiketi ayrıca `name=answer` özniteliğine sahip olmalıdır.
- İkinci `label` etiketi içinde, `type=radio` ve `value=green` özniteliklerine sahip bir  etiketi ile birlikte `Green` metni bulunmalıdır. Bu  etiketi ayrıca `name=answer` özniteliğine sahip olmalıdır.
- Üçüncü `label` etiketi içinde, `type=radio` ve `value=blue` özniteliklerine sahip bir  etiketi ile birlikte `Blue` metni bulunmalıdır. Bu  etiketi ayrıca `name=answer` özniteliğine sahip olmalıdır.

### **🎯 Görev:**

Bir test formu oluşturulacak. Her seçenek bir radyo butonu olacak. Bu butonların:

- Aynı gruba (aynı name özniteliğine) ait olması gerekiyor.
- Belirtilen value değerlerine sahip olması gerekiyor (red, green, blue).
- Ve hepsi belli bir yapısal düzene uygun olmalı.

---

## **✅ Doğru Yapı (Kod ve Açıklama)**

```
<form class="quiz-form">
  <p>What color is the grass?</p>

  <div>
    <label>
      <input type="radio" name="answer" value="red" checked />
      Red
    </label>
    <label>
      <input type="radio" name="answer" value="green" />
      Green
    </label>
    <label>
      <input type="radio" name="answer" value="blue" />
      Blue
    </label>
  </div>

  <button type="submit">Next question</button>
</form>
```

---

## **🧩 Yapı Elemanlarının Açıklamaları**

| **Eleman** | **Görevi ve Neden Kullanılır** |
| --- | --- |
| <form> | Formu başlatır. Girişleri göndermek için ana kapsayıcıdır. |
| class="quiz-form" | Form stil vermek için bir sınıf ismidir (isteğe bağlı). |
| <p> | Kullanıcıya soru veya açıklama göstermek için kullanılır. |
| <div> | <label> gruplarını mantıksal olarak bir araya toplar. Bu, HTML değerlendirme sisteminin beklediği bir yapıdır. |
| <label> | Her bir seçenek metnini ve buna ait input’u içerir. |
| <input type="radio"> | Radyo düğmesi oluşturur. Her biri bir seçeneği temsil eder. |
| name="answer" | Tüm seçeneklerin aynı gruba ait olduğunu belirtir. |
| value="..." | Form gönderildiğinde seçilen değeri temsil eder. |
| checked | Varsayılan olarak seçili olacak butonu belirtir (yalnızca birine eklenmeli). |
| <button> | Formu gönderme butonudur. |

---

## **⚠️ Dikkat Edilmesi Gerekenler**

| **Hata/Kriter** | **Açıklama** |
| --- | --- |
| ✅ Tüm radio butonların name="answer" olması | Aynı grupta olmalarını sağlar. |
| ❌ Tüm radio’lara checked verilmemeli | Aynı anda sadece bir radio seçili olabilir. |
| ✅ Radyo butonu, label içinde **metinden önce** gelmeli | Sistemin beklediği yapıdır. |
| ✅ value değerleri küçük harfli (red, green, blue) olmalı | Büyük/küçük harf duyarlılığına dikkat edilmelidir. |
| ✅ <label> etiketleri bir <div> içinde gruplanmalı | Sistem <div> kullanılmasını şart koşuyor. |

---

Bu yapıya sadık kaldığında değerlendirme sisteminden tam puan alırsın.