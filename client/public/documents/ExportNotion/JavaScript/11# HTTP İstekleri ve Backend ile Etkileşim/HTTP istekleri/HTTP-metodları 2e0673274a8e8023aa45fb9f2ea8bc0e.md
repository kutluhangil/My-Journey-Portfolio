# HTTP-metodları

Bir REST hizmeti ile çalışmak için birkaç temel HTTP yöntemi vardır.

- **POST** - yeni bir kaynak oluşturun
- **GET** - bir kaynak kümesi veya tek bir kaynak alır
- **PUT** - mevcut bir kaynağı günceller veya yeni bir kaynak oluşturur
- **PATCH** - mevcut bir kaynağın bir kısmını günceller
- **DELETE** - bir kaynağı siler

Şimdiye kadar sadece `GET` yöntemiyle ilgilendik.

Bir HTTP yöntemi belirtmek için, `fetch` yönteminin ikinci argümanını, yani istek ayarları nesnesini kullanmanız gerekir. Bu nesnenin `method` özelliğine HTTP yöntemini tanımlayan bir dize aktarmanız gerekir.

```
const options = {
	method: "GET"
};

fetch("<https://jsonplaceholder.typicode.com/users>", options)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });
```

- Bir GET isteği gerçekleştirmeniz gerekiyorsa, bunu `fetch` seçeneklerinde belirtmenize gerek yoktur, bu varsayılan istek yöntemidir.
- Her kaynak için olası yöntemlerin listesi, arka ucun kendi belgelerinde açıklanmıştır.