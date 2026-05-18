# submit Olayı

Formun gönderilmesi şu şekillerde gerçekleşir:

- `type="submit"` özniteliğine sahip bir düğmeye **tıklanarak**
- veya formun herhangi bir metin alanında **Enter tuşuna basılarak**

`submit` olayı doğrudan **form** (`<form>`) etiketi üzerinde gerçekleşir.

Bu nedenle, olay işleyicisi de **doğrudan form öğesi üzerine** ayarlanmalıdır.

```
const form = document.querySelector("form");

form.addEventListener("submit", event => {
	// ...
});
```

Bazı olaylar, belirli bir eylemi tetikleyerek tarayıcıda **varsayılan** olarak yerleşik bir davranışı başlatır.

Örneğin:

- Bir bağlantıya tıklamak, belirtilen `href` adresine yönlendirme yapar.
- Bir formun gönderilmesi, sayfanın yeniden yüklenmesine neden olur.

Bu tür davranışlar, modern uygulamalarda genellikle **istenmeyen** durumlardır ve **iptal edilmeleri gerekir**.

Tarayıcıdaki varsayılan eylemi iptal etmek için, olay nesnesinde yer alan standart `preventDefault()` metodu kullanılır.

```
const form = document.querySelector("form");

form.addEventListener("submit", event => {
	event.preventDefault();
});
```

`submit` olayı, bir formun **gönderilmeden önce doğrulanması (kontrol edilmesi)**amacıyla kullanılabilir.

Çünkü olay nesnesi, form elemanlarıyla ilgili birçok **yararlı özelliğe** sahiptir.

Bir formun DOM öğesinde bulunan `elements` özelliği, **`name` özniteliğine sahip tüm form elemanlarının bağlantılarını** içeren bir nesnedir. Bu nedenle, örnekte `event.target.elements.login.value` ve `event.target.elements.password.value`ifadeleri kullanılarak ilgili alanların değerlerine **doğrudan erişilir.**

### **Kısa özet**

- **submit olayı**, bir form gönderilmeye çalışıldığında tetiklenir.
- Olay **doğrudan <form> etiketi** üzerinde dinlenir.
- Form gönderilince tarayıcı **sayfayı yeniler** (varsayılan davranış).
- Bu varsayılan davranışı durdurmak için
    
    👉 **event.preventDefault()** kullanılır.
    
- submit olayı, **form verilerini kontrol etmek (doğrulamak)** için idealdir.

---

### **Mantığı (ELI5 gibi düşün)**

Formu göndermek = “Tarayıcıya *ben hazırım* demek”.

Ama:

- Sen verileri **önce kontrol etmek** istiyorsun
- Sayfanın **yenilenmesini istemiyorsun**
- Verileri **JavaScript ile işlemek** istiyorsun

Bu yüzden:

1. Form gönderilmeye çalışılır → submit olayı tetiklenir
2. JavaScript araya girer
3. preventDefault() ile “Dur! Yenileme yapma” denir
4. Veriler kontrol edilir / işlenir

---

### **Mini örnek**

```
const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault(); // sayfa yenilenmez
  console.log("Form gönderildi ama kontrol bizde");
});
```

🧠 **Özet cümle:**

submit olayı, form gönderimini **kontrol altına almak** ve **sayfa yenilenmeden** form verileriyle çalışmak için kullanılır.