# Path Modülü

Node.js ile dosya sistemleri hakkında konuşmaya başlamadan önce, [path](https://nodejs.org/api/path.html) modülünü anlamak oldukça önemlidir.

Bilindiği üzere, günümüzde birden fazla işletim sistemi bulunmaktadır: **Windows**, **MacOS**, çeşitli **Linux** dağıtımları ve diğerleri. Bu işletim sistemlerinin her biri, dosya ve dizin yollarını tanımlama ve yönetme konusunda farklı yaklaşımlar benimsemiştir.

Ayrıca, dosya sistemlerinin genel yapısı da birbirinden farklılık gösterebilir. Farklı işletim sistemlerinde dosya yollarıyla çalışmayı standartlaştıracak bir çözüm olması büyük bir kolaylık sağlar. İşte bu noktada **`node:path`** modülü devreye girer.

**Windows** ve **POSIX (MacOS ve Linux)** dosya sistemlerini tanımlarken belirgin farklılıklar şunlardır:

1. Dosya sistemini bir ağaç olarak hayal edin; dallar klasörler, yapraklar ise dosyalardır. Dallar ikiye ayrılabilirken, yapraklar herhangi bir dalın son noktasını temsil eder. **Windows**'ta bu tür bir ağaç için birden fazla kök vardır — `D:`, `C:`gibi diskler. Windows ile çalışan herkes bunlarla %100 karşılaşmıştır. **POSIX**durumunda ise tek bir kök vardır ve buradan dosya sistemi dallanır.
2. Yolları oluştururken, POSIX'te ayırıcı (path segment separator) olarak `/`sembolü kullanılırken, Windows'ta `\\\\` kullanılır.

Farklı geliştiricilerin farklı işletim sistemleri kullanabileceği ve dolayısıyla Node.js çalışma ortamlarının da farklı olabileceği göz önüne alındığında, yol tanımlamalarında ayırıcı sembole sıkı bir bağlılıktan kaçınmamız gerekiyor. Yani, `'/tmp/myfile.html'` veya `'C:\\\\temp\\\\myfile.html'` gibi bir dize tanımı kullanamayız.

```
Dikkat! Path modülü, belirtilen yolda ilgili bir dosya veya klasörün olup olmadığını kontrol etmez; bu yalnızca yollarla çalışmayı kolaylaştıran bir araçtır!
```

# **Yollarla çalışırken faydalı olabilecek temel yöntemler**

[**path.join(...paths[])**](https://nodejs.org/api/path.html#pathjoinpaths)

Bu yöntem, argüman olarak verilen dizeleri, programın çalıştığı işletim sistemine dayalı olarak doğru biçimlendirilmiş bir yola dönüştürür.

```
import path from 'node:path';

// parçalarından yol oluşturma örneği
const somePath = path.join('some_folder', 'some_file.txt');
// somePath MacOS'ta 'some_folder/some_file.txt' olacaktır

// somePath Windows'ta 'some_folder\\\\some_file.txt' olacaktır
```

Bu fonksiyonun bir çağrısının sonucunu başka bir çağrıda kullanabiliriz:

```
import path from 'node:path';

// parçalarından yol oluşturma örneği
const pathToWorkDir = path.join(process.cwd()); // process.cwd() metodunu çağırarak kök dizinin yolunu alıyoruz
const pathToFile = path.join(pathToWorkDir, 'some_folder', 'some_file.txt'); // yolu ek öğelerle genişletiyoruz
// pathToFile MacOS'ta __işlem başlatılan dizin yolu__/some_folder/some_file.txt' olacaktır
// pathToFile Windows'ta __işlem başlatılan dizin yolu__\\\\some_folder\\\\some_file.txt' olacaktır
```

Verilen örnekte, **node.js** süreci hakkında tüm bilgileri içeren global `process`değişkeni ile çalışıyoruz. Özellikle, **`cwd()`** metodu, çalıştırıldığı dizinin mutlak yolunu döndürür.

[**path.parse(path)**](https://nodejs.org/api/path.html#pathnormalizepath)

Argüman olarak verilen yol hakkında bilgi almayı sağlar.

```
import path from 'node:path';

// MacOS'ta
path.parse('/home/user/dir/file.txt');
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// Windows'ta
path.parse('C:\\\\\\\\path\\\\\\\\dir\\\\\\\\file.txt');
// { root: 'C:\\\\\\\\',
//   dir: 'C:\\\\\\\\path\\\\\\\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
```

Bu modül hakkında daha fazla bilgi edinmek için ihtiyaç duyduğunuzda [belgelere](https://nodejs.org/api/path.html)başvurmanızı öneririz.