# Buton Oluşturma -Bağlantı ve Buton arasında ki FARK?

Şimdi de potansiyel müşterilerin iletişim bilgilerini bırakabilmeleri ve bir yöneticiden arama talep edebilmeleri için bir buton eklememiz gerekiyor.

`<button>` etiketi tıklanabilir bir buton oluşturur - Bu buton JavaScript programlama dili kullanılarak tamamen işlevsel hale gelen etkileşimli bir öğedir.

Buton, bir açılır pencereyi açmak, mobil menüyü açmak veya kapatmak, bir form göndermek, galeri öğeleri arasında gezinmek vb. amaçlar için kullanılabilir.

`<button>Open sidebar</button>`

```
Bir butonun varsayılan görünümü tarayıcıya bağlıdır ve farklılık gösterebilir, bu nedenle tarayıcılar arasında tutarlı görünmesini sağlamak için CSS kullanılır.

```

`type` niteliği butonun türünü belirtir.

- Butonlar formlar için oluşturulduğundan, özniteliğin varsayılan değeri `type="submit"`dir, bunu daha sonra öğreneceğiz.
- Bir butonu form dışında, yani bağımsız bir etkileşimli öğe olarak kullanırken, `type="button"` niteliğinin değerini belirtmeniz gerekir.

`<button type="button">Open sidebar</button>`

# **Buton mu bağlantı mı?**

Web sitesi düzeninde aynı görünebilecekleri için bir bağlantı ile bir butonu karıştırmamak önemlidir. CSS bu iki öğeyi aynı şekilde biçimlendirmenize olanak tanır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/07479965-5079-411c-9000-99599dd563baScreenshot%202023-03-08%20at%2019.47.44.png)

Bir arayüz öğesine tıklandığında aşağıdaki sonuçlar çıkıyorsa **link** kullanın

- bir adrese geçiş yapar;
- geçerli sayfayı kaydırır;
- bir dosya indirilir.

Tüm bu eylemler `href` niteliğinin ayarlanmasını gerektirir.

Sayfayı yeniden yüklemeden veya yeniden yönlendirmeden tıklandığında bir şey oluyorsa bir **button** kullanın.

```
Çoğu zaman neyi seçeceğimizi sezgisel olarak anlarız. Ancak, daha karmaşık arayüzlerde, geliştiriciden görevi ayarlarken gerekli öğe türünü belirtmesi istenir.

```

Kullanıcının numarasını bırakabileceği ve bir yöneticinin onu geri arayacağı bir form açacak bir buton eklemekle görevlendirildik. Buton, iletişim bilgilerini içeren `address`etiketinden hemen sonra gelmelidir.. Buton metni `Request a callback` olmalıdır.

- Kod, iletişim bilgilerini içeren `address` etiketini içermelidir.
- Kod `button` etiketini içermelidir.
- `button` etiketi kodda `address` etiketinden hemen sonra yer alması gerekmektedir.
- `button` etiketinin `button` değerine sahip bir `type` niteliği bulunmalıdır.
- `button` etiketinin içeriği `Request a callback` olmalıdır.

<p>Do you want to know more? Contact us!</p>
<address>
Call us: <a href="tel:+070174069900">+070174069900</a><br />
Email us:
<a [href="mailto:fatnessescape@doit.com](mailto:href=%22mailto:fatnessescape@doit.com)">[fatnessescape@doit.com](mailto:fatnessescape@doit.com)</a><br />
You may also want to visit us:<br />
Lorem Foundation<br />
332 E Jacked Ave<br />
Mountain View, CA 94041<br />
USA
</address>

**<button type="button">Request a callback</button>**

Salonlar listesindeki her bir öğeye, resim ve bağlantı arasına bir başlık ve açıklama paragrafı ekleyin. Öğelerin sırası şu şekildedir: resim, başlık, açıklama, bağlantı. Unsurların metnini daha da ileri götürün.

```
PF Power Zone

With full access membership you'll gain access to our state of the art gym
floor and become a part of a supportive fitness community. Feel confident
and strong, with equipment to challenge every level of fitness.

PF Fit and Fast

Small group training combines the focused attention of a private session
with the energy of a group. With up to 5 people, the groups have their own
program, training area and equipment.

PF Body Sculpting

Our 1 on 1 private training is the best choice for people looking for a
personalized program based on their goals. You will have your own training
room with one of our experienced fitness coaches.

```

- Ağın spor kulüpleri bölümünün paragrafından sonra sırasız bir liste yer almalıdır.
- Liste üç öğeden oluşmalıdır.
- Her liste öğesinin bir resmi bulunmalıdır.
- Her liste öğesinin üçüncü düzey bir başlığı bulunmalıdır.
- Başlıklar resimlerin altında yer almalıdır.
- Her liste öğesi bir metin paragrafına sahip olmalıdır.
- Paragraflar başlıklar altında yer almalıdır.
- Listedeki her öğenin bir bağlantısı bulunmalıdır.
- Bağlantılar paragrafların altında yer almalıdır.
- İlk başlığın metni `PF Power Zone` şeklinde olmalıdır.
- İkinci başlığın metni `PF Fit and Fast` şeklinde olmalıdır.
- Üçüncü başlığın metni `PF Body Sculpting` şeklinde olmalıdır.
- Paragrafların metni görevle örtüşmelidir.

<ul>
<li>
<img
src="[https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B031.jpg](https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B031.jpg)"
width="320"
alt="PF Power Zone. A modern gym equipped with treadmills."
/>
<h3>PF Power Zone</h3>
<p>
With full access membership you'll gain access to our state of the art gym
floor and become a part of a supportive fitness community. Feel confident
and strong, with equipment to challenge every level of fitness.
</p>
<a href="[https://goo.gl/maps/qBnEfK5AingPLZgb9](https://goo.gl/maps/qBnEfK5AingPLZgb9)" target="_blank">
Open in Google Maps
</a>
</li>
<li>
<img
src="[https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B032.jpg](https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B032.jpg)"
width="320"
alt="PF Fit and Fast. A gym with indoor bikes behind a glass door."
/>
<h3>PF Fit and Fast</h3>
<p>
Small group training combines the focused attention of a private session
with the energy of a group. With up to 5 people, the groups have their own
program, training area and equipment.
</p>
<a href="[https://goo.gl/maps/WZ4K6XMvHU7FkgWB7](https://goo.gl/maps/WZ4K6XMvHU7FkgWB7)" target="_blank">
Open in Google Maps
</a>
</li>
<li>
<img
src="[https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B033.jpg](https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B033.jpg)"
width="320"
alt="PF Body Sculpting. A studio with fitness balls and trx straps."
/>
<h3>PF Body Sculpting</h3>
<p>
Our 1 on 1 private training is the best choice for people looking for a
personalized program based on their goals. You will have your own training
room with one of our experienced fitness coaches.
</p>
<a href="[https://goo.gl/maps/UZqkiUqS6eWL5DJd7](https://goo.gl/maps/UZqkiUqS6eWL5DJd7)" target="_blank">
Open in Google Maps
</a>
</li>
</ul>