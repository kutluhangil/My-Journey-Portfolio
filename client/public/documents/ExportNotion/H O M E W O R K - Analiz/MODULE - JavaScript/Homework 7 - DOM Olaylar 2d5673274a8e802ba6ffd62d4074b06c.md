# Homework 7 - DOM. Olaylar

Tebrikler - JavaScript kursunun ikinci yarısındasın! 💪

İlk yarıda dilin sözdizimi ele alındıysa, şimdi yeni bir aşamaya başlıyorsun. Modül 7'de yapılanları bir özetlemek için zamanı geldi.

Kendini test et - şimdi şunlara sahip olmalısın:

- belge nesne modelinin ne olduğu ve DOM elemanlarının hiyerarşisinin nasıl oluşturulduğu
- DOM elemanlarının temel özellikleri ve niteliklerinin neler olduğu
- DOM ağacını ele alarak içindeki elemanlar oluşturmayı ve silmeyi
- tarayıcıdaki olayların özü ve işlevselliği
- addEventListener(), removeEventListener() gibi yöntemlerle olayları nasıl işlediğinin
- form elemanlarının olaylarını nasıl uygulayacağın

Bu bilgileri pekiştirmek için pratik yapma zamanı geldi!

# **Ödev 7**

- `goit-js-hw-07` deposunu oluştur
- Her görevi oku ve kod düzenleyicide uygula
- Görevler, teknik gerekliliklere tam olarak uygun şekilde tamamlanmalıdır (orijinal HTML görevinin değiştirilmesi yasaktır).
- Görevin canlı sayfasını açarken konsolda hata veya uyarı bulunmamalıdır.
- Kodun `Prettier` ile biçimlendirildiğinden ve görevin canlı sayfasını açarken konsolda hata veya uyarı olmadığından emin ol.
- Görevi değerlendirme için teslim et

**Taslak Biçimi:** Ev ödevi, çıkış dosyalarına ve `GitHub Pages` üzerindeki çalışma sayfasına iki bağlantı içermektedir.

Başlangıç dosyalarını [buradan indir](https://github.com/goitacademy/javascript-homework/tree/main) ve içerisindeki v3/07src klasörünü kullan. Her görev için hazır düzen ve script dosyalarıyla kopyasını projene ekle. Başlangıç dosyalarının src klasöründe bulunduğuna dikkat et. Ancak GitHub'da canlı bir sayfa oluştururken, index.html dosyasının projenin kök dizininde, yani ek klasörlere ihtiyaç duymadan olması önemlidir. Bu nedenle projene sadece src klasörünün içeriğini taşımalısın, src klasörüne gerek yok.

```
Görevlerinin düzenlemesini stilize etmek için bu taslak kullan.

```

# **Görev 1**

HTML, kategorilerin listesini `ul#categories` içermektedir.

```
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

DOM özelliklerini ve yöntemlerini kullanarak, aşağıdaki işlevleri gerçekleştiren bir script yazın:

1. `ul#categories` içindeki kategorilerin sayısını ve yani `li.item` öğelerinin sayısını hesaplar ve konsola yazdırır.
2. `ul#categories` listesindeki her `li.item` öğesi için, öğenin başlığının metnini ( `<h2>` etiketi) ve kategorideki öğe sayısını (içinde bulunan tüm `<li>` öğeleri) bulur ve konsola yazdırır.

# **Mentorun dikkat edeceği noktalar:**

- Kategorilerin sayısı, adları ve içindekilerin sayısı DOM öğelerinin özellikleri ve yöntemleri kullanılarak alınmıştır.
- Her kategoriye ilişkin veriler, döngü içinde veya `forEach()` yöntemi kullanılarak alınmış ve konsola yazdırılmıştır.
- Konsol ekranında şu içerik gözlemlenmelidir:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/4797477d-0902-4035-b725-da5ddd8c6c6eUntitled%20-%202024-08-12T114718.881.png)

# **Görev 2**

Veri dizisine dayalı resim galerisi oluşturmak için bir script yazın. HTML, `ul.gallery` listesini içerir.

`<ul class="gallery"></ul>`

`images` dizisi kullanılarak `<li>` içine gömülü `<img>` öğeleri oluşturmak için kullan.

`document.createElement()` ve `elem.append()` veya template strings ve `elem.insertAdjacentHTML()` kullanarak HTML öğeleri oluşturup ekleyebilirsin.

