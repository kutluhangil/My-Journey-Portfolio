# Query Builder

**Query Builder**, sorguları yapılandırılmış bir şekilde oluşturmak için kullanılan bir tasarım desenidir. Bu yöntem, özellikle dinamik ve karmaşık sorgular oluşturmak için büyük kolaylık sağlar.

Temel fikir, sorgu yapısını temsil eden bir nesneye sahip olmak ve bu sorguyu yapılandırmak için çağrılabilecek bir dizi yöntem sunmaktır. Bu, karmaşık sorguları doğrudan **SQL** dizeleri veya diğer sorgu dilleri kullanmadan toplamak ve değiştirmek için kolaylık sağlar.

Veritabanları bağlamında, **Query Builder** deseni, özellikle birden fazla koşul veya filtrenin eklenip çıkarılabileceği durumlarda karmaşık sorguları dinamik olarak oluşturmak için özellikle faydalıdır. **Query Builder**, sorguları oluşturmak için okunabilir ve kullanışlı bir arayüz sunar.

**Mongoose**'da, veritabanı sorgularında karmaşık filtreleme koşulları oluşturmak için **`where`** yöntemini kullanabiliriz. **`where`** yöntemi, çeşitli karşılaştırma operatörleri kullanarak farklı koşulları belirtmenizi sağlayan bir **Query** nesnesi oluşturur. İşte yaş ve ortalama notlarına göre öğrencileri filtrelemek için **`where`** yönteminin kullanımına bir örnek:

```
await StudentModel.find()
 .where('age').gte(6).lte(10) // 6 ile 10 yaş arası filtre
 .where('avgMark').gt(7) // 7'den büyük ortalama not filtre
  .exec();
```

Bu örnekte, **`where`** filtreleme koşullarını oluşturmak için kullanılır. **`gte`** "büyük veya eşit", **`lte`** "küçük veya eşit", **`gt`** "büyük" anlamına gelir. Böylece, 6 ile 10 yaşları arasında ve ortalama notu 7'den fazla olan öğrencileri filtreliyoruz.

Daha önceki adımlarda olduğu gibi, filtreleme işlemi için bir sorgu parametreleri ayrıştırıcı fonksiyon oluşturalım:

```
// src/utils/parseFilterParams.js

const parseGender = (gender) => {
  const isString = typeof gender === 'string';
  if (!isString) return;
  const isGender = (gender) => ['male', 'female', 'other'].includes(gender);

  if (isGender(gender)) return gender;
};

const parseNumber = (number) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) {
    return;
  }

  return parsedNumber;
};

export const parseFilterParams = (query) => {
  const { gender, maxAge, minAge, maxAvgMark, minAvgMark } = query;

  const parsedGender = parseGender(gender);
  const parsedMaxAge = parseNumber(maxAge);
  const parsedMinAge = parseNumber(minAge);
  const parsedMaxAvgMark = parseNumber(maxAvgMark);
  const parsedMinAvgMark = parseNumber(minAvgMark);

  return {
    gender: parsedGender,
    maxAge: parsedMaxAge,
    minAge: parsedMinAge,
    maxAvgMark: parsedMaxAvgMark,
    minAvgMark: parsedMinAvgMark,
  };
};
```

Bu kod, belirli kriterlere göre veri seçimi yapılmasını sağlamak için kullanılan sorgu parametrelerini ayrıştırır. Her fonksiyonun belirgin bir amacı bulunmaktadır:

**`parseGender`** fonksiyonu, girilen cinsiyet değerinin bir dize olup olmadığını ve izin verilen değerler listesine (**`male`**, **`female`**, **`other`**) dahil olup olmadığını kontrol eder. Giriş değeri bu koşullara uyuyorsa, geri döner; aksi takdirde fonksiyon **`undefined`**döner, bu da verilerin eksik veya geçersiz olduğunu gösterebilir.

**`parseNumber`** fonksiyonu, giriş parametresinin bir dize olup olmadığını kontrol etmek için tasarlanmıştır. Dizeyi bir tam sayıya dönüştürmeye çalışır ve dönüşüm başarılıysa ve sonuç **`NaN`** (sayı değil) değilse bu sayıyı döner. Dönüşüm başarısız olursa, **`undefined`** döner.

**`parseFilterParams`** fonksiyonu, cinsiyet, yaş aralıkları ve ortalama notlar (hem maksimum hem de minimum değerler) gibi çeşitli parametreleri işlemek için bu iki fonksiyonu kullanır. **`query`** nesnesini alır, bu parametreleri ilgili fonksiyonlar aracılığıyla işler ve işlenmiş ve doğrulanmış parametreleri içeren tek bir nesneye toplar. Bu, belirli filtreler altında veritabanında daha doğru ve hedeflenmiş bir arama yapılmasını sağlar.

Kontrolör kodunu şu şekilde güncelleyelim:

```
// src/controllers/students.js

import { parseFilterParams } from '../utils/parseFilterParams.js';

/* Dosyanın geri kalanı */**

export const getStudentsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);

  const students = await getAllStudents({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.json({
    status: 200,
    message: 'Successfully found students!',
    data: students,
  });
};
```

