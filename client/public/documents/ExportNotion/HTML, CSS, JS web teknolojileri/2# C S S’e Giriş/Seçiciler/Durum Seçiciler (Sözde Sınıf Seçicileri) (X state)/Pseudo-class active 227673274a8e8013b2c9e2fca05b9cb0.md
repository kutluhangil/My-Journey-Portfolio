# Pseudo-class :active

Bir öğe aktif hale geldiğinde, yani kullanıcı öğe ile etkileşime geçtiğinde uygulanır. Örneğin, bir bağlantıya tıkladığınızda veya imleci üzerine getirdiğinizde active durumu tetiklenir. Neredeyse her eleman aktif hale gelebilse de, pseudo-class`:active` esas olarak bağlantılar ve butonlar için kullanılır.

`<ul class="social-links">
  <li><a class="link" href="<https://twitter.com>">Twitter</a></li>
  <li><a class="link" href="<https://www.instagram.com>">Instagram</a></li>
  <li><a class="link" href="<https://www.facebook.com>">Facebook</a></li>
</ul>`

`:hover` ve `:active` sözde sınıflarının farklı durumlar olduğunu anlamak önemlidir. `:hover` durumu, kullanıcı fareyi bir öğenin üzerine getirdiğinde başlatılır. hover durumu genellikle `background-color` (veya `color`) değişikliklerle temsil edilir. Kullanıcı fareyi bir şeyin üzerine getirdiğini zaten bildiğinden, `:hover` durumu ile bu durumun olmaması arasındaki stil farkının belirgin olması gerekmez.

`:active` bir öğe ile etkileşimde bulunulduğunda tetiklenir. Etkileşim şu anlama gelir:

- Bir öğe üzerinde farenin sol tuşunu basılı tutmak.
- boşluk tuşuna basılı tutmak (buton öğelerinde).

Şimdi bir örnekle bu durumlara bir göz atalım.

`.social-links .link {
  color: teal;
}

.social-links .link:hover {
  color: orange;
}

.social-links .link:active {
  color: red;
}`

`.social-links` sınıfına ait bir bağlantının üzerine geldiğinizde, bağlantıdaki metnin rengi turuncuya dönüşür.

`.social-links` sınıfına ait bir bağlantıya tıkladığınızda, bağlantıdaki metnin rengi kırmızıya dönüşür.

Etkin bağlantılara uygulanacak CSS kurallarını tanımlayın. Bağlantılar tıklandığında renk değişikliği olmalıdır:

- `page-nav` içindeki bağlantıların rengi `#212121` olarak değiştirilmelidir.
- `club-list` içindeki bağlantıların rengi `#ff1744` olarak değiştirilmelidir.
- Stil sayfasında `.page-nav .link:active` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.page-nav .link:active` seçicisine sahip CSS kuralının `color`özelliği `#212121` değerine sahip olmalıdır.
- Stil sayfasında `.club-list .link:active` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.club-list .link:active` seçicisine sahip CSS kuralının `color`özelliği `#ff1744` değerine sahip olmalıdır.

![Screen Shot 2025-07-05 at 23.18.31 PM.png](Pseudo-class%20active/Screen_Shot_2025-07-05_at_23.18.31_PM.png)