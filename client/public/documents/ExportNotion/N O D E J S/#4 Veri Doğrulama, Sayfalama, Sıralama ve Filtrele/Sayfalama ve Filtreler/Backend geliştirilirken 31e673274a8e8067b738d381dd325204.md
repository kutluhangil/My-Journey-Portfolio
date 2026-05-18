# Backend geliştirilirken

istemciden (frontend) gelen verilerin her zaman güvenilir olmadığını unutmamalıyız. İstemci, geçersiz değerler gönderebilir veya bazı parametreleri tamamen atlayabilir. Bu yüzden, arama parametrelerini doğru şekilde ayrıştırabilmek için bir mantık geliştirmemiz gerekmektedir.

```
// src/utils/parsePaginationParams.js

const parseNumber = (number, defaultValue) => {
  const isString = typeof number === 'string';
  if (!isString) return defaultValue;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) {
    return defaultValue;
  }

  return parsedNumber;
};
```

`parseNumber` fonksiyonu, string değerleri sayılara dönüştürmek için tasarlanmıştır ve gelen veri türünden emin olamadığımız durumlarda özellikle faydalıdır. Bu fonksiyon iki parametre alır: `number` (dönüştürülmesi gereken değer) ve `defaultValue`(dönüşüm mümkün olmadığında kullanılacak varsayılan değer).

Öncelikle fonksiyon, verilen değerin bir string olup olmadığını kontrol eder. Eğer değilse, doğrudan varsayılan değeri döner. Eğer değer bir string ise, bu string sayıya dönüştürülmeye çalışılır. Eğer dönüşüm sonucu NaN (sayısal olmayan) bir değer elde edilirse, varsayılan değer döndürülür.

Başarılı bir dönüşüm durumunda, fonksiyon bu sayıyı döner.

```
// src/utils/parsePaginationParams.js

/* Dosyanın diğer kodları */**

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;

  const parsedPage = parseNumber(page, 1);
  const parsedPerPage = parseNumber(perPage, 10);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};
```

`parsePaginationParams` fonksiyonu, backend’e yapılan isteklerdeki sayfalama parametrelerini işlemek için `parseNumber` fonksiyonunu kullanır. Bu parametreler `page` ve `perPage` olmak üzere query nesnesinde yer alır ve yanlış belirtilmiş veya tamamen eksik olabilir.

Fonksiyon, bu parametreleri çıkararak `parseNumber` ile doğrular ve dönüştürür. Varsayılan değerler olarak `page` için 1 ve `perPage` için 10 kullanılır. Sonuç olarak, doğru şekilde işlenmiş ve geçerli sayfalama parametreleri içeren bir nesne elde edilir.

Artık bu ayrıştırıcıyı kullanarak `page` ve `perPage` değerlerini alabilir ve bunları backend’e iletebiliriz:

```
// src/controllers/students.js

import { parsePaginationParams } from '../utils/parsePaginationParams.js';

/* Dosyanın geri kalan kodları */**

export const getStudentsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const students = await getAllStudents({
    page,
    perPage,
  });

  res.json({
    status: 200,
    message: 'Successfully found students!',
    data: students,
  });
};
```

Ayrıca, sayfalama bilgilerini hesaplayan bir kısmı ayrı bir yardımcı fonksiyona taşıdık, çünkü bu ileride diğer kaynaklarla çalışırken faydalı olabilir.

`calculatePaginationData` fonksiyonu, mevcut sayfa, sayfadaki öğe sayısı, toplam öğe sayısı, toplam sayfa sayısı, bir sonraki ve önceki sayfaların varlığı hakkında göstergelerle birlikte sayfalama hakkında tam bilgi içeren bir nesne döner.

Bu, uygulamanın istemci tarafının mevcut verilere göre sayfa navigasyonunu doğru bir şekilde yönetmesini sağlar.

```
// src/utils/calculatePaginationData.js

export const calculatePaginationData = (count, perPage, page) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNextPage = Boolean(totalPages - page);
  const hasPreviousPage = page !== 1;

  return {
    page,
    perPage,
    totalItems: count,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
};
```

Şimdi, veritabanından verileri doğru şekilde almak için gerekli mantığı eklememiz gerekiyor:

