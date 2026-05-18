# Blok ve çizgi elemanları

Belge düzeni, öğelerin bir web sayfasında dikey ve yatay olarak nasıl sıralandığını belirler.

- Dikey olarak, akış yukarıdan aşağıya doğru gider ve varsayılan olarak, öğeler sayfada HTML belgesinde belirtildikleri sırada görüntülenir.
- Yatay olarak, akış soldan sağa (veya Doğu ülkeleri için sağdan sola) doğrudur.

Tüm HTML öğeleri, bir web sayfasında tarayıcı tarafından belirli bir şekilde görüntülenen dikdörtgen alanlardır. İki ana öğe türü vardır: blok öğeleri (bir defterdeki başlık gibi tüm genişliği kaplayan) ve satır öğeleri (bir cümledeki kelimeler gibi yan yana yerleştirilen).

**Blok düzeyindeki bir öğe (block-level element)** ne kadar içerik içerdiğine bakılmaksızın tüm satırı kaplar. Bu nedenle, birden fazla blok düzeyindeki öğe görsel olarak yukarıdan aşağıya sıralanır. Başlık, paragraf ve liste oluşturmak için kullanılan etiketler bu tür öğelerdir.

`*<!-- 
    Başlık, paragraf, liste ve liste öğeleri blok öğeleridir, 
    birbirinin altında görüntülenecek olan 
-->*<h1>Lorem ipsum</h1>
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non laboriosam quos, 
  magni quasi nulla tempora quisquam consequatur voluptates ullam repudiandae ad 
  ducimus sint dolore autem?
</p>

<h2>Lorem ipsum dolor</h2>
<ul>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> 
  <li>Assumenda iusto dolorum architecto!</li>
</ul>`

Bunlar alt alta görüntülenecektir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/50e0af51-93f3-4514-a2c0-daf4be7b629dUntitled%20%2810%29.jpeg)

Bir **satır öğesi(inline element) içerdiği alanı kaplar.** Bu nedenle, aynı satıra birden fazla satır öğesi yerleştirilebilir. Satırda yeterli alan bulunmadığında, öğe yeni bir satıra geçer.

`*<!-- Bağlantılar, aynı satırda birbiri ardına yerleştirilen dize öğeleridir
yeterli alan olduğu sürece -->*<a href="">Satır öğesi 1</a>
<a href="">Satır öğesi 2</a>
<a href="">Satır öğesi 3</a>`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/0377fc11-f746-43fd-9b50-bf39a6da29c7Group%20771514.png)

Metin paragrafından sonra, kullanıcıyı markamızın salonlarının konumunu gösteren Google haritalarına yönlendiren üç bağlantı ekleyin. Bağlantılar yeni bir tarayıcı sekmesinde açılmalıdır.

Aşağıdaki bağlantıların öznitelik değerlerini ve metin içeriğini alın:

```
URL 1: https://goo.gl/maps/qBnEfK5AingPLZgb9
Metin 1: PF Power Zone

URL 2: https://goo.gl/maps/WZ4K6XMvHU7FkgWB7
Metin 2: PF Fit and Fast

URL 3: https://goo.gl/maps/UZqkiUqS6eWL5DJd7
Metin 3: PF Body Sculpting

```

- Ağın spor kulüpleri bölümünün paragrafından sonra üç adet `<a>` etiketi bulunmalıdır.
- İlk bağlantının `href` niteliğinin değeri `https://goo.gl/maps/qBnEfK5AingPLZgb9` şeklinde olmalıdır.
- İlk bağlantının metni `PF Power Zone` şeklinde olmalıdır.
- İkinci bağlantının `href` niteliğinin değeri `https://goo.gl/maps/WZ4K6XMvHU7FkgWB7` şeklinde olmalıdır.
- İkinci bağlantının metni `PF Fit and Fast` şeklindedir
- Üçüncü bağlantının `href` niteliğinin değeri `https://goo.gl/maps/UZqkiUqS6eWL5DJd7` şeklinde olmalıdır.
- Üçüncü bağlantının metni `PF Body Sculpting` olmalıdır.
- Tıklandığında, bağlantılar yeni bir tarayıcı sekmesinde açılmalıdır.

<h2>Find us near you</h2>
<p>
Get healthy, feel strong, and be happy! With 50+ classes on the menu,
including HIIT classes, group fitness, and Personal Training, we have
something for every taste. All the gyms and fitness studios in our chain are
well-equipped facilities where you'll find all the amenities from WiFi,
lockers and towels to sauna and jacuzzi. Our fitness bars are here to help you
relax and refuel after your workout. The menu offers smoothies. soups, salads,
and other healthy snacks prepared fresh daily. See where we're currently
operating.
</p>
<a href="[https://goo.gl/maps/qBnEfK5AingPLZgb9](https://goo.gl/maps/qBnEfK5AingPLZgb9)" target="_blank">PF Power Zone</a>

<a href="[https://goo.gl/maps/WZ4K6XMvHU7FkgWB7](https://goo.gl/maps/WZ4K6XMvHU7FkgWB7)" target="_blank">PF Fit and Fast</a>

<a href="[https://goo.gl/maps/UZqkiUqS6eWL5DJd7](https://goo.gl/maps/UZqkiUqS6eWL5DJd7)" target="_blank">PF Body Sculpting</a>