Servis kodu ise şu şekilde düzenlenebilir:

```
// src/services/students.js

/* Dosyanın geri kalanı */**

export const getAllStudents = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const studentsQuery = StudentsCollection.find();

  if (filter.gender) {
    studentsQuery.where('gender').equals(filter.gender);
  }
  if (filter.maxAge) {
    studentsQuery.where('age').lte(filter.maxAge);
  }
  if (filter.minAge) {
    studentsQuery.where('age').gte(filter.minAge);
  }
  if (filter.maxAvgMark) {
    studentsQuery.where('avgMark').lte(filter.maxAvgMark);
  }
  if (filter.minAvgMark) {
    studentsQuery.where('avgMark').gte(filter.minAvgMark);
  }

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

**`getAllStudents`** fonksiyonundaki filtreleme ile ilgili kod, **`filter`** nesnesi aracılığıyla iletilen belirli kriterlere göre öğrencilerin seçimini sağlar. Bu filtreleme, MongoDB veritabanı sorgularının bir parçası olan **`where`**, **`equals`**, **`lte`** (less than or equal to) ve **`gte`** (greater than or equal to) yöntemleri aracılığıyla gerçekleştirilir.

Filtrelemenin temel aşamaları şunlardır:

- **Cinsiyete göre filtreleme**: **`filter`** nesnesinde **`gender`** parametresi varsa, veritabanı sorgusu, belirtilen cinsiyete uyan öğrencilerle sınırlıdır.
- **Yaşa göre filtreleme**: **`maxAge`** belirtilmişse, seçim, yaşı bu değeri aşmayan öğrencilerle sınırlıdır. Benzer şekilde, **`minAge`** minimum yaş sınırını belirler.
- **Ortalama notlara göre filtreleme**: **`maxAvgMark`** ve **`minAvgMark`**, öğrencilerin dahil edilmesi gereken ortalama notlarının üst ve alt sınırlarını belirlemek için kullanılır.

Bu filtreleme sayesinde, kullanıcıların taleplerine uygun sonuçlar sağlamak için büyük veri yığınları üzerinde etkili bir şekilde yönetim sağlanır.

Burada, sorgular için ayrı bir sorgu oluşturucu devreye girer. Filtreleme mantığı, hem ana sorgu **`studentsQuery`** hem de öğrenci sayısını hesaplamak için kullanılan sorguya aynı anda uygulanır.

Ayrıca, uygulamamızın hızını **`Promise.all()`** ile biraz iyileştirebiliriz:

```
// src/services/students.js

/* Dosyanın geri kalanı */

/* Bu kodun yerine */

const studentsCount = await StudentsCollection.find()
  .merge(studentsQuery)
  .countDocuments();

const students = await studentsQuery
  .skip(skip)
  .limit(limit)
  .sort({ [sortBy]: sortOrder })
  .exec();

/* Şu şekilde yazabiliriz */

const [studentsCount, students] = await Promise.all([
    StudentsCollection.find().merge(studentsQuery).countDocuments(),
    studentsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);**
```

Bu kodun yeniden yapılandırılması, veritabanına yapılan sorguların paralel işlenmesi yaklaşımını kullanarak **`Promise.all`** ile kaynakların daha verimli kullanılmasını ve sunucu yanıt süresinin kısaltılmasını sağlar.

Kodun ilk versiyonunda, iki asenkron işlemin yürütülmesi sırasıyla gerçekleşmektedir: önce belirli filtreleme kriterlerine uyan öğrenci sayısı (**`studentsCount`**) belirlenir, ardından sayfalama ve sıralama dikkate alınarak öğrenciler (**`students`**) çekilir. Her bir sorgu, bir önceki sorgunun tamamlanmasını bekler, bu da özellikle büyük veri setlerinde gereksiz gecikmelere yol açabilir.

Yeniden yapılandırılmış kod versiyonunda, ardışık yürütme yerine her iki işlem aynı anda başlatılır. **`Promise.all`**, bir dizi promis alır ve dizideki tüm promisler başarıyla tamamlandığında yürütülen yeni bir promis döner. Sonuç, her bir promis için verilen sırayla bir sonuç dizisidir.

Bu yaklaşım, yanıt bekleme süresini azaltmayı sağlar, çünkü yanıtın yürütme süresi, dizideki en uzun sorgunun yürütme süresine eşit olur, her bir sorgunun sürelerinin toplamına değil. Bu yöntem, işlemler birbirinden bağımsız olduğunda ve uygulama mantığını ihlal etmeden paralel olarak yürütülebildiğinde en optimal olanıdır.

Bu bölümde, **Node.js**'de sayfalama, sıralama ve filtrelerle ilgili detaylı bilgi edindik. Sayfalar arasında kullanıcı dostu bir navigasyon oluşturmayı, sonuçların doğru bir şekilde sıralanması için sıralama ayarlarını yapmayı ve verilerin hassas bir şekilde seçilmesi için filtreler uygulamayı öğrendik. Bu araçlar, uygulamanızı kullanıcılar için daha kullanışlı ve etkili hale getirmeye yardımcı olacaktır.