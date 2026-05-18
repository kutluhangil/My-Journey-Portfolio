# URL'deki query params yapısı:

Query parametreleri, **anahtar-değer çiftleri** olarak **URL**'ye eklenir. Parametreler, **"?"**sembolü ile başlar ve birden fazla parametre eklemek için **"&"** sembolü ile ayrılır. Her anahtar-değer çifti, **"="** sembolü ile ayrılarak yapılandırılır.

**Filtreleme parametreleri içeren bir URL örneği:**

`<https://example.com/api/students?minAge=12&maxAvgMark=10>`

Unutmayın: Büyük veri sorgularında, sıralama veya filtreleme işlemlerini **JavaScript**yerine doğrudan veritabanı sistemleri (DBMS) üzerinden yapmak performans açısından daha avantajlıdır.