- Galeri öğeleri bir ekleme işlemi ile DOM'a eklenmelidir.
- CSS sınıfları aracılığıyla galeri için minimum düzenlemeyi esnek kutular kullanarak ekle.

```
const images = [
  {
    url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
    alt: "Group of Horses Running",
  },
];
```

# **Mentorun dikkat edeceği noktalar:**

- DOM'a üç resim içeren bir galeri oluşturulmuş ve eklenmiştir
- Galeri, `ul.gallery` listesine eklenmiştir ve 3 adet `<li>` elemanından oluşmaktadır, içinde ise `<img>`elemanları bulunmaktadır
- `<img>` elemanlarını oluşturmak için `images` adlı nesne dizisinden veriler kullanılmıştır
- Galeri elemanları tek bir ekleme işlemiyle DOM'a eklenmiştir
- Galeriye CSS sınıfları aracılığıyla flexbox ile minimum düzenleme yapılmıştır

# **Görev 3**

`input#name-input` girişinde metin yazılırken (`input` olayı), şu anki değeri `span#name-output` içine karşılamak için bir script yazın ve hoşgeldin adı olarak kullanın. Girişin etrafındaki boşlukları kesinlikle temizleyin. Eğer giriş boşsa veya yalnızca boşluklar içeriyorsa, span'e `"Anonymous"` dizesi yerine ad olarak yerleştirilmelidir.

`<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>`

# **Mentorun dikkat edeceği noktalar:**

- `input#name-input` öğesinde `input` olayı dinlenir
- Input'ta metin yazarken, mevcut değer `span#name-output` içine bir selamlama adı olarak yerleştirilir
- Input içindeki değer, kenarlardaki boşluklardan temizlenmiştir
- Input boşsa veya yalnızca boşluklar içeriyorsa, span içinde ad yerine `"Anonymous"` metni yerleştirilmelidir

# **Görev 4**

Giriş formunu yöneten bir script yazın.

```
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>
```

1. `form.login-form` formunun gönderilmesi `submit` olayıyla gerçekleşmelidir.
2. Form gönderilirken sayfa yeniden yüklenmemelidir.
3. Gönderim sırasında formda doldurulmamış alanlar varsa, `'All form fields must be filled in'`uyarısını içeren bir `alert` ile ~~çıkış~~ uyarı oluşturun ~~yapın~~. Inputlara `required` niteliği eklemeyin, doğrulama JS aracılığıyla yapılmalıdır.
4. Kullanıcı tüm alanları doldurur ve formu gönderirse, alan değerlerini iki özellikli bir nesneye toplayın; anahtar alan adları olmalı ve değerler, bu alan adlarının karşılık gelen değerleri, kenarlardaki boşluklardan temizlenmelidir. Form öğelerine erişmek için `elements` özelliğini kullanın.
5. Form gönderildiğinde, girilen verilerle bir nesne konsola yazdırılmalı ve `reset` metodu ile form alanlarının değerleri temizlenmelidir.

# **Mentorun dikkat edeceği noktalar:**

- `submit` eventi dinlenir
- Form gönderilirken sayfa yeniden yüklenmez
- Gönderim sırasında formda doldurulmamış alanlar varsa, bir `alert` görüntülenir
- Gönderim sırasında, alan adları - değerler çiftine sahip bir nesne oluşturulur, anahtarlar alan adları, değerler ise bu alan adlarının karşılık gelen değerleridir ve kenarlardaki boşluklardan temizlenir
- Gönderimden sonra form elemanları temizlenir

# **Görev 5**

`button.change-color` elemanına tıklanarak `<body>` öğesinin arka plan rengini değiştiren ve bu rengi `span.color` için metin olarak ata bir script yazın.

`<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>`

Rastgele bir renk oluşturmak için `getRandomHexColor()` fonksiyonunu kullanın.

`function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}`

Dikkat et, `getRandomHexColor()` fonksiyonunn hex formatında bir renk döndürdüğünü, ancak `<body>`üzerindeki arka plan renginin rgb formatında olacağını unutma. Bu normaldir ve herhangi bir değişiklik gerektirmez.

# **Mentorun dikkat edeceği noktalar:**

