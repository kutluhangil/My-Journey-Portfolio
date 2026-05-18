# fs Modülünün Temel Yöntemleri

**fs** modülü, **Node.js**'te dosya sistemiyle çalışmak için önemli bir bileşendir. Bu modül, dosya ve dizin işlemleri için çok çeşitli yöntemler sunar. İşte bu yöntemlerden bazıları:

# [**fs.readFile(path [, options])](https://nodejs.org/api/fs.html#fspromisesreadfilepath-options) — Dosya Okuma**

Bu yöntem, bir dosyadan verileri asenkron olarak okumak için kullanılır.

**Argümanlar:**

1. **`path`** (string): okunacak dosyanın yolu.
2. **`options`** (nesne) (isteğe bağlı): okuma modunu belirleyen parametreler. Dosyanın kodlaması veya diğer parametreler belirtilebilir.

**Sonuçlar:**

1. **Promise:** Dosya okuma işlemi tamamlandıktan sonra çözülecek veya reddedilecek bir Promise nesnesi döner.
- Başarılı okuma durumunda dosya içeriği ile çözülür.
- Okuma işlemi başarısız olursa hata nesnesi ile reddedilir.

```
import fs from 'fs/promises';

(async () => {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log('Dosya içeriği:', data);
  } catch (err) {
    console.error('Dosya okuma hatası:', err);
  }
})();
```

# [**fs.writeFile(file, data [, options])](https://nodejs.org/api/fs.html#fspromiseswritefilefile-data-options) — Dosya Yazma**

Bir dosyaya yeni içerik yazmak için kullanılır. Eğer dosya mevcut değilse oluşturulur.

**Argümanlar:**

1. **`file`** (string): verilerin yazılacağı dosyanın adı veya yolu.
2. **`data`** (string veya Buffer): dosyaya yazılacak veriler. Dize veya Buffer nesnesi olarak temsil edilebilir.
3. **`options`** (string veya nesne) (isteğe bağlı): yazma modunu belirleyen parametreler. Örneğin, metin dosyaları için kodlama veya yazma modunu belirten bayraklar.

**Sonuçlar:**

1. **Promise:** Dosyaya yazma işlemi tamamlandıktan sonra çözülecek veya reddedilecek bir Promise nesnesi döner.
- Yazma işlemi başarılı olursa argüman olmadan çözülür.
- Yazma işlemi başarısız olursa hata nesnesi ile reddedilir.

```
import fs from 'fs/promises';

// 'output.txt' dosyasına veri yazıyoruz
(async () => {
  const data = 'Bu, dosyaya yazdığımız veridir.';
  try {
    await fs.writeFile('output.txt', data, 'utf8');
    console.log('Veriler başarıyla dosyaya yazıldı.');
  } catch (err) {
    console.error('Dosyaya yazma hatası:', err);
  }
})();
```

# [**fs.appendFile(path, data [, options])](https://nodejs.org/api/fs.html#fspromisesappendfilepath-data-options) — Dosyaya Ekleme**

Bu yöntem, mevcut bir dosyanın sonuna içerik eklemek için kullanılır.

**Argümanlar:**

1. **`path`** (string): verilerin ekleneceği dosyanın yolu.
2. **`data`** (string veya Buffer): dosyaya eklenecek veriler. Dize veya Buffer nesnesi olarak temsil edilebilir.
3. **`options`** (string veya nesne) (isteğe bağlı): ekleme modunu belirleyen parametreler. Örneğin, metin dosyaları için kodlama veya ekleme modunu belirten bayraklar.

**Sonuçlar:**

1. **Promise:** Dosyaya veri ekleme işlemi tamamlandıktan sonra çözülecek veya reddedilecek bir Promise nesnesi döner.
- Veri ekleme işlemi başarılı olursa argüman olmadan çözülür.
- Veri ekleme işlemi başarısız olursa hata nesnesi ile reddedilir.

```
import fs from 'fs/promises';

// 'output.txt' dosyasına veri ekliyoruz
(async () => {
  const data = 'Bu, dosyaya eklediğimiz veridir.';
  try {
    await fs.appendFile('output.txt', data, 'utf8');
    console.log('Veriler başarıyla dosyaya eklendi.');
  } catch (err) {
    console.error('Dosyaya veri ekleme hatası:', err);
  }
})();
```

# [**fs.rename(oldPath, newPath)](https://nodejs.org/api/fs.html#fspromisesrenameoldpath-newpath) — Dosya Yeniden Adlandırma**

Bir dosya veya dizinin adını değiştirmek ya da taşımak için kullanılır.

**Argümanlar:**

1. **`oldPath`** (string): yeniden adlandırılacak veya taşınacak dosya veya dizinin mevcut yolu.
2. **`newPath`** (string): dosya veya dizinin yeniden adlandırılacağı veya taşınacağı yeni yol.

**Sonuçlar:**

