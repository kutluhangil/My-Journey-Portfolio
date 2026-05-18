# Zamanlayıcı

`setInterval()` yöntemi, belirli bir aralıkla kodu tekrar tekrar çalıştırmanın basit bir yoludur.

Sözdizimi ve parametreler, `setTimeout()` ile aynıdır.

`const intervalId = setInterval(callback, delay, arg1, arg2, ...);`

`setInterval()` çağrısının sonucunda oluşturulan zamanlayıcının sayısal kimliği elde edilir ve daha sonra iptal etmek için kullanılabilir.

`setTimeout()`'tan farklı olarak, aralık belirtilen süre boyunca fonksiyonun **düzenli olarak tekrarlanmasını sağlar**.

Her **Start** düğmesine basıldığında yeni bir aralık oluşturulur ve ona yeni bir sayısal kimlik atanır.

Örnekte her saniye farklı bir dizeyi konsola yazdıracağız. Dizelerin farklı olması için `Math.random()` kullanıyoruz.

Tarayıcı zamanlayıcısının en az gecikmesi vardır, yaklaşık olarak 0 ila 4 milisaniye arasında değişir. Standarta göre, minimum gecikme 4 milisaniyedir, bu yüzden `setInterval(cb, 1)` ile `setInterval(cb, 4)` arasında fark yoktur.

Zamanlayıcı, belirtilen 'gecikme' parametresinden daha nadir çalışabilir. Çünkü işlemcinin aşırı yüklenmesi nedeniyle bazı aralık işlevlerinin başlatılmadığı zamanlar olacaktır. Tarayıcılar, sekme etkin olmasa bile zaman aşımı ve aralıkları gerçekleştirmeye devam eder, ancak zamanlayıcıların tetiklenme sıklığı azalır.

Bunu **kısa, sade ve not alabileceğin şekilde** açıklayayım 👇**setInterval() ne demek?**

---

**setInterval**, bir fonksiyonu **belirli aralıklarla tekrar tekrar çalıştırmak** için kullanılır.

> setTimeout =
> 
> 
> **bir kere, sonra**
> 

> 
> 

> setInterval =
> 
> 
> **düzenli olarak, tekrar tekrar**
> 

---

## **Temel kullanım**

```
const intervalId = setInterval(callback, delay);
```

- **callback** → Çalıştırılacak fonksiyon
- **delay** → Kaç milisaniyede bir çalışacağı
- **intervalId** → Zamanlayıcının kimliği (durdurmak için kullanılır)

---

## **setInterval nasıl çalışır?**

```
setInterval(() => {
  console.log("Hello");
}, 1000);
```

👉 Her **1 saniyede bir** "Hello" yazar

👉 **Kendi kendine durmaz**

---

## **setInterval’i durdurmak**

```
clearInterval(intervalId);
```

> setInterval başlatılır →
> 
> 
> **manuel olarak durdurulmalıdır**
> 

---

## **Metindeki önemli noktalar ne anlatıyor?**

### **1️⃣ setTimeout ile farkı**

| **setTimeout** | **setInterval** |
| --- | --- |
| Bir kere çalışır | Sürekli çalışır |
| Gecikmeden sonra biter | Durdurulana kadar devam eder |

---

### **2️⃣ Her Start tıklaması yeni interval oluşturur**

👉 Eğer butona her basışta setInterval çağırırsan:

- Eski interval durmaz
- **Birden fazla interval aynı anda çalışır**

Bu yüzden genelde:

```
clearInterval()
```

kullanılır.

---

### **3️⃣ Minimum gecikme (önemli)**

```
setInterval(cb, 1);
setInterval(cb, 4);
```

⛔ **Aynı şeydir**

📌 Tarayıcı:

- 1 ms bile versen
- **En az ~4 ms** bekler

Yani:

> “1 ms yazmak daha hızlı”
> 
> 
> **YANLIŞ**
> 

---

### **4️⃣ Neden bazen geç çalışır?**

Zamanlayıcılar **kesin saat gibi çalışmaz** çünkü:

- CPU meşgul olabilir
- Tarayıcı arka planda olabilir
- Sekme aktif değilse yavaşlatılır

➡️ Bu yüzden:

> “Her 1000 ms kesin çalışır” diye düşünme
> 

> Yaklaşık
> 

---

## **Kısa özet (deftere yazmalık 📝)**

- setInterval → belirli aralıklarla tekrar çalışır
- Kendi kendine durmaz → clearInterval gerekir
- Minimum gecikme ~4 ms
- Yoğunlukta veya arka planda daha geç çalışabilir
- Zamanlayıcılar **kesin değil**, **yaklaşık** çalışır

---