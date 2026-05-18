# Veritabanı ile Etkileşim

**`src/services/students.js`** dosyasında bir öğrenci servisi oluşturacağız ve aşağıdaki fonksiyonları ekleyeceğiz:

- Tüm öğrenciler hakkında bilgi almak için
- Bir öğrencinin _id'sine göre bilgi almak için.

```
// src/services/students.js

import { StudentsCollection } from '../db/models/student.js';

export const getAllStudents = async () => {
  const students = await StudentsCollection.find();
  return students;
};

export const getStudentById = async (studentId) => {
  const student = await StudentsCollection.findById(studentId);
  return student;
};
```

- `StudentsCollection` modelinin `find()` metodu, **Mongoose** için **MongoDB**'de belgeleri aramak üzere yerleşik bir yöntemdir. `StudentsCollection` modelinde `find()` çağrıldığında, `Student` modeline karşılık gelen belgelerin bir dizisini alırız. Eğer koleksiyon boşsa, boş bir dizi döndürülür.
- `StudentsCollection` modelinin `findById()` metodu, **MongoDB**'de benzersiz bir kimlik numarasına göre tek bir belge aramak için **Mongoose**'un yerleşik bir yöntemidir. `StudentsCollection` modelinde belirtilen öğrenci kimliği ile `findById()` çağrıldığında, bu kimliğe karşılık gelen belgeyi `Student` nesnesi olarak alırız. Eğer ilgili kimlikte bir belge bulunamazsa, `null` döndürülür.

Hizmetler, uygulamanın işlevselliğini mantıksal birimlere ayırarak düzenlemeyi sağlar. Veritabanı ile etkileşim veya dış **API**'lerle etkileşim gibi, doğrudan rota işleme ile ilgili olmayan işlemleri gerçekleştirmek için kullanılırlar. Hizmetler, **HTTP isteklerini** işleyen denetleyiciler ile veritabanı arasında aracılık yaparak uygulamanın mimarisini optimize eder.

Öğrenci hizmeti fonksiyonlarını denetleyicilerde kullanalım. Bunun için iki yeni **GET isteği** rotası oluşturacağız:

- `/students` — tüm öğrencilerin koleksiyonunu almak için rota
- `/students/:studentId` — belirli bir id ile öğrenciyi almak için rota

```
// src/server.js

/* Dosyanın geri kalan kodu */

app.get('/students', async (req, res) => {

});

app.get('/students/:studentId', async (req, res) => {

});
```

**students** hizmet fonksiyonlarını içe aktaralım ve bunları denetleyicilerde kullanalım:

```
// src/server.js

// ... Diğer içe aktarmalar
import { getAllStudents, getStudentById } from './services/students.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
// ... Fonksiyonun geri kalan kodu

	app.get('/students', async (req, res) => {
    const students = await getAllStudents();

    res.status(200).json({
      data: students,
    });
  });

  app.get('/students/:studentId', async (req, res, next) => {
    const { studentId } = req.params;
    const student = await getStudentById(studentId);

    // Öğrenci bulunamazsa yanıt
	  if (!student) {
	    res.status(404).json({
		    message: 'Öğrenci bulunamadı'
	    });
	    return;
	  }

		// Öğrenci bulunursa yanıt
    res.status(200).json({
      data: student,
    });
  });

	// ... Fonksiyonun geri kalan kodu
}
```

```
req.params özelliği, rota dinamik parametrelerinin bir nesnesini içerir; burada her parametre adı, bu nesnedeki bir özelliğe karşılık gelir ve URL'de iletilen değer bu özelliğin değeri olur. Denetleyiciler, parametreler hakkında daha fazla bilgi edinmenizi sağlar. Şu anda, veritabanına nasıl bağlandığımızı anlamaya odaklanıyoruz, bu yüzden bağlantı doğruluğunu test etmek için hazır denetleyicileri kullanıyoruz.
```

Artık **GET istekleri** ile:

- `http://localhost:3000/students` —Tüm öğrencilerin listesine erişebiliriz.
- `http://localhost:3000/students/:studentId` — Belirli bir öğrenciye ait verileri alabiliriz.

Bu adımlar, **MongoDB**'yi temel düzeyde anlamamıza yardımcı oldu ve şu konuları ele aldık:

- **MongoDB** nedir;
- **MongoDB**'ye nasıl bağlanılır;
- **MongoDB**'ye veri nasıl aktarılır;
- **MongoDB**'de veri modelinin temeli nedir;
- Veritabanı ile nasıl etkileşimde bulunulur.

Unutma ki, öğreniminde attığın her adım seni hedefine daha da yaklaştırıyor. Sürekli olarak becerilerini geliştir, denemeler yap ve zorluklardan korkma.