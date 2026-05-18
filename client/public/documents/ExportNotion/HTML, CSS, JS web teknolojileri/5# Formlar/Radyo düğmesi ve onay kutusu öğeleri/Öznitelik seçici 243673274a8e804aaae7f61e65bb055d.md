# Öznitelik seçici

input:checked seçicisi tüm olası alanlara uygulanır ve formun yalnızca onay kutularını biçimlendirmek, ancak her bir girdi alanı için bir sınıf belirlememek istiyorsanız, nitelik seçicisini kullanabilirsiniz.

`input:checked` seçicisi tüm olası alanlara uygulanır.

Formun yalnızca onay kutularını biçimlendirmek, ancak her girdi alanı için bir sınıf ayarlamamak istiyorsanız, öznitelik seçicisini kullanabilirsiniz.

`input[type="checkbox"] {
}`

Bir seçiciyi sadece `type` ile değil, herhangi bir öznitelikle belirtebileceğinizi unutmayın. Bir öznitelik seçicinin genel yapısı, seçici → öznitelik adı → öznitelik değeri şeklindedir.

`selector[attribute_name="..."]`

Tüm giriş alanlarını `type="checkbox"` ile seçmek için aşağıdaki seçiciyi kullanın.

Ardından, seçili durumdaki onay kutusu seçicisi aşağıdaki gibi görünecektir.

`input[type="checkbox"]:checked {
	box-shadow: 0 0 0 2px orangered;
}`

Elbette! Aşağıda bu konuyu senin için **net, sade ve not alabileceğin** şekilde açıkladım:

---

### **📌 Ne anlatılıyor?**

Bu metin, formdaki **sadece onay kutularını (checkbox)** CSS ile biçimlendirmek istediğinde kullanabileceğin **özelleştirilmiş CSS seçicilerini** açıklıyor.

---

## **input:checked Nedir?**

```
input:checked { ... }
```

Bu seçici:

- Formdaki **tüm input elemanlarından**, **seçili olanları (checked)** seçer.
- Ama bu seçim **checkbox, radio, hatta seçili option** gibi tüm öğeleri kapsar.

### **⚠️ Problem:**

Eğer sadece checkbox’ları hedeflemek istiyorsan, bu seçici **fazla geneldir**.

---

## **2. ✅ Sadece Checkbox’ları Seçmek için Öznitelik Seçici Kullanılır**

```
input[type="checkbox"] {
  /* Tüm checkbox'lar */
}
```

Bu seçici:

- Sadece type="checkbox" olan input’ları seçer (yani onay kutuları).

---

## **3. ✅ Hem Checkbox hem de Seçilmiş Olanları Hedeflemek**

```
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 2px orangered;
}
```

Bu CSS kuralı:

- Sadece type="checkbox" olan,
- Ve **şu anda seçili (checked)** durumda olan onay kutularını hedef alır.

➡️ Yani: Formda seçili olan checkbox kutularına orangered rengiyle bir gölge verir.

---

## **4. 🔍 Öznitelik Seçici Genel Yapısı**

```
selector[attribute="value"] { ... }
```

Bu yapı, HTML öğelerinden belirli bir özniteliğe ve değere sahip olanları seçmek için kullanılır.

| **Örnek Seçici** | **Ne Seçer?** |
| --- | --- |
| input[type="checkbox"] | Tüm checkbox giriş alanlarını seçer |
| input[name="accept"] | name özniteliği “accept” olan input’ları seçer |
| a[target="_blank"] | Yeni sekmede açılan bağlantıları seçer |

---

## **📌 Özet**

| **Konsept** | **Açıklama** |
| --- | --- |
| input:checked | Tüm **seçili** (checked) input öğelerini seçer |
| input[type="checkbox"] | Tüm **onay kutularını** seçer |
| input[type="checkbox"]:checked | Sadece **seçili checkbox’ları** seçer |
| Öznitelik seçici yapısı | selector[attribute="value"] – Belirli öznitelik değeriyle seçim yapar |

---

## **🎨 Örnek Kullanım**

```
/* Seçili olan onay kutularına turuncu kenar ver */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 2px orangered;
}
```

---

Bu örnekle, input[type="checkbox"]:checked seçicisinin nasıl çalıştığını hem görsel hem de mantıksal olarak anlayabilirsin.

---

### **🔧 HTML:**

```
<form>
  <p>Choose your favorite fruits:</p>

  <label>
    <input type="checkbox" name="fruit" value="apple" />
    Apple
  </label>
  <br />
  <label>
    <input type="checkbox" name="fruit" value="banana" />
    Banana
  </label>
  <br />
  <label>
    <input type="checkbox" name="fruit" value="orange" />
    Orange
  </label>
</form>
```

### **🎨 CSS:**

```
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 2px orangered;
  accent-color: orangered; /* destekleyen tarayıcılarda kutunun rengi değişir */
}
```

---

## **🔍 Açıklama:**

| **Ne Oluyor?** | **Nasıl?** |
| --- | --- |
| Kullanıcı bir checkbox’ı işaretlediğinde | :checked devreye giriyor |
| Yalnızca checkbox türü hedefleniyor | input[type="checkbox"] sayesinde |
| Seçili checkbox kutusu turuncu çerçeve alıyor | box-shadow: 0 0 0 2px orangered; ile |
| Yeni tarayıcılarda kutunun içi de turuncu olur | accent-color: orangered; özelliği sayesinde |

---

Bu yapı sayesinde sadece **işaretlenmiş (checked)** olan checkbox’lara özel stil verebiliyorsun.

CSS düzenleyicide, formda seçili durumdaki onay kutularını `quiz-form` sınıfıyla biçimlendirmek için öznitelik seçiciyi kullanın. Mevcut CSS kuralını değiştirin.

- CSS düzenleyicisinde, `.quiz-form input:checked` seçicisine sahip bir kural bulunmamaktadır.
- CSS düzenleyicisinde `.quiz-form input[type=“checkbox”]:checked` seçicisine sahip bir kural bulunmaktadır.
- `.quiz-form input[type=“checkbox”]:checked` seçicisine sahip kural için gölge efekti, `0 0 0 2px orange` değerlerine sahip bir `box-shadow` özelliği kullanılarak tanımlanmalıdır.

`.quiz-form input:checked {
box-shadow: 0 0 0 2px orange;
}`

`quiz-form input[type=“checkbox”]:checked {
box-shadow: 0 0 0 2px orange;
}`