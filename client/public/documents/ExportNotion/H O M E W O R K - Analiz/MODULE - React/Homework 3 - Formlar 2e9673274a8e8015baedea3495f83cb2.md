# Homework 3 - Formlar

- **`goit-react-hw-03`** adında bir depo oluşturun.
- Ödevinizi gönderirken, biri kaynak dosyalara diğeri de ödevin [Vercel](https://vercel.com/) çalışma sayfasına olmak üzere iki bağlantı ekleyin.
- Proje [Vite](https://vitejs.dev/) kullanılarak oluşturulmalıdır.
- Form oluşturmak için [Formik](https://formik.org/) kütüphanesini kullanın.
- Görev kodunu çalıştırdığınızda konsolda herhangi bir hata veya uyarı olmamalıdır.
- Her bileşen için, **`src/components`** klasöründe React bileşeninin JSX dosyasını ve stil sayfasını içeren ayrı bir klasör bulunmalıdır. Klasör adı, bileşen dosyası (**`.jsx`** uzantılı) ve stil dosyası (**`.module.css`**) ile uyumlu olmalıdır. Bileşen adları, görevde belirtilen isimlere uygun olmalıdır (varsa).
- Bileşenler, varsayılan dışa aktarma yöntemi (**`export default`**) ile dışa aktarılmalıdır.
- JS kodları temiz ve okunabilir olmalıdır, bunun için Prettier kullanın.
- Stilleri, CSS modülleri ile oluşturun.

# **Telefon Rehberi Uygulaması**

Telefon rehberi kişilerini kaydetmek için bir uygulama geliştirin. Uygulama, bir form, kişi listesi ve arama alanından oluşmalıdır. Uygulamanın çalışma videosunu inceleyebilirsiniz:

[https://goitlmsstorage.b-cdn.net/5427446d-0dd0-4a6f-8860-e94fe798a9012023-12-19%2014-34-42.mp4](https://goitlmsstorage.b-cdn.net/5427446d-0dd0-4a6f-8860-e94fe798a9012023-12-19%2014-34-42.mp4)

# **Bileşenler**

Bu görevde, arayüz zaten bileşenlere ayrılmıştır. Göreviniz, bu bileşenler için durum (state) ve prop'ları belirleyerek uygulamanın mantığını oluşturmaktır. Arayüzde bileşenlerin bulunduğu kısımlar, ilgili renk kutuları ile işaretlenmiştir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/97431893-3468-477a-89c1-1f3fff6d8779Screenshot%202023-12-19%20at%2013.48.10.png)

Aşağıdaki bileşenleri oluşturmalısınız: kök bileşen, kişi ekleme formu, kişi listesi, kişi listesi öğesi ve arama filtresi.

Tüm bileşenler, **`App`** bileşeni içinde render edilecektir. **`App`** bileşeninin işaretlemesi şu şekilde olacaktır (prop'lar ve diğer kodlar dahil):

```
<div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>
```

```
Önceki ödevlere kıyasla bu görevde daha az ipucu verilecektir. Bu şekilde, bileşen geliştirme, prop'lar ve uygulamanın mantığına aşina olmanız beklenmektedir.

```

# **Adım 1 - Kişi Listesi**

**`App`** bileşeninde, kişilerin tutulduğu bir dizi (array) state'de bulunmalıdır. Geliştirme aşamasında, test verilerini statik olarak tanımlayarak işlevselliği test edebilirsiniz. Örneğin, state'in başlangıç değeri aşağıdaki gibi olabilir:

```
[
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
```

`ContactList` ve `Contact` bileşenlerini oluşturup, kişileri listelemek için kullanın. Gerekli prop'ları uygun şekilde iletin.

Bu adım tamamlandığında, arayüz aşağıdaki gibi olacaktır:

Bu adım tamamlandığında, arayüz aşağıdaki gibi olacaktır:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/4df84224-abf5-4ad1-87a1-36a18751d976Screenshot%202023-12-19%20at%2013.47.15.png)

# **Adım 2 - İsim ile Arama**

İsimle filtreleme yapmak için bir **`SearchBox`** arama kutusu ekleyin.

- Arama kutusu - form içermeyen ve değeri duruma yazılan (kontrollü bileşen) bir girdi alanıdır.
- Filtreleme mantığı büyük/küçük harfe duyarsız olmalıdır.

```
Filtre durumu App bileşeninde saklanmalı ve gerekli prop'lar SearchBox bileşenine iletilmelidir. Ardından, kişi dizisinin filtrelenmesi App bileşeninde yapılmalı ve sonuçlar ContactList bileşenine prop olarak aktarılmalıdır.

```

Bu adım tamamlandığında, arama kutusu kullanıldığında kişi listesi uygun şekilde güncellenmelidir.

[https://goitlmsstorage.b-cdn.net/34e0523c-37d2-4058-908b-745a8d7112602023-12-19%2013-45-00.mp4](https://goitlmsstorage.b-cdn.net/34e0523c-37d2-4058-908b-745a8d7112602023-12-19%2013-45-00.mp4)

# **Adım 3 - Kişi Ekleme**

Bir **`ContactForm`** bileşeni oluşturarak, yeni kişi ekleme işlemi gerçekleştirin. Her kişi, **`name`**, **`number`** ve **`id`**özelliklerine sahip olmalıdır. Örneğin, daha önce state'te bulunan verilerle aynı yapıda olmalıdır.

```
Kimlik (ID) oluşturmak için nanoid gibi bir kütüphane kullanın. Gelecekte bu iş veritabanı ile yapılacaktır, ancak şimdilik form gönderildiğinde ID'yi manuel olarak ekleyebilirsiniz.

```

Formu [Formik](https://formik.org/) ile oluşturun. Ayrıca, form alanları için [Yup](https://github.com/jquense/yup) kütüphanesi ile doğrulama ekleyin ve hata mesajlarını gösterin:

- Alanlar doldurulması zorunlu olmalıdır.
- Minimum karakter sayısı - 3
- Maksimum karakter sayısı - 50

Bu adım tamamlandığında, uygulama şu şekilde görünecektir:

[https://goitlmsstorage.b-cdn.net/440d80ea-b9be-420a-a928-cf7baa75241a2023-12-19%2014-16-40.mp4](https://goitlmsstorage.b-cdn.net/440d80ea-b9be-420a-a928-cf7baa75241a2023-12-19%2014-16-40.mp4)

# **Adım 4 - Kişi Silme**

Uygulamaya, kaydedilen kişileri silme işlevi ekleyin. Kullanıcı, kişi kartında bulunan **Delete** düğmesine tıklayarak kişiyi silebilir.

[https://goitlmsstorage.b-cdn.net/8ae510f5-c187-4b95-927c-0e416662ed9c2023-12-19%2014-27-49.mp4](https://goitlmsstorage.b-cdn.net/8ae510f5-c187-4b95-927c-0e416662ed9c2023-12-19%2014-27-49.mp4)

# **Adım 5 - Kişileri Kaydetme**

Uygulama, sayfa yenilendiğinde kişi listesini yerel depolamadan almalı ve kaydetmelidir. Bunun için React'in efektlerini kullanın.

- Kişi ekleme ve silme sırasında kişiler yerel depolamaya kaydedilmelidir.
- Uygulama yüklendiğinde, kişiler varsa, yerel depolamadan okunmalı ve duruma yazdırılmalıdır.

[https://goitlmsstorage.b-cdn.net/c2a0e95c-44be-486c-b35a-501d44e5d7422023-12-19%2014-32-29.mp4](https://goitlmsstorage.b-cdn.net/c2a0e95c-44be-486c-b35a-501d44e5d7422023-12-19%2014-32-29.mp4)

[**ADIM 1 — KİŞİ LİSTESİ (SADECE LİSTELEME)**](Homework%203%20-%20Formlar/ADIM%201%20%E2%80%94%20K%C4%B0%C5%9E%C4%B0%20L%C4%B0STES%C4%B0%20(SADECE%20L%C4%B0STELEME)%202e9673274a8e805f8967dbe84a237876.md)

[**ADIM 2 - İsim ile Arama**](Homework%203%20-%20Formlar/ADIM%202%20-%20%C4%B0sim%20ile%20Arama%202e9673274a8e80499a7dc42b718a2658.md)

[**Kütüphane bağlama “nanoid” ve “yup” için**](Homework%203%20-%20Formlar/K%C3%BCt%C3%BCphane%20ba%C4%9Flama%20%E2%80%9Cnanoid%E2%80%9D%20ve%20%E2%80%9Cyup%E2%80%9D%20i%C3%A7in%202e9673274a8e801fb6c4cd40267d6570.md)

[**ADIM 3 — ContactForm (Kişi Ekleme)**](Homework%203%20-%20Formlar/ADIM%203%20%E2%80%94%20ContactForm%20(Ki%C5%9Fi%20Ekleme)%202e9673274a8e80c890e3e36d8c1ca2c7.md)

[ **ADIM 4 — Kişi Silme Mantığı**](Homework%203%20-%20Formlar/ADIM%204%20%E2%80%94%20Ki%C5%9Fi%20Silme%20Mant%C4%B1%C4%9F%C4%B1%202e9673274a8e807ea2c8c59dc22f7b89.md)

[**ADIM 5 — Kişileri LocalStorage’da Saklama**](Homework%203%20-%20Formlar/ADIM%205%20%E2%80%94%20Ki%C5%9Fileri%20LocalStorage%E2%80%99da%20Saklama%202e9673274a8e809a88ccca679709a610.md)