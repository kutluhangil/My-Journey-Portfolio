# Nesne oluşturma

Nesneler; bir kullanıcı, bir kitap veya bir mağaza ürünü gibi gerçek dünya varlıklarının özelliklerini tanımlamanıza ve gruplandırmanıza olanak tanır. Nesnelere “sözlük” (dictionary) de denir; yani terimleri (özellikleri) ve tanımlarını (anlamlarını) içerirler.

`const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};`

Bir nesneyi tanımlamak için süslü parantezler `{}` kullanılır.

Bir nesne oluştururken ona hemen özellikler ekleyebilirsiniz, ancak bu zorunlu değildir.

Her özellik bir anahtar:değer (`key: value`) çiftinden oluşur.

Anahtar, aynı zamanda "özellik adı" olarak da adlandırılır ve genellikle bir string olur.

Bir özelliğin değeri herhangi bir türde olabilir: ilkel türler (primitives), diziler, nesneler, boolean değerler, fonksiyonlar vb.

Özellikler virgülle ayrılır.

**Anahtar adlandırma kuralları basittir:**

- Anahtar tırnak içine alınmışsa, herhangi bir dize olabilir.
- Tırnak kullanılmamışsa, belirli kurallar geçerlidir: boşluk içeremez ve harf, `_` veya `$` ile başlamalıdır.

# **Görev**

`apartment` değişkenini tanımlayın ve aşağıdaki özelliklere sahip bir daireyi tanımlayan bir nesneye ayarlayın:

- `imgUrl` - resmin yolu, değer `"<https://via.placeholder.com/640x480>"`;
- `descr` - açıklama, değer `"Spacious apartment in the city center"`;
- `rating` - derecelendirme, değer `4`;
- `price` - fiyat, değer `2153`;
- `tags` - meta bilgi, dizi `["premium", "promoted", "top"]`.

# **Testler**

- `apartment` değişkeni tanımlanır
- `apartment` değişkeninin değeri bir nesnedir
- Nesne `imgUrl` özelliğini içerir
- `imgUrl` özelliğinin değeri `"<https://via.placeholder.com/640x480>"` dizesidir.
- Nesne `descr` özelliğini içerir
- `descr` özelliğinin değeri `"Spacious apartment in the city center"` dizesidir.
- Nesne `rating` özelliğini içerir
- `rating` özelliğinin değeri `4` sayısıdır
- Nesne `price` özelliğini içerir
- `price` özelliğinin değeri `2153`tür.
- Nesne `tags` özelliğini içerir
- `tags` özelliğinin değeri bir dizidir `["premium", "promoted", "top"]`

`const apartment = {
  imgUrl: "<https://via.placeholder.com/640x480>",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};`