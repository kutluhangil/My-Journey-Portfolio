# Promise'nin yaşam döngüsü

Promise üç durumda olabilir:

- **Beklemede (pending)** — Promise’in oluşturulduğu ilk durumdur.
- **Gerçekleştirildi (fulfilled)** - İşlem herhangi bir sonuçla başarılı bir şekilde gerçekleştirildi.
- **Reddedildi (rejected)** - İşlem bir hata ile reddedildi.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/5731bb39-2ebc-4872-8295-5464e018e7b2image%20%281%29.png)

Promise, oluşturulduğunda bekleyen (`pending`) bir durumdadır. Daha sonra başarıyla tamamlanabilir (`fulfilled`) ve bir sonuç (değer) döndürebilir. Promise ayrıca başarısız olabilir (`rejected`) ve bir hata döndürebilir. Bir Promise'in `fulfilled`veya `rejected` durumuna geçmesi kalıcıdır.

Bir Promise tamamlandığında veya reddedildiğinde, `settled` terimi kullanılır. Bu, ayrı bir durum değil, yalnızca Promise'in beklemeye (pending) dâhil olmayan herhangi bir durumda olduğunu belirtme şeklidir.

---

### **Promise’nin yaşam döngüsü ne demek?**

Bir **Promise**, asenkron bir işlemin **hangi aşamada olduğunu** gösterir ve bu süreçte **3 durumdan** geçer:

1️⃣ **Pending (Beklemede)**

- Promise yeni oluşturulmuştur
- İşlem henüz bitmemiştir
- Sonucu belli değildir

2️⃣ **Fulfilled (Gerçekleştirildi)**

- İşlem **başarıyla tamamlanmıştır**
- Bir sonuç (değer) döner (resolve)

3️⃣ **Rejected (Reddedildi)**

- İşlem **hata ile sonuçlanmıştır**
- Bir hata döner (reject)

---

### **Önemli nokta ⭐**

- Promise **pending → fulfilled** **veya** **pending → rejected** olur
- **Bir kez fulfilled ya da rejected olursa, durumu artık değişmez**

---

### **Settled ne demek?**

- **Settled**, ayrı bir durum **değildir**
- Promise’in **pending olmadığı** (yani fulfilled veya rejected olduğu) anlamına gelir

---