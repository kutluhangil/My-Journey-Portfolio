# Yanıtın kontrol edilmesi

fetch() yöntemi tarafından döndürülen **Promise’in değeri**, sunucu yanıtının durumu hakkında hizmet bilgileri içeren bir nesnedir. Bu nesne, çeşitli yöntemler ve özellikler içeren `Response` sınıfının bir örneğidir. Alınan içeriğin türüne bağlı olarak, yanıt gövdesini veriye dönüştürmek için farklı yöntemler kullanılır.

- `json()` - JSON biçimindeki verileri ayrıştırır.
- `text()` - verileri basit bir metin biçiminde ayrıştırır, örneğin `.csv` (tablo verileri).
- `blob()` - resim, ses veya video gibi bir dosyayı tanımlayan verileri ayrıştırır.

Aşağıdaki örnekte, ilk `then()` yöntemi yanıtın durumunu kontrol eder ve başarılı olursa verileri doğru biçime dönüştürür (ayrıştırma) veya `catch()` yönteminde başarısız bir HTTP isteğini işlemek için açıkça bir hata gösterir.

```
fetch("<https://jsonplaceholder.typicode.com/users>")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
		console.log(data);
  })
  .catch(error => {
    // Error handling
		console.log(error);
  });
```

Bu, `fetch()` işlevinin teknik olarak bir hata olmayan, ancak istemci için başarısız bir sonuç olan `404` durum koduna doğru şekilde tepki vermesi için gereklidir.