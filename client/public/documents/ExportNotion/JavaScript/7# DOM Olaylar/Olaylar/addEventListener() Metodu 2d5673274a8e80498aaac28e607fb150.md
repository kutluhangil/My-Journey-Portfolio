# addEventListener() Metodu

**Olay** — Tarayıcıdan, web sayfasında bir şeylerin gerçekleştiğini bildiren bir sinyaldir.

Fare olayları, klavye olayları, form elemanı olayları, pencere boyutu değişiklikleri, görsellerin yüklenmesi, panoya kopyalama işlemleri, CSS animasyonları veya geçiş durumu değişiklikleri gibi birçok olay türü vardır.

Olaylar, kullanıcı eylemlerine tepki vermek ve belirli bir olayla ilgili kodu çalıştırmak için kullanılır.

Bir kullanıcı eylemi, JavaScript'te birden fazla olayı tetikleyebilir.

Örneğin, bir öğeye tıkladığınızda şu sırayla olaylar gerçekleşir:

1. `mousedown` – fare düğmesine basıldığında,
2. `mouseup` – fare düğmesi bırakıldığında,
3. `click` – tıklama tamamlandığında.

Bir eylem birden fazla olayı tetiklediğinde, olayların **gerçekleşme sırası sabittir** ve işleyiciler bu sıraya göre çağrılır:

**`mousedown → mouseup → click`**

Bir öğenin kullanıcı eylemlerine yanıt verebilmesi için, **olay dinleyicisi** eklenmeli ve ona bir fonksiyon tanımlanmalıdır.

**Olay dinleyicisi**, belirli bir olayın gerçekleşmesini "dinleyen" ya da "bekleyen" bir mekanizmadır.

`addEventListener()` yöntemi, bir olay dinleyicisini bir öğeye eklemek için kullanılır.

`element.addEventListener(event, handler, options)`

Metod Argümanları

- **`event`** – `"click"` gibi olay adını içeren bir **dize**
- **`handler`** – Olay gerçekleştiğinde çağrılacak **geri çağırma (callback)** fonksiyonu
- **`options`** – Gelişmiş ayarları içeren, isteğe bağlı bir **nesne**

**Örnek üzerinden görelim:**

Bir galeri resimlerini gezdirmek için bir butonunuz var.

- HTML'de, `my-button` sınıfına sahip bir düğme tanımlanmıştır:

`<button class="my-button">Next</button>`

- Galeriyi kaydırmak için, JavaScript kodunda bu düğme öğesinin referansını almalı ve üzerine bir **tıklama (click)** olayı dinleyicisi eklemelisiniz.

```
const button = document.querySelector(".my-button");

button.addEventListener("click", () => {
  console.log("The button was pressed and now the next image will appear");
});
```

`addEventListener()` işleminde, ilk argüman olarak `"click"` olayının adını, ikinci argüman olarak ise olay işleyici işlevi `() => { console.log("Button was clicked"); }`ifadesini geçtik. Her `button` öğesinde `"click"` olayı gerçekleştiğinde, bu geri çağırma işlevi çalışacak ve konsola şu mesajı yazdıracaktır:

**"The button was pressed and now the next image will appear."**

Geri çağırma (callback) için, aşağıdaki örnekte olduğu gibi anonim olmayan, **ayrı bir işlev** kullanabiliriz.

Adlandırılmış bir işlev, kodun **okunabilirliğini artırır**.

```
const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("The button was pressed and now the next image will appear");
};

button.addEventListener("click", handleClick);
```

`Bir öğede, aynı türden olaylar dahil olmak üzere, **herhangi bir sayıda olay işleyicisi** bulunabilir. Geri çağırma (callback) fonksiyonları, tanımlandıkları **sıralamaya göre** çağrılır.`

### **addEventListener()**

### **— Kısa ve Net Özet**

**Olay (event)**: Kullanıcının sayfada yaptığı bir şeydir

👉 tıklama, klavye tuşu, fare hareketi, pencere boyutu değişimi vb.

**addEventListener()**:

Bir HTML öğesinin bu olayları **dinlemesini** ve olay olduğunda **bir fonksiyon çalıştırmasını** sağlar.

---

### **🧩 Sözdizimi**

```
element.addEventListener(event, handler);
```

- **event** → Olay adı ("click", "input", "keydown" vb.)
- **handler** → Olay gerçekleştiğinde çalışacak fonksiyon

---

### **✅ Basit Örnek**

**HTML**

```
<button class="my-button">Next</button>
```

**JavaScript**

```
const button = document.querySelector(".my-button");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

👉 Kullanıcı butona **tıklayınca**, konsola **“Button clicked!”** yazılır.

---

### **🔁 Adlandırılmış Fonksiyon ile (Daha Okunabilir)**

```
const button = document.querySelector(".my-button");

function handleClick() {
  console.log("Button clicked!");
}

button.addEventListener("click", handleClick);
```

---

### **📌 Önemli Noktalar**

- Bir kullanıcı eylemi **birden fazla olay** tetikleyebilir
    
    (örn: mousedown → mouseup → click)
    
- Aynı öğeye **birden fazla event listener** eklenebilir
- Olaylar, eklendikleri **sıraya göre çalışır**

---

### **🧠 Mini Ezber**

> addEventListener = “Bu olay olursa, şu fonksiyonu çalıştır”
>