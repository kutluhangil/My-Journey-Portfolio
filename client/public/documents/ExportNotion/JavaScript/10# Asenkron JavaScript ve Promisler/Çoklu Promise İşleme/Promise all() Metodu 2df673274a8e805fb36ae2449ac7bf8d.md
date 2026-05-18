# Promise.all() Metodu

Bazı durumlarda, tüm Promiselerin aynı anda tamamlanmasını beklemek ve sonuçlarını işlemek gerekebilir. Ya da bazı durumlarda, sadece bir tanesinin tamamlanmasını beklemek yeterli olabilir, diğer durumları göz ardı ederek. Bu senaryolar için **`Promise`** sınıfı, Promise gruplarıyla çalışmak için statik metodlara sahiptir.

`Promise.all()` metodu, bir dizi Promise'i aynı anda işlemeye ve sonuçlarını almanıza imkan tanır. Giriş olarak bir dizi Promise alır, onların tamamlanmasını bekler ve tek bir Promise döndürür.

`Promise.all([promise1, promise2, promise3, ...])`

Tüm Promiseler başarıyla gerçekleşirse, döndürülen Promise `fulfilled` durumuna geçecek ve her Promise'in gerçekleştirilmesi sonucunun bir dizi değer olacak.

```
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
	.then(values => console.log(values)); // [1, 2, 3]
	.catch(error => console.log(error));
```

Bu, tüm Promises'in tamamlanmasını bekledikten sonra yeni bir Promise oluşturur ve döndürür; döndürülen değer ise tamamlanan Promise'lerin değerlerinin bir dizisi olur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/7af20587-d5a2-4ad2-aca0-f88b1893d02bimage.png)

Eğer Promise'lerden bir tanesi reddedilirse, dönen Promise hemen `rejected`durumuna geçer ve değeri hata olacaktır.

```
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Rejected promise 2");
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
	.then(values => console.log(values))
	.catch(error => console.log(error)); // "Rejected promise 2"
```

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/fef2f8d1-92df-4f2d-8945-bfdd539c5210image-_1_.png)

## **Promise.all() ne demek?**

**Promise.all()**, birden fazla Promise’i **aynı anda başlatır** ve:

- **Hepsi başarılı olursa** → sonuçları **tek bir dizi** halinde verir
- **Bir tanesi bile hata verirse** → **hemen hata verir**, işlem başarısız sayılır

---

## **Mantığı (günlük hayattan 🎯)**

👉 **Grup ödevi düşün:**

- 3 kişi var, herkes kendi kısmını yapıyor (3 Promise)
- **Herkes bitirirse** → ödev teslim edilir ✅
- **Bir kişi yapmazsa** → ödev teslim edilemez ❌

---

## **Ne döndürür?**

👉 **Promise.all her zaman TEK bir Promise döndürür**

Ama:

- Bu Promise **başarılı olursa** → içinde **sonuçlar dizisi** vardır
- **Hata olursa** → hata ile reject olur

```
Promise.all([...]) // ➜ Promise döner
```

---

## **Ne zaman fulfilled olur?**

✅ **Sadece ve sadece**:

- Tüm Promise’ler **fulfilled** olursa

❌ **Eğer**:

- En az **1 Promise reject** olursa → **hemen reject olur**

---

## **Örnek – Hepsi başarılıysa**

```
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(values => console.log(values));
// [1, 2, 3]
```

📌 Sıra **Promise sırasına göre** korunur.

---

## **Örnek – Biri hata verirse**

```
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Hata!");
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(values => console.log(values))
  .catch(error => console.log(error));
// "Hata!"
```

📌 Diğerleri başarılı olsa bile **sonuç alınmaz**.

---

## **Önemli noktalar (notluk 📝)**

- ✔️ Aynı anda çalışan işlemler için kullanılır
- ✔️ Hepsi gerekli olduğunda idealdir
- ❌ Bir tanesi bile başarısız olursa tüm işlem iptal olur
- ❌ “Biri yeterli” senaryosu için uygun değildir
    
    (Onun için Promise.race() veya Promise.any() kullanılır)
    

---