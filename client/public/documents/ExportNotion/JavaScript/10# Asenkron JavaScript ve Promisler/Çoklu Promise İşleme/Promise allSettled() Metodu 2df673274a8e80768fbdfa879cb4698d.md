# Promise.allSettled() Metodu

`Promise.allSettled()` yöntemi aynı anda birden fazla Promise işleyerek sonuçlarını elde etmenizi sağlar. Giriş olarak bir Promise dizisini alır, bunların tamamlanmasını bekler ve tek bir Promise döndürür.

`Promise.allSettled([promise1, promise2, promise3, ...])`

`Promise.all` metodundan farklı olarak, `Promise.allSettled()` metodu **tüm Promise'lerin tamamlanmasını bekler**, bazı veya tüm Promise'ler reddedilmiş olsa bile.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/607b42bb-a597-4412-a8df-a92316fa7d1cimage-_2_.png)

Dönüştürülmüş Promise hiçbir zaman reddedilmez, her zaman başarılı bir şekilde gerçekleştirilir (durum `fulfilled`). `catch` yönteminin eklenmesi anlamsızdır, çünkü hiçbir zaman gerçekleştirilmez.

```
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Rejected promise 2");
const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3])
	.then(values => console.log(values));
	// [
	//   { status: "fulfilled", value: 1},
  //   { status: "rejected", value: "Rejected promise 2"},
  //   { status: "fulfilled", value: 3}
  // ]
```

Döndürülen Promise'in değeri, her Promise'in yürütülmesi sonucunda elde edilen değerlerin bir dizi nesnesi olacaktır.

- `status` - Promise'ın yürütülme durumunu saklayan bir özellik; bu durum ya `"fulfilled"` şeklinde bir dize olabilir ya da `"rejected"`.
- `value` - Promise'ın yürütülme veya reddedilme durumunda saklanan bir değeri içeren bir özellik.

---

## **Promise.allSettled() ne demek?**

**Promise.allSettled()**, birden fazla Promise’i **aynı anda çalıştırır** ve

👉 **hiçbirini yarı yolda bırakmadan**,

👉 **hepsinin sonucunu** (başarılı ya da hatalı) toplar.

---

## **Promise.all() ile farkı ⭐**

| **Özellik** | **Promise.all** | **Promise.allSettled** |
| --- | --- | --- |
| Bir Promise hata verirse | ❌ Hepsi iptal olur | ✅ Devam eder |
| Tüm Promise’leri bekler mi? | ❌ Hayır | ✅ Evet |
| Hata olursa reject olur mu? | ✅ Evet | ❌ Hayır |
| catch gerekir mi? | ✅ Gerekli | ❌ Gerekmez |

---

## **Mantığı (günlük hayat 🧠)**

👉 **Anket örneği:**

- 3 kişiye soru soruyorsun
- Biri cevap vermezse bile:
    - Kim cevap verdi?
    - Kim hata verdi?
    - Kim reddetti?

**Promise.allSettled = “herkesin sonucunu görmek istiyorum”**

---

## **Ne döndürür?**

👉 **Her zaman TEK bir Promise döndürür**

Bu Promise:

- **asla reject olmaz**
- sonucu **nesnelerden oluşan bir dizi**dir

---

## **Dönen sonuç yapısı**

Her Promise için bir nesne gelir:

```
{
  status: "fulfilled", // veya "rejected"
  value: ...           // sonuç ya da hata
}
```

---

## **Örnek**

```
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Hata!");
const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));
```

### **Çıktı:**

```
[
  { status: "fulfilled", value: 1 },
  { status: "rejected", value: "Hata!" },
  { status: "fulfilled", value: 3 }
]
```

📌 Hepsi beklenir

📌 Hiçbiri iptal edilmez

---

## **Ne zaman tamamlanır?**

✅ **Tüm Promise’ler bittiğinde**

- Başarılı da olsa
- Hatalı da olsa

---

## **Ne zaman kullanılır?**

✔️ Tüm sonuçları görmek istiyorsan

✔️ Hangi işlem başarısız, hangisi başarılı bilmek istiyorsan

✔️ Raporlama, loglama, çoklu API çağrıları için

❌ “Bir tanesi yeterli” senaryosu için uygun değil

---