# Mongoose'da Karşılaştırma Operatörleri

**Mongoose**'da kullanabileceğiniz bazı temel karşılaştırma operatörleri şunlardır:

**1. Eşitlik (`$eq`):**

- Alanın belirli bir değere eşit olduğu kayıtları döndürür.

`// Örnek: 9 yaşındaki öğrencileri bul
StudentModel.find({ age: { $eq: 9 } });`

**2. Eşitsizlik (`$ne`):**

- Alanın belirli bir değere eşit olmadığı kayıtları döndürür.

`// Örnek: ortalama notu 10 olanlar hariç öğrencileri bul
StudentModel.find({ avgMark: { $ne: 10 } });`

**3. Büyük (`$gt`), Büyük veya Eşit (`$gte`):**

- **`$gt`** Belirtilen değerden büyük olan kayıtları döndürür.
- **`$gte`** Belirtilen değerden büyük veya eşit olan kayıtları döndürür.

`// Örnek: 8 yaşından büyük öğrencileri bul
StudentModel.find({ age: { $gt: 8 } });`

**4. Küçük (`$lt`), Küçük veya Eşit (`$lte`):**

- **`$lt`** Belirtilen değerden küçük olan kayıtları döndürür.
- **`$lte`** Belirtilen değerden küçük veya eşit olan kayıtları döndürür.

`// Örnek: ortalama notu 8.5 veya daha düşük olan öğrencileri bul
StudentModel.find({ avgMark: { $lte: 8.5 } });`

**5. Bir Değer Dizisinde Bulunma (`$in`):**

- Alanın değeri belirli bir değerler dizisinde bulunan belgeleri döndürür.

`// Örnek: erkek veya kadın cinsiyetindeki öğrencileri bul
StudentModel.find({ gender: { $in: ['male', 'female'] } });`

**6. Bir Değer Dizisinin Dışında Bulunma (`$nin`):**

- Alanın değeri belirli bir değerler dizisinde bulunmayan belgeleri döndürür.

`// Örnek: erkek olmayan öğrencileri bul
StudentModel.find({ gender: { $nin: ['male'] } });`