```
// src/services/students.js

import { calculatePaginationData } from '../utils/calculatePaginationData.js';

/* Dosyanın geri kalan kodları */**

export const getAllStudents = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const studentsQuery = StudentsCollection.find();
  const studentsCount = await StudentsCollection.find()
    .merge(studentsQuery)
    .countDocuments();

  const students = await studentsQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(studentsCount, perPage, page);

  return {
    data: students,
    ...paginationData,
  };
};
```

`getAllStudents` fonksiyonu, `page` ve `perPage` parametrelerini içeren bir nesne alır. Bu fonksiyon, önce geçişi (`skip`) hesaplar; bu, mevcut sayfadaki kayıtların gösterilmeden önce atlanması gereken kayıt sayısını temsil eder. Ayrıca, bir sayfada döndürülecek kayıtların limitini de hesaplar.

Daha sonra, fonksiyon sayfalama uygulamak için `skip` ve `limit` yöntemlerini kullanarak öğrenci listesini veritabanından alır. Ayrıca, `countDocuments` yöntemiyle toplam öğrenci sayısını belirler.

Öğrenci verilerini ve toplam sayıyı aldıktan sonra, `calculatePaginationData`fonksiyonu ile sayfalama verileri hesaplanır ve bu bilgiler istemciye iletilir. Bu sayede, istemci sonuçlar arasında kolayca gezinerek doğru bir sayfa navigasyonu sağlar.

Veri sıralama, birçok uygulama ve veritabanı yönetim sistemi (**DBMS**) için temel bir işlevdir. Bu işlem, veri kümesini belirli bir kriter veya alan temelinde düzenler ve genellikle daha etkili bir veri analizi ve erişim için kullanılır.

**Veri sıralamanın temel yönleri şunlardır:**

- **Sıralama alanı** (Sorting Field):- sıralamanın hangi alan veya kritere göre yapılacağını belirtir. Örneğin, bir öğrenci listesine sahipseniz, onları isim, soyisim veya not ortalamasına göre sıralayabilirsiniz.
- **Sıralama düzeni** (Sorting Order):- sıralamanın artan (ASC - ascending) veya azalan (DESC - descending) olarak yapılıp yapılmayacağını belirtir. Varsayılan olarak, genellikle sıralama artan olarak yapılır.

Eğer sıralama işlemini bir veritabanı sorgusu içinde gerçekleştirme şansınız varsa, bunu **JavaScript** içinde yapmaktan kaçınmalısınız. JavaScript sıralama işlemleri için optimize edilmemiştir ve büyük veri kümelerinde performans sorunlarına neden olabilir. Bunun aksine, modern **DBMS**'ler sıralama işlemleri için oldukça optimize edilmiştir.

**Mongoose**'da sıralama işlemleri, `sort()` metodu ile yapılır. Bu metot, bir koleksiyondan veri alırken belirli alanlara göre sıralama yapmanızı sağlar.

`Model.find().sort({ field1: direction1, field2: direction2, ... });`

**Burada:**

- `Model` — Mongoose modeli;
- `field1`, `field2` — verileri sıralamak istediğiniz alanlar;
- `direction1`, `direction2` — sıralama yönü (`1, ‘asc’ veya ‘ascending’` artan için, `1, ‘desc’ veya ‘descending’` azalan için).

Veri sıralaması oluşturmak için önce bir `sortOrder` sabiti tanımlayalım:

```
// src/constants/index.js

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};
```

Sıralama işlemleri için, tıpkı paginasyon işleminde olduğu gibi bir sorgu parametreleri ayrıştırıcısı yazalım:

```
// src/utils/parseSortParams.js

import { SORT_ORDER } from "../constants/index.js";

const parseSortOrder = (sortOrder) => {
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
  if (isKnownOrder) return sortOrder;
  return SORT_ORDER.ASC;
};

const parseSortBy = (sortBy) => {
  const keysOfStudent = [
    '_id',
    'name',
    'age',
    'gender',
    'avgMark',
    'onDuty',
    'createdAt',
    'updatedAt',
  ];

  if (keysOfStudent.includes(sortBy)) {
    return sortBy;
  }

  return '_id';
};

export const parseSortParams = (query) => {
  const { sortOrder, sortBy } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
```

