# İç içe geçmiş özellikler

Bir özelliğin değeri başka bir nesne olabilir.

Bu, iç içe geçmiş ve gruplanmış verileri saklamak için kullanılır.

`const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};`

Bu yapı sayesinde, kullanıcıları ülkeye, şehre, minimum ya da maksimum takipçi sayısına göre aramak mümkündür.

Örneğin, bir sosyal ağ kullanıcısının `stats` alanı; takipçi, görüntüleme ve beğeni sayılarını içerir ve bu verilerin bir nesne biçiminde saklanması en uygun yöntemdir. Aynı durum, `location` alanı için de geçerlidir; çünkü ülke ve şehir bilgileri birlikte gruplandırılabilir.

# **Görev**

`apartment` nesnesi aşağıdaki özelliklere sahip bir daireyi tanımlar

- `imgUrl` - fotoğraf
- `descr` - açıklama
- `rating` - derecelendirme
- `price` - fiyat
- `tags` - meta bilgileri

Daire nesnesine `owner` özelliğini ekleyin; bu özelliğin değeri, sahibi hakkında bilgi içeren nesne olacaktır.

Aşağıdaki özellikleri `owner` nesnesine ekleyin:

- `name` - mal sahibinin adı, değer `"Henry"`;
- `phone` - telefon, değer `"982-126-1588"`;
- `e-mail` - değer `"henry.carter@aptmail.com"`.

# **Testler**

- `apartment` değişkeni tanımlanır
- `apartment` değişkeninin değeri bir nesnedir
- `apartment` değişkeninin değeri, `imgUrl`, `descr`, `rating`, `price` ve `tags` değerlerine sahip özelliklere sahiptir
- `apartment` nesnesi `owner` özelliğini içerir
- `owner` özelliğinin değeri bir nesnedir
- `owner` nesnesi `name` özelliğine sahiptir
- `name` özelliğinin değeri `"Henry"`dir.
- `owner` nesnesinin bir `phone` özelliği vardır
- `phone` özelliğinin değeri `"982-126-1588"`dir.
- `owner` nesnesi `e-mail` özelliğine sahiptir
- `e-mail` özelliğinin değeri `"henry.carter@aptmail.com"` şeklindedir

`const apartment = {
  imgUrl: "<https://via.placeholder.com/640x480>",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};`