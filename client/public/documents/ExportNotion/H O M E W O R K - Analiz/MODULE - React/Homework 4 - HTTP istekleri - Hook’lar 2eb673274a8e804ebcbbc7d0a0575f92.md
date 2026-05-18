# Homework 4 - HTTP istekleri - Hook’lar

- **`goit-react-hw-04`** adlı bir depo oluşturulmalıdır.
- Ödev tesliminde, biri kaynak dosyalara diğeri ise görev sayfasının [**Vercel**](https://vercel.com/) üzerindeki çalışma bağlantısına olmak üzere iki bağlantı eklenmelidir.
- Proje [**Vite**](https://vitejs.dev/) kullanılarak oluşturulmalıdır.
- Görev kodunu çalıştırırken konsolda herhangi bir hata veya uyarı olmamalıdır.
- Her bileşen için **`src/components`** klasöründe, React bileşeninin JSX dosyasını ve stil dosyasını içeren ayrı bir klasör bulundurulmalıdır. Klasör adı, bileşen dosyası adı (uzantısı **`.jsx`** ile) ve stil dosyası adı (uzantı öncesi **`.module.css`** ile) aynı olmalı ve görevde belirtilen adlarla uyumlu olmalıdır.
- Bileşenleri dışa aktarırken varsayılan dışa aktarma (`export default`) kullanılmalıdır.
- HTTP isteklerini gerçekleştirmek için [`axios`](https://axios-http.com/) kütüphanesi kullanılmalıdır.
- JavaScript kodu temiz ve anlaşılır olmalı; Prettier kullanılmalıdır.
- Stilizasyon, CSS modülleri kullanılarak yapılmalıdır.

# **Görsel Arama**

Anahtar kelime ile görsel arama uygulaması geliştirin. Uygulamanın nasıl çalıştığını gösteren demo videosunu izleyin.

[https://goitlmsstorage.b-cdn.net/de486e09-a81f-4389-afc9-a987f291c0cd03-image-finder.mp4](https://goitlmsstorage.b-cdn.net/de486e09-a81f-4389-afc9-a987f291c0cd03-image-finder.mp4)

# **Görsel Arama Servisi**

Bu görevde, HTTP istekleri aracılığıyla, görselleri [**Unsplash**](https://unsplash.com/developers) görsel servisinden almanız gerekmektedir.

- Geliştirici hesabı açarak dokümantasyona ve backend ile etkileşim kurma imkanına erişin.
- Serviste (New Application bloğu) uygulamanız hakkında bir kayıt oluşturun. Bu zorunlu bir adımdır. Uygulamanız için bir isim düşünün, örneğin "Image Gallery" veya "Photo Search".
- Uygulama kaydını oluşturduktan sonra, uygulama sayfasındaki **`Keys`** bölümünde HTTP istekleri için erişim anahtarını alın (Access Key).

```
Ücretsiz (Demo) sürüm uygulamaları için HTTP istekleri saatte 50 adet ile sınırlıdır, bunu göz önünde bulundurun ve gereksiz istekler yapmayın!

```

Dokümantasyonda sizin için faydalı olacak bölümler:

- [İstek URL'si nasıl oluşturulur](https://unsplash.com/documentation#schema)
- [Erişim anahtarı nasıl eklenir](https://unsplash.com/documentation#public-authentication)
- [Anahtar kelime ile görsel arama](https://unsplash.com/documentation#search-photos)

Backend'den gelen yanıt, gerekli tüm bilgileri içeren bir nesne olarak gelir. Bu nesnenin içinde, bir resim dizisini ve sayfalandırma için toplam grup sayısını bulacaksınız. Dizideki her resim, birçok bilgi içeren bir nesne olarak temsil edilir. Öncelikli olarak, **`urls`** özelliği içinde farklı boyutlardaki resimlerin bağlantılarıyla ilgileneceksiniz. Galeri kartları için **`small`** sürümünü ve modal pencere için **`regular`** sürümünü kullanın.

```
Görevle sınırlı kalmayın; nesnelerdeki verileri kullanarak modal pencerede daha ilginç bilgiler gösterin. Örneğin, resmin yazarı, beğeni sayısı, açıklama vb.
```

# **Bileşenler**

Bu görevde, aşağıdaki bileşenleri kendiniz belirleyip, arayüze temel stil eklemeniz gerekecek. Uygulamanın demo videosunu örnek alabilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/551cc8e0-66b8-4711-9512-6673ed8ced39Screenshot%202024-01-16%20at%2020.27.46.png)

# **Arama Formu Başlığı**

**`SearchBar`** bileşeni, form gönderildiğinde kullanıcıdan alınan giriş değerini iletmek için kullanılan **`onSubmit`**adlı bir prop alır. Aşağıda, bileşenin oluşturduğu DOM yapısı gösterilmektedir:

```
jsx

<header>
  <form>
    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
		<button type="submit">Search</button>
  </form>
</header>
```

Kullanıcı formun gönderme butonuna bastığında, metin alanının boş olması durumunda, resim aramak için metin girmeleri gerektiğini belirten bir bildirim gösterilmelidir. Bu kontrol, **SearchBar** bileşeni içinde gerçekleştirilecektir. Bildirimler için [React Hot Toast](https://react-hot-toast.com/) kütüphanesini kullanın.

# **Resim Galerisi**

**`ImageGallery`** bileşeni, aşağıdaki yapıya sahip resim kartlarının listesini oluşturur:

```
<ul>
{/* Resimli liste öğeleri kümesi */}
	<li>
		<div>
		  <img src="" alt="" />
		</div>
	</li>
</ul>
```

Galeri, yalnızca yüklenmiş herhangi bir resim olduğunda render edilmelidir. **`li`** elemanını kart bileşenine dahil etmemek, bunu galeri bileşeninin bir parçası olarak bırakmak iyi bir uygulamadır.

# **Resim Kartı**

**`ImageCard`** bileşeni, galeri elemanında render edilir. Aşağıdaki yapıya sahip bir DOM elementi oluşturur:

```
<div>
  <img src="" alt="" />
</div>
```

# **Yükleme Göstergesi**

**`Loader`** bileşeni, resimler yüklenirken galeri altında gösterilir. [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) veya başka bir hazır bileşen kullanabilirsiniz.

Resimler yüklenirken, yükleme göstergesi galerinin yerini almamalı, sadece galerinin altında render edilmelidir. Bu, mevcut resimlere ekleme yaparken kritik öneme sahiptir.

# **Hata Mesajı**

**`ErrorMessage`** bileşeni, bir HTTP isteği hatası durumunda resim galerisi yerine render edilir. Sadece bir metin mesajı yeterli olacaktır.

# **Daha Fazla Yükle Butonu**

**`LoadMoreBtn`** bileşeni, "Daha Fazla Yükle" yazısıyla bir buton oluşturur. Butona tıklandığında, bir sonraki resim setinin yüklenmesi ve mevcut resimlerle birlikte render edilmesi gerekmektedir.

- Buton, yalnızca yüklenmiş herhangi bir resim olduğunda render edilmelidir.
- Resim dizisi boşsa, buton render edilmez.

# **Modal Pencere**

`ImageModal` bileşeni, `App` bileşeni içinde render edilmeli ve `App`'ten gerekli tüm veri ve işlevleri prop olarak almalıdır.

Galerideki bir **resim** üzerine tıklandığında, büyük formatta resmi gösteren karanlık arka plana sahip bir `ImageModal`modal penceresi açılmalıdır. Modal pencere, `ESC` tuşuna basıldığında veya dışına tıklandığında kapanacak şekilde yapılandırılmalıdır. Modal pencere işlevselliğini uygulamak için [React Modal](https://github.com/reactjs/react-modal?tab=readme-ov-file#examples) kütüphanesini kullanın.

[İlk Adım Açılış](Homework%204%20-%20HTTP%20istekleri%20-%20Hook%E2%80%99lar/%C4%B0lk%20Ad%C4%B1m%20A%C3%A7%C4%B1l%C4%B1%C5%9F%202eb673274a8e8022beb0fe54c52ec617.md)

[**BÜYÜK RESİM (ÖNCE BUNU ANLA)**](Homework%204%20-%20HTTP%20istekleri%20-%20Hook%E2%80%99lar/B%C3%9CY%C3%9CK%20RES%C4%B0M%20(%C3%96NCE%20BUNU%20ANLA)%202eb673274a8e80bea3e8d8405db7c72d.md)

[ **ADIM 1 — Unsplash API Servis Dosyası**](Homework%204%20-%20HTTP%20istekleri%20-%20Hook%E2%80%99lar/ADIM%201%20%E2%80%94%20Unsplash%20API%20Servis%20Dosyas%C4%B1%202ec673274a8e80b2a620d3fc63cd49a2.md)

[ **ADIM 2 — SearchBar Bileşeni**](Homework%204%20-%20HTTP%20istekleri%20-%20Hook%E2%80%99lar/ADIM%202%20%E2%80%94%20SearchBar%20Bile%C5%9Feni%202ec673274a8e8028a34ddc048ece022a.md)

[**ADIM 3 — Unsplash API ile Görsel Arama (Temel)**](Homework%204%20-%20HTTP%20istekleri%20-%20Hook%E2%80%99lar/ADIM%203%20%E2%80%94%20Unsplash%20API%20ile%20G%C3%B6rsel%20Arama%20(Temel)%202ec673274a8e80248320f269c1a45384.md)

[**ADIM 5 – UX & POLISH (ZORUNLU + GÜZEL)**](Homework%204%20-%20HTTP%20istekleri%20-%20Hook%E2%80%99lar/ADIM%205%20%E2%80%93%20UX%20&%20POLISH%20(ZORUNLU%20+%20G%C3%9CZEL)%202ec673274a8e803fa1b3ea8549f0f2a5.md)