- Arka plan `<body>`i sadece `button.change-color`a tıkladıktan sonra belirlenecektir.
- `button.change-color` öğesine her tıklamada `<body>` arka planı yeni rastgele bir renge boyanacaktır.
- `<body>` ve `span.color` üzerinde aynı renk değerleri olacaktır.

# **Görev 6**

Aşağıdaki işlevselliğe sahip bir element koleksiyonu oluşturma ve temizleme scripti yaz.

Kullanıcının istediği öğe sayısını girdiği bir `input` var. `Create` düğmesine tıkladıktan sonra, doğru sayıda öğeye sahip bir koleksiyon (DOM'a eklenen) gerçekleştirilmeli ve input içindeki değer temizlenmelidir. `Create` düğmesine tekrar tıklanırsa, mevcut koleksiyonun üzerine yeni bir koleksiyonun getirilmesi gerekmektedir. `Destroy` düğmesine tıkladıktan sonra, öğe koleksiyonu temizlenmelidir.

`<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>`

Kullanıcı `Create` düğmesine bastıktan sonra, `input` içindeki değerlerin 1 ila 100 arasında olması gerektiğini doğrulamak gerekir. Yalnızca bu şartı sağlıyorsa, DOM'a yeni `<div>` öğeleri eklenmelidir.

Sayfadaki öğeleri oluşturmak için, `createBoxes(amount)` adında bir fonksiyon oluşturun. Bu fonksiyon, oluşturulacak öğe sayısını içeren bir parametre almalıdır. Fonksiyon, `amount` parametresinde belirtilen kadar `<div>` öğesi oluşturmalı ve bunları `div#boxes` için DOM'un alt öğeleri olarak eklemelidir.

1. İlk `<div>` öğesinin boyutu 30px x 30px olmalıdır.
2. Her sonraki öğe, öncekinden 10px daha geniş ve yüksek olmalıdır.
3. Tüm öğelerin rastgele bir arka plan rengine sahip olması gerekir. Rastgele bir renk elde etmek için hazır olan `getRandomHexColor()` fonksiyonunu kullanın.

`function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}`

Koleksiyonu temizlemek için `Destroy` düğmesine basıldıktan sonra, `destroyBoxes()` fonksiyonunu oluşturun. Bu fonksiyon , oluşturulan tüm öğeleri kaldırarak `div#boxes` içeriğini temizler.

# **Mentorun dikkat edeceği noktalar:**

- `Create` düğmesine tıklandıktan sonra, `input` içindeki değer 1-100 aralığının dışında ise hiçbir şey olmaz
- `Create` düğmesine tıklandıktan sonra, `div#boxes` içine `input`te belirtilen sayıda farklı renkte kareler eklenir. `input` değeri temizlenir
- Tekrar `Create` düğmesine tıklandığında önceki kareler tamamen kaldırılır ve yerine, `input`te belirtilen sayıda yeni kare eklenir. `input` değeri temizlenir
- `div#boxes` içindeki tüm kareler farklı renklidir ve rastgele bir arka plan rengine sahiptir
- `div#boxes` içindeki ilk kare 30px x 30px boyutundadır ve her bir sonraki kare öncekinden 10px daha yüksek ve geniştir
- `Destroy` düğmesine basıldıktan sonra, tüm kareler `div#boxes` içinden kaldırılmalıdır

[Task 1 - Çözüm](Homework%207%20-%20DOM%20Olaylar/Task%201%20-%20%C3%87%C3%B6z%C3%BCm%202d6673274a8e80d38c12d9359977bb59.md)

[Task 2 - Çözüm](Homework%207%20-%20DOM%20Olaylar/Task%202%20-%20%C3%87%C3%B6z%C3%BCm%202d6673274a8e802389b6d10b8fdde23c.md)

[Task 3 - Çözüm](Homework%207%20-%20DOM%20Olaylar/Task%203%20-%20%C3%87%C3%B6z%C3%BCm%202d6673274a8e804e9fbac86b8e71b6c4.md)

[Task 4 - Çözüm](Homework%207%20-%20DOM%20Olaylar/Task%204%20-%20%C3%87%C3%B6z%C3%BCm%202d6673274a8e80c2afc7e1ca75aca4fc.md)

[Task 5 - Çözüm](Homework%207%20-%20DOM%20Olaylar/Task%205%20-%20%C3%87%C3%B6z%C3%BCm%202d6673274a8e80e1a3e8e42ec39dc0d6.md)