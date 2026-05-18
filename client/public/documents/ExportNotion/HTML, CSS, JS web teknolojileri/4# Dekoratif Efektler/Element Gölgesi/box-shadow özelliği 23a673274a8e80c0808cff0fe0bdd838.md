# box-shadow özelliği

Gölge, bir öğeye hacim ve yükseklik katar. Bir öğenin gölgesiz ve gölgesiyle nasıl göründüğünü karşılaştırın. Farkı görebiliyorsunuz, değil mi?

Gölgeler dış ve iç, bulanık ve düz, tek ve çok katmanlı olabilir.

Elbette, düzeni oluşturan tasarımcı tüm bu nüansları mükemmel bir şekilde bilir. Ancak geliştirici, düzenin tüm etkilerini sayfaya doğru bir şekilde aktarmalıdır. Dolayısıyla, gölgenin neyden yapıldığını ve kodda nasıl yeniden üretileceğini de anlamaları gerekir.

`box-shadow` özelliği, bir öğeye bir veya daha fazla gölge ekler. Varsayılan olarak, gölge boyutu öğe boyutuyla aynıdır ve rengi metnin rengiyle aynıdır.

`box-shadow: <x-offset> <y-offset> <blur> <spread> <color>`

- `x-offset` — yatay ofset. Pozitif bir değer gölgeyi bloğun sağına, negatif bir değer – soluna taşır. Gerekli bir değerdir.
- `y-offset` — dikey yer değiştirme. Pozitif bir değer gölgeyi aşağı, negatif bir değer — yukarı taşır. Gerekli bir değerdir.
- `blur` — bulanıklık yarıçapı. Değer ne kadar büyük olursa gölge o kadar bulanık olur. İsteğe bağlı bir değerdir.
- `spread` — yayılma yarıçapı. Pozitif bir değer gölgeyi artırır, negatif bir değer – azaltır. İsteğe bağlı bir değerdir.
- `color` — gölgenin rengini belirler. Herhangi bir renk biçimi kullanılabilir. İsteğe bağlı bir değerdir.

Canlı örnekte gölge öğesinin nasıl göründüğüne ve hangi ayarlara sahip olduğuna bakın.

---

## Box-Shadow Özelliği: Kutucuklara Gölge Ekleme

Şimdi, **`box-shadow`** özelliğini daha iyi anlaman için sana bir hikaye anlatayım. Düşün ki elinde bir tane sihirli bir kutucuk var. Bu kutucuğun havada durmasını, yani biraz daha gerçekçi görünmesini sağlamak istiyorsun. İşte tam da bu noktada **gölgeler** devreye giriyor\!

Gölgeler, kutucuğunun sanki bir ışığın altında duruyormuş gibi görünmesini sağlar. Gölgesi olmayan bir kutucuk düz ve sıkıcı dururken, gölgesi olan kutucuk sanki biraz **yükseklik** kazanmış gibi durur. Farkı görebiliyorsun, değil mi? Tıpkı bir ressamın resmine derinlik katması gibi, biz de kutucuklarımıza gölge ekleyerek onlara derinlik katıyoruz.

Gölgeler farklı şekillerde olabilir:

- **İçte veya Dışta:** Gölge kutucuğun içinde mi olsun, yoksa dışında mı?
- **Bulanık mı, Keskin mi:** Gölge çok mu net görünsün, yoksa biraz dağılmış (bulanık) mı?
- **Tek mi, Çoklu mu:** Tek bir gölge mi olsun, yoksa üst üste binmiş birkaç gölge mi?

Tüm bu detayları tasarımcılar belirler ama bizim görevimiz, o tasarımcının hayal ettiği gölgeyi kodlarla bilgisayar ekranına taşımak. Bu yüzden gölgenin nasıl çalıştığını anlamak çok önemli.

### Box-Shadow Nasıl Çalışır?

**`box-shadow`** özelliği, kutucuklarımıza bir veya daha fazla gölge eklememizi sağlar. Varsayılan olarak, gölgenin boyutu kutucuğun kendi boyutu kadardır ve rengi de kutucuğun içindeki yazının rengiyle aynı olur.

Bir gölgeyi tanımlarken şu bilgileri vermemiz gerekir:

`box-shadow: <x-offset> <y-offset> <bulanıklık> <yayılma> <renk>`

Şimdi bu terimlere daha yakından bakalım ve her birinin nasıl göründüğünü örneklerle inceleyelim:

---

### x-offset (Yatay Kaydırma)

Bu değer, gölgeyi kutucuğun sağa veya sola ne kadar kaydıracağımızı belirler.

- **Pozitif bir değer:** Gölgeyi kutucuğun **sağına** doğru kaydırır.
- **Negatif bir değer:** Gölgeyi kutucuğun **soluna** doğru kaydırır.

**Görsel Örnek:**

```html
<div class="box x-offset-positive"></div>
<div class="box x-offset-negative"></div>

```

```css
.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  margin: 50px;
  display: inline-block;
}

.x-offset-positive {
  box-shadow: 10px 0px 5px 0px grey; /* Gölge sağa doğru 10px kaydırıldı */
}

.x-offset-negative {
  box-shadow: -10px 0px 5px 0px grey; /* Gölge sola doğru 10px kaydırıldı */
}

```

(Hayali görsel: İlk kutunun gölgesi sağında, ikinci kutunun gölgesi solunda)

---

### y-offset (Dikey Kaydırma)

Bu değer, gölgeyi kutucuğun yukarı veya aşağı ne kadar kaydıracağımızı belirler.

- **Pozitif bir değer:** Gölgeyi kutucuğun **aşağısına** doğru kaydırır.
- **Negatif bir değer:** Gölgeyi kutucuğun **yukarısına** doğru kaydırır.

**Görsel Örnek:**

```html
<div class="box y-offset-positive"></div>
<div class="box y-offset-negative"></div>

```

```css
.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  margin: 50px;
  display: inline-block;
}

.y-offset-positive {
  box-shadow: 0px 10px 5px 0px grey; /* Gölge aşağı doğru 10px kaydırıldı */
}

.y-offset-negative {
  box-shadow: 0px -10px 5px 0px grey; /* Gölge yukarı doğru 10px kaydırıldı */
}

```

(Hayali görsel: İlk kutunun gölgesi altında, ikinci kutunun gölgesi üstünde)

---

### Diğer Değerler (İsteğe Bağlı)

- **`blur` (Bulanıklık Yarıçapı):** Gölgenin ne kadar yayılacağını ve bulanık olacağını belirler. Değer ne kadar büyük olursa, gölge o kadar bulanık (dağınık) görünür.
- **`spread` (Yayılma Yarıçapı):** Gölgenin boyutunu artırır veya azaltır. Pozitif bir değer gölgeyi büyütür, negatif bir değer ise küçültür.
- **`color` (Renk):** Gölgenin rengini belirler. İstediğin herhangi bir renk formatını kullanabilirsin (örneğin, `red`, `#000`, `rgba(0,0,0,0.5)`).

**Unutma:** `x-offset` ve `y-offset` değerleri her zaman verilmelidir, çünkü bunlar gölgenin nerede başlayacağını gösterir. Diğerleri ise isteğe bağlıdır ve gölgeye farklı efektler katmak için kullanılır.

![Screen Shot 2025-07-25 at 01.02.18 AM.png](box-shadow%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-25_at_01.02.18_AM.png)