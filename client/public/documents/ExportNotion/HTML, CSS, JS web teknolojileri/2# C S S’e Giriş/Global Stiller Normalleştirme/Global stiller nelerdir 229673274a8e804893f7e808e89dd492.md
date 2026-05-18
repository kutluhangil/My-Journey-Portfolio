# Global stiller nelerdir?

Global stiller, bir belgedeki tüm öğelere uygulanacak CSS kuralları kümesidir. Bu stiller, genellikle `body` etiketi üzerinden ayarlanır ve tüm belgedeki öğelere uygulanarak, tutarlı bir görünüm sağlar. Bu, farklı tarayıcılar ve platformlar arasında tutarlılığı artırır ve geliştirme sürecini hızlandırır.

Örneğin, bir sayfadaki tüm metinlerin aynı yazı tipiyle görüntülenmesini sağlamak için `body` etiketinde `font-family` özelliğini kullanabilirsiniz:

`body {
	*/* Artık (neredeyse) tüm öğeler sans-serif yazı tipinde görüntüleniyor */*font-family: 'Helvetica Neue', 'Roboto', 'Verdana', sans-serif;
}`

Bir sayfadaki metnin çoğu tek renk olmalıdır, aksi takdirde sayfa görsel olarak karmaşık hale gelir ve okunması zorlaşır. Metnin rengini belirleyen `color` özelliği de miras alınır. Bu nedenle, `body` etiketine uygulandığında, renk ayarı, bağlantılar hariç, sayfadaki tüm metin içeriği tarafından devralınacaktır:

`body {
  font-family: 'Helvetica Neue', 'Roboto', 'Verdana', sans-serif;
	color: #2a2a2a;
}`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/e3e93ae9-f943-4163-99ad-daf63fbd98bcUntitled%20-%202024-03-31T231939.453.png)

`body` etiketindeki belge metninin ana rengini `#212121` olarak ve belge metninin boyutunu `14px` olarak ayarlayın.

- Stil sayfasında `body` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `body` seçicisine sahip CSS kuralının `color` özelliği `#212121`değerine sahip olmalıdır.
- `body` seçicisine sahip CSS kuralının `font-size` değeri `14px`olmalıdır.

![Screen Shot 2025-07-08 at 00.42.54 AM.png](Global%20stiller%20nelerdir/Screen_Shot_2025-07-08_at_00.42.54_AM.png)