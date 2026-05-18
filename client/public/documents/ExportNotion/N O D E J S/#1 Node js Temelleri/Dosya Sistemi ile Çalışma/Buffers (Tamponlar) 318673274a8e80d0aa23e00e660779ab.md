# Buffers (Tamponlar)

`fs` modülüne geçmeden önce, sıkça karşılaşacağınız bir kavram olan **Buffer**hakkında konuşmamız gerekiyor. Buffer, dosyalarla çalışırken oldukça önemlidir ve muhtemelen daha önce benzer bir konseptle karşılaşmadınız.

Öncelikle, **bit**, **bayt** gibi temel kavramları hatırlayalım:

**Bit** — 1 veya 0'dır. İşte bu kadar basit. İkili sistemde “evet” veya “hayır” olarak ifade edilir.

**Bayt** — 8 bitin bir araya gelmesidir. İkili sistemde toplamda 256 olası 0 ve 1 kombinasyonu vardır.

```
Bu bilgileri temel alarak, Buffer’ın baytlardan oluşan bir dizi (array of bytes) olduğunu söyleyebiliriz.
```

Peki, bunu nasıl elde edebiliriz? Örneğin, bir dosyayı okuyabiliriz:

```
import fs from 'node:fs/promises';

const buffer = await fs.readFile('hello.txt');
// varsayalım ki hello.txt dosyasında "Hello World!" metni vardı.

console.log(buffer);
///<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
```

**Buffer** çıktısında görünen rakamlar, her biri bir baytı temsil eden onaltılık (**hexadecimal**) sayılardır. Bu tür sayılar, örneğin **CSS**'te renklerin **hex formatında**temsil edilmesine benzer. Rakamların sayısının, metindeki karakter sayısına (boşluk dahil) eşit olduğunu fark edebilirsiniz. Ayrıca, her bir **Buffer** elemanının boyutu **1 bayt**tır.

Bu durumda, her bayt bir harfi temsil eder ve bu harfin ne olduğunu anlamak için belirli bir **kodlama** kullanılır.

# **Kodlama nedir ve neden gereklidir?**

Aslında herhangi bir dosya baytlardan oluşur. **readFile** metodunu kullanarak bir resmi okumaya çalışırsanız, metin dosyası ile resmin bu hali arasında çok fazla fark olmadığını görebilirsiniz. Ve işte kodlama, bunun sıradan bir metin mi, yoksa bir resim mi, yoksa başka bir içerik türü mü olduğunu ayırt etmemize yardımcı olabilir.

Metin kodlaması için en yaygın format **UTF-8**'dir. Her rakamın “**Hello World**!” ifadesindeki bir karaktere karşılık geldiğini bu [bağlantıdan](https://onlinetools.com/utf8/convert-hexadecimal-to-utf8) kontrol edebilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/17585304-6bb4-498e-80a6-db1125912dc5Screenshot%202024-01-29%20at%2021.23.43.png)

Bir sayının tam olarak onaltılık olduğunu belirtmek için genellikle **0x** ön eki eklenir (48, bildiğimiz 48 sayısını ifade edebilir, ancak 0x48 yazımı bunun onaltılık sistemde bir sayı olduğunu açıkça gösterir).

Bir Buffer’ı metne dönüştürmek için, **`toString()`** metodunu ve uygun kodlama türünü kullanabilirsiniz:

```
import fs from 'node:fs/promises';

const buffer = await fs.readFile('hello.txt');
// varsayalım ki hello.txt dosyasında Hello World! metni vardı.

console.log(buffer.toString("utf-8"));
/// Hello World!
```

Buffer’lar, dosya işlemleri gibi birçok durumda işinize yarayabilir. İlerleyen bölümlerde, özellikle dosya yükleme işlemleri sırasında Buffer kullanımı hakkında daha fazla bilgi edineceksiniz.