Bu ayrıştırıcı, istemciden gelen sıralama parametrelerini doğrular ve standart hale getirir. İki ana bölümden oluşur: **`parseSortOrder`** ve **`parseSortBy`**.

**`parseSortOrder`** fonksiyonu, **`sortOrder`** parametresini alır ve bunun bilinen sıralama düzenlerinden birine — artan (**`ASC`**) veya azalan (**`DESC`**) olup olmadığını kontrol eder. Eğer belirtilen sıralama düzeni bu listeye giriyorsa, fonksiyon onu döndürür. Sıralama düzeni bilinmiyorsa veya yoksa, varsayılan olarak sıralama düzenini artan (**`ASC`**) olarak ayarlar.

**`parseSortBy`** fonksiyonu, veritabanında sıralama yapılacak alanı belirtmesi gereken **`sortBy`** parametresini alır. Bu fonksiyon, belirtilen alanın geçerli alanlar listesine (örneğin, **`_id`**, **`name`**, **`age`** vb.) girip girmediğini kontrol eder. Eğer alan bu listeye giriyorsa, onu döndürür. Aksi takdirde, varsayılan olarak **`_id`** alanını döndürür.

Modülden dışa aktarılan genel **`parseSortParams`** fonksiyonu, bu iki fonksiyonu entegre eder. **`query`** nesnesini alır, buradan **`sortOrder`** ve **`sortBy`** değerlerini çıkarır, bunları ilgili fonksiyonlara işler ve sıralama için doğrulanmış ve kullanıma hazır parametrelerle bir nesne döndürür. Bu, sıralama isteklerinin işlenmesinde tutarlılık ve güvenilirlik sağlanmasına olanak tanır, böylece sunucu her zaman doğru ve beklenen verilerle çalışır.

Şimdi kontrolör kodunu değiştirelim:

```
// src/controllers/students.js

import { parseSortParams } from '../utils/parseSortParams.js';

/* Dosyanın geri kalan kodu */

export const getStudentsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);

  const { sortBy, sortOrder } = parseSortParams(req.query);

  const students = await getAllStudents({
    page,
    perPage,
    sortBy,
    sortOrder,
  });

  res.json({
    status: 200,
    message: 'Successfully found students!',
    data: students,
  });
};
```

Veri sıralama işlemi için servis fonksiyonunu aşağıdaki gibi düzenleyebiliriz:

```
// src/services/students.js

import { SORT_ORDER } from '../constants/index.js';

/* Dosyanın geri kalan kodu */

export const getAllStudents = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const studentsQuery = StudentsCollection.find();
  const studentsCount = await StudentsCollection.find()
    .merge(studentsQuery)
    .countDocuments();

  const students = await studentsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(studentsCount, perPage, page);

  return {
    data: students,
    ...paginationData,
  };
};
```

Artık öğrenci veritabanına yapılan sorgu sonuçlarını sıralama imkanına sahibiz. Varsayılan değerlerle belirlenen **`sortOrder`** ve **`sortBy`** parametreleri, sıralama düzenini ve hangi alana göre sıralama yapılacağını belirlemeye olanak tanır (**`_id`**varsayılan olarak).

Fonksiyon çağrıldığında, **`studentsQuery`** — veritabanına yapılan sorgu, **`StudentsCollection.find()`** ile başlatılır ve artık **`skip`** ve **`limit`** yöntemlerinin yanı sıra (paginasyon uygulamak için) **`sort`** yöntemini de içerir. Bu yöntem, belirtilen **`sortBy`** alanına göre kayıtları, **`sortOrder`** ile belirlenen sıraya göre düzenlemeyi sağlar. Bu tür bir sıralama, kullanıcıların verileri ihtiyaçlarına en uygun şekilde almasını sağlayarak, veri ile etkileşimde daha fazla esneklik ve kolaylık sunar.

Veritabanları ve programlama bağlamında **filtreleme**, bir veri kümesinden belirli kriterlere uyan kayıtların seçilmesi işlemidir. Bu yöntem, yalnızca ilgili verileri seçerek sorgu sonuçlarını daraltmamıza olanak tanır ve gerekli bilgilere hızlıca ulaşmamızı sağlar. Filtreleme, büyük veri kümelerinde çalışırken hem verimlilik hem de doğruluk açısından kritik bir rol oynar.