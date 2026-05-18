# background-size özelliği

Varsayılan olarak, tarayıcı arka plan görüntüsünü yeniden boyutlandırmaz. Eğer görüntü öğe boyutundan büyük veya küçükse, arka plan tarafından işgal edilmeyen boş alan oluşur veya arka plan sadece kısmen görünür olur.

`background-size: auto | değer | cover | contain`

Bu özellik, gerekli genişlik ve yüksekliği ayarlayarak görüntü boyutlarını ayarlamanıza olanak tanır. Yüksekliği belirtmezseniz, korunan oranlarla otomatik olarak hesaplanacaktır.

`*/* Çıktı görüntü boyutları, varsayılan değerler */*
background-size: auto auto;

*/* Genişlik 200px, yükseklik orantılı olacaktır */*
background-size: 200px;

*/* Genişlik 200px, yükseklik 300px */*
background-size: 200px 300px;`

Değer ayrıca iki özel anahtar kelime de olabilir: `cover` ve `contain`. Her iki değer de arka plan görüntüsünü konteynere mümkün olduğunca sığdırmayı amaçlar, ancak farklı şekillerde.

- `cover` — Görüntü fazlalıklarını keserek konteynere sığdırır.
- `contain` — Konteynerde boş alan oluşturarak görüntüyü sığdırır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/7dba6af7-975b-4659-af14-f1fb372c5fd4Frame%2048360%20%281%29.png)

`cover` anlamı:

- Görüntü oranlarının korunması garanti edilir.
- Görüntü, **tüm öğenin arka planını dolduracak minimum boyuta** ayarlanır.
- **Görüntünün** ve öğenin oranları farklıysa, görüntünün **bir kısmı görsel olarak** dikey veya yatay olarak **kırpılır.**

`contain` anlamı:

- Görüntü oranlarının korunması garanti edilir.
- Görüntü, **öğeye tamamen sığdığı** **mümkün olan maksimum boyuta** (~~orijinalden daha büyük değil)~~ ayarlanır.
- Blok ve görüntünün oranları eşleşmiyorsa, görüntü dikey veya yatay olarak öğenin **tüm arka planını kaplamayabilir**.

Etkileşimli örnekteki butonları kullanarak `background-size` özelliğinin değerini değiştirin ve bunun öğenin arka planını nasıl etkilediğini görün. Varsayılan değer `auto`'dur.

```
.hero {
  background-color: #2a2a2a;
  background-image: url(görüntü yolu);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

```