1. **Promise:** Yeniden adlandırma veya taşıma işlemi tamamlandıktan sonra çözülecek veya reddedilecek bir Promise nesnesi döner.
- İşlem başarılı olursa argüman olmadan çözülür.
- İşlem başarısız olursa hata nesnesi ile reddedilir.

```
import fs from 'fs/promises';

// 'oldfile.txt' yolundaki dosyayı veya dizini 'newfile.txt' yoluna yeniden adlandırıyoruz veya taşıyoruz
(async () => {
  try {
    await fs.rename('oldfile.txt', 'newfile.txt');
    console.log('Dosya veya dizin başarıyla yeniden adlandırıldı veya taşındı.');
  } catch (err) {
    console.error('Yeniden adlandırma veya taşıma hatası:', err);
  }
})();
```

# [**fs.unlink(path)](https://nodejs.org/api/fs.html#fspromisesunlinkpath) — Dosya Silme**

Belirtilen bir dosyayı asenkron olarak siler.

**Argümanlar:**

1. **`path`** (string): silinecek dosyanın yolu.

**Sonuçlar:**

1. **Promise:** Silme işlemi tamamlandıktan sonra çözülecek veya reddedilecek bir Promise nesnesi döner.
- Silme işlemi başarılı olursa argüman olmadan çözülür.
- Silme işlemi başarısız olursa hata nesnesi ile reddedilir.

```
import fs from 'fs/promises';

// 'file.txt' yolundaki dosyayı siliyoruz
(async () => {
  try {
    await fs.unlink('file.txt');
    console.log('Dosya başarıyla silindi.');
  } catch (err) {
    console.error('Dosya silme hatası:', err);
  }
})();
```

# [**fs.readdir(path)](https://nodejs.org/api/fs.html#fspromisesreaddirpath-options) — Klasör İçeriğini Listeleme**

Bir dosya veya dizinin varlığını ve belirtilen erişim modlarına uygunluğunu kontrol eder.

**Argümanlar:**

1. **`path`** (string): dosya ve dizinlerin listesinin alınacağı dizinin yolu.

**Sonuçlar:**

1. **Promise:** Dosya ve dizin listesini alma işlemi tamamlandıktan sonra çözülecek veya reddedilecek bir Promise nesnesi döner.
- Belirtilen dizindeki dosya ve dizin adlarını içeren bir dize dizisi ile çözülür.
- İşlem başarısız olursa hata nesnesi ile reddedilir.

```
import fs from 'fs/promises';

// Geçerli dizindeki dosya ve dizinlerin listesini alıyoruz
(async () => {
  try {
    const files = await fs.readdir('.');
    console.log('Dosya ve dizin listesi:', files);
  } catch (err) {
    console.error('Dosya ve dizin listesini alma hatası:', err);
  }
})();
```

# [**fs.access(path [, mode])](https://nodejs.org/api/fs.html#fspromisesaccesspath-mode) — Kaynağa erişim kontrolü**

Bir dosya veya dizinin varlığını ve belirtilen erişim modlarına uygunluğunu kontrol eder.

**Argümanlar:**

1. **`path`** (string): Kontrol edilmesi gereken dosya veya dizinin yolu.
2. **`mode`** (integer veya sabit) (isteğe bağlı): Kontrol edilmesi gereken erişim modu. Bu, dosyanın varlığı, okunabilirliği, yazılabilirliği veya çalıştırılabilirliği için belirten **`fs.constants.F_OK`**, **`fs.constants.R_OK`**, **`fs.constants.W_OK`**, **`fs.constants.X_OK`** sabitlerinin bir kombinasyonu olabilir.

**Sonuçlar:**

1. Promise: Erişim kontrolü işlemi tamamlandıktan sonra çözümlenecek veya reddedilecek bir Promise nesnesi döner.
- Erişim kontrolü işlemi başarılı olursa, argüman olmadan çözülür. Bu, dosya veya dizinin var olduğu ve belirtilen erişim modlarına uygun olduğu anlamına gelir.
- İşlem başarısız olursa, hata nesnesi ile reddedilir. Hata, dosya veya dizinin mevcut olmadığını veya gerekli erişim haklarının eksik olduğunu belirtebilir.

```
import fs from 'fs/promises';

// Belirtilen yolda dosya veya dizinin erişilebilirliğini kontrol ediyoruz
(async () => {
  const path = 'file.txt';
  try {
    await fs.access(path);
    console.log(`'${path}' dosyası veya dizini erişilebilir.`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`'${path}' dosyası veya dizini mevcut değil.`);
    } else {
      console.error(
        `Erişim kontrolü sırasında '${path}' dosyası veya dizini için hata:`,
        err,
      );
    }
  }
})();
```

# **Bu Bölümde Öğrendikleriniz:**

- **`fs`** modülünü kullanarak dosya işlemleri yapma.
- Dosya okuma, yazma, ekleme, yeniden adlandırma ve silme gibi temel yöntemler.
- Kaynağa erişim kontrolü yöntemlerini kullanma.

Çabalarınıza devam edin ve istediğiniz sonuca ulaşacaksınız.