# Homework 2 - Olaylar (Events), Bileşen Durumu (Component State)

- `goit-react-hw-02` adında bir repo oluşturun.
- Ödev tesliminde iki bağlantı bulunmalıdır: Kaynak dosyalarınıza ait GitHub bağlantısı Canlı çalışan sayfanın [**Vercel**](https://vercel.com/) bağlantısı. **Çalışan canlı sayfa AI tarafından kontrol edilmeyecektir**
- Proje [**Vite**](https://vitejs.dev/) kullanılarak oluşturulmalıdır. AI tarafından kontrol edilmeyecektir.
- Görev kodu çalıştırıldığında konsolda hata veya uyarı bulunmamalıdır. **AI tarafından kontrol edilmeyecektir.**
- Her React bileşeni için, src/components klasöründe bileşene ait bir klasör oluşturun. Her klasör, bileşenin JSX dosyasını ve stil dosyasını içermelidir. Bileşen dosyasının adı `.jsx` stil dosyasının adı ise `.module.css` uzantılı olmalıdır (stil dosyası varsa).
- Bileşenlerin dışa aktarımı varsayılan dışa aktarma (`export default`) ile yapılmalıdır.
- JS kodu temiz ve anlaşılır olmalıdır. Bunun için, Prettier kullanılmalıdır.
- Stil dosyaları **CSS modülleri** ile oluşturulmalıdır.. **Stil zorunlu değildir.**

# **Geri Bildirim Widget'ı**

**Sip Happens Café** hakkında geri bildirim toplamak için basit bir uygulama geliştirin. Aşağıdaki adımlara ve bileşen yapısına dikkat edin.

[https://goitlmsstorage.b-cdn.net/b870daa6-5b46-4482-a9fe-5cbdb81511762023-12-04%2015-19-36.mp4](https://goitlmsstorage.b-cdn.net/b870daa6-5b46-4482-a9fe-5cbdb81511762023-12-04%2015-19-36.mp4)

Uygulama, her kategori için toplanan geri bildirimlerin sayısını göstermelidir: **good**, **neutral**, **bad**. Ayrıca, sayfa yenilendiğinde bu geri bildirim istatistiklerinin korunması gerekmektedir.

# **Bileşenler**

Bu projede arayüz, bileşenlere ayrılmış durumdadır. Sizin göreviniz, bu arayüzü koda dökmektir. Her bileşen, kendi renginde çerçevelenmiş şekilde belirlenmiştir ve bunlara uygun şekilde kodlanmalıdır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/120e46bc-8e14-4e70-8589-d1f8db78bb2aScreenshot%202023-12-04%20at%2015.33.12.png)

Gördüğünüz gibi, tüm bileşenler **`App`** bileşeninin içinde render edilmektedir.

Kafe Adı

`Sip Happens Café`

Açıklama Metni

`Please leave your feedback about our service by selecting one of the options below.`

# **Adım 1**

`App` bileşeninde, geri bildirim türlerini saklamak için bir durum (state) oluşturun. Bu durum, aşağıda gösterildiği gibi, geri bildirim kategorilerine karşılık gelen özelliklerden oluşan bir nesne olmalıdır:

```
{
	good: 0,
	neutral: 0,
	bad: 0
}
```

**`Feedback`** ve **`Options`** bileşenlerini tanımlayın ve **`App`** içinde seçenekler ve geri bildirimleri görüntülemek için kullanın. Bunun için onlara gerekli değerleri prop'lar aracılığıyla iletin.

Bu adımın sonunda uygulamanın arayüzü aşağıdaki gibi görünecektir. Henüz bazı bileşenlerde eksik ögeler olabilir; bunları bir sonraki adımlarda tamamlayacaksınız.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/4e449ccd-c485-41fc-9e42-46d32ebeb27fScreenshot%202023-12-04%20at%2015.33.12.png)

# **Adım 2**

**`Options`** bileşenindeki butonlara tıklandığında **`App`** bileşeninin durumunu değiştirmek için bir durum yöneticisi (state manager) ekleyin.

**`updateFeedback(feedbackType)`** adında bir fonksiyon tanımlayın. Bu fonksiyon bir parametre alacak - Geri bildirim türü, durumdaki ilgili özellik adını (yani **`"good"`**, **`"bad"`** veya **`"neutral"`**) temsil eden bir string olacaktır.

```
const updateFeedback = feedbackType => {
 // Burada durumu güncellemek için setter'ı kullan
}
```

**`updateFeedback`** fonksiyonunu **`Options`** bileşenine prop olarak iletin ve butonlara tıklanıldığında, geri bildirim türünü (yani **`“good”`**, **`“bad”`** veya **`“neutral”`**) argüman olarak geçirerek çağırın.

Bu adımdan sonra, **`Options`** bileşenindeki butonlara tıklandığında arayüz güncellenecektir.

[https://goitlmsstorage.b-cdn.net/db86084f-7157-42b3-add6-e3cac4317e262023-12-04%2015-58-26.mp4](https://goitlmsstorage.b-cdn.net/db86084f-7157-42b3-add6-e3cac4317e262023-12-04%2015-58-26.mp4)

# **Adım 3**

**`Feedback`** bileşeninin, en az bir geri bildirim alındıktan sonra render edilmesini sağlayın. Toplam geri bildirim sayısı, aşağıda gösterildiği gibi geri bildirim kategorilerinin toplamı olacaktır:

`const totalFeedback = good + neutral + bad;`

Geri bildirim durumu **`App`** bileşeninde saklandığından, **`totalFeedback`** hesaplamasını bu bileşende yapmak en doğru yaklaşımdır. Hesaplanan bu değeri diğer bileşenlere prop olarak aktarın ve aynı zamanda **`App`**bileşeninde koşullu render işlemi için kullanın.

Eğer geri bildirim yoksa, bu durumu **`Notification`** bileşenine yönlendirin ve boş bir geri bildirim mesajı gösterin. Bu işlemi gerçekleştirmek için **`App`** bileşeninde koşullu render kullanmanız gerekecektir.

[https://goitlmsstorage.b-cdn.net/1058878f-0813-424d-ae71-fc449d630b322023-12-04%2015-53-48.mp4](https://goitlmsstorage.b-cdn.net/1058878f-0813-424d-ae71-fc449d630b322023-12-04%2015-53-48.mp4)

# **Adım 4**

**`Options`** bileşenine, toplanan geri bildirimleri sıfırlamak amacıyla bir **Reset** butonu ekleyin. Bu butona tıklandığında, geri bildirimleri yöneten durum sıfırlanmalıdır. **Reset** butonu, yalnızca en az bir geri bildirim alındığında görünür olmalıdır, tıpkı **`Feedback`** bileşeninde olduğu gibi.

Bu işlemi gerçekleştirmek için, koşullu render'da **`App`** bileşeninde daha önce hesaplanan **`totalFeedback`**değerini kullanın. Bu değeri **`Options`** bileşenine prop olarak ileterek, butonun görünürlüğünü kontrol edin.

[https://goitlmsstorage.b-cdn.net/528f1b80-c411-4160-a37a-f3b572267f462023-12-04%2015-57-25.mp4](https://goitlmsstorage.b-cdn.net/528f1b80-c411-4160-a37a-f3b572267f462023-12-04%2015-57-25.mp4)

# **Adım 5**

Uygulamanın işlevselliğini, arayüzde toplanan geri bildirimlere dair daha fazla istatistiğin görüntülenmesi şeklinde genişletin. Tüm kategorilerden toplanan geri bildirimlerin toplam sayısını ve olumlu geri bildirimlerin yüzdesini ekleyin. Bu değerler, durumu kaydetmenize gerek olmayan, kolayca hesaplanabilir verilerdir. İlgili bileşenlere bu hesaplamaları prop'lar aracılığıyla iletin.

Toplam geri bildirim sayısını, tüm durumların basit bir toplamı olarak hesaplayabilirsiniz:

`const totalFeedback = good + neutral + bad`

Olumlu geri bildirimlerin yüzdesini hesaplamak için aşağıdaki formülü kullanabilirsiniz:

`Math.round((good / totalFeedback) * 100)`

Bu noktada, **`totalFeedback`** ve **`positiveFeedback`** gibi değerler için duruma ek bir özellik oluşturmaya gerek yoktur, çünkü bu veriler mevcut durumdan kolayca hesaplanabilir. Bu yaklaşım, bellek ve kaynak kullanımını optimize ederken senkronizasyon hatalarını da önleyecektir.

Bu adımın ardından uygulama arayüzü tamamlanmış olacaktır.

[https://goitlmsstorage.b-cdn.net/9f88d819-aada-483c-a057-2f5ae15ccfdf2023-12-04%2016-04-26.mp4](https://goitlmsstorage.b-cdn.net/9f88d819-aada-483c-a057-2f5ae15ccfdf2023-12-04%2016-04-26.mp4)

# **Adım 6**

Geri bildirim istatistiklerinin sayfa yenilendiğinde korunmasını sağlamak için durumu yerel depolamada saklayın. Durum değiştiğinde durumu saklamak için efektleri ve yerel depolamayı kullanın ve sayfa yüklendiğinde durumu başlatmak için yerel depolamayı başlatın, böylece saklanan verileri okuyup duruma yazabilirsiniz. Eğer yerel depolamada herhangi bir veri bulunmuyorsa, durumu sıfır değerleri ile başlatın.

Görev tamamlanmayı bekliyor
Son teslim tarihi yok

- 
    
    Görev tamamlanmayı bekliyor
    
- 
    
    Son teslim tarihi yok
    

[**ADIM 1 — Geri Bildirim Widget’ının İSKELETİ**](Homework%202%20-%20Olaylar%20(Events),%20Bile%C5%9Fen%20Durumu%20(Com/ADIM%201%20%E2%80%94%20Geri%20Bildirim%20Widget%E2%80%99%C4%B1n%C4%B1n%20%C4%B0SKELET%C4%B0%202e7673274a8e80bdbf64ecc82d78f50e.md)

[ **ADIM 2 — Options + State + updateFeedback**](Homework%202%20-%20Olaylar%20(Events),%20Bile%C5%9Fen%20Durumu%20(Com/ADIM%202%20%E2%80%94%20Options%20+%20State%20+%20updateFeedback%202e7673274a8e8015958df2292d1098c3.md)

[**ADIM 3 — Feedback + Notification + Koşullu Render**](Homework%202%20-%20Olaylar%20(Events),%20Bile%C5%9Fen%20Durumu%20(Com/ADIM%203%20%E2%80%94%20Feedback%20+%20Notification%20+%20Ko%C5%9Fullu%20Render%202e7673274a8e80219bb8e3620e0b79ea.md)

[**ADIM 4 — Reset Butonu (Koşullu Görünürlük)**](Homework%202%20-%20Olaylar%20(Events),%20Bile%C5%9Fen%20Durumu%20(Com/ADIM%204%20%E2%80%94%20Reset%20Butonu%20(Ko%C5%9Fullu%20G%C3%B6r%C3%BCn%C3%BCrl%C3%BCk)%202e7673274a8e80e6a16bf7d80cb264c9.md)

[ **Adım 5’in özeti (tek cümle)**](Homework%202%20-%20Olaylar%20(Events),%20Bile%C5%9Fen%20Durumu%20(Com/Ad%C4%B1m%205%E2%80%99in%20%C3%B6zeti%20(tek%20c%C3%BCmle)%202e7673274a8e80deb468f3c9b9f409f3.md)

[ **Adım 6 – Mantık (önce bunu anla)**](Homework%202%20-%20Olaylar%20(Events),%20Bile%C5%9Fen%20Durumu%20(Com/Ad%C4%B1m%206%20%E2%80%93%20Mant%C4%B1k%20(%C3%B6nce%20bunu%20anla)%202e7673274a8e8059bfe3eb5a819e92a0.md)