# HTTP başlıkları - HTTP Headers

Üstbilgiler, istek veya yanıtla ilgili hizmet bilgilerini içerir. Örneğin, bir başlık bir ad ve bir değerden oluşur:

- **Accept** başlığı, istemcinin kabul edebileceği ve sunucudan gelen yanıtta düzgün şekilde işleyebileceği içerik türünü belirtir.
- **Content-Type** başlığı ise, alıcının bu verileri doğru şekilde yorumlayabilmesi için, istek veya yanıttaki verinin türünü tanımlar.

```
Accept: text/html
Content-Type: application/json
```

Bir başlık bir ad ve bir değerden oluşur. Başlık değeri, istek veya yanıtın içerik türünü belirtmek için kullanılan bir MIME türüdür (içerik türü) ve eğik çizgi (`/`) ile ayrılmış bir tür ve bir alt türden oluşur.

Örneğin:

- HTML içeren bir metin dosyası `text/html` türüyle tanımlanır.
- Metin dosyası CSS içeriyorsa, `text/css` olarak tanımlanacaktır.
- JSON formatındaki veriler `application/json` olarak tanımlanacaktır.

İstemci `text/css` bekler ve `application/json` alırsa, yanıtın içeriğini tanıyamaz ve doğru şekilde işleyemez. Bu nedenle istek ve yanıtlardaki başlıklar, istemci ve sunucunun bilginin iletileceği biçim üzerinde anlaşmasına yardımcı olur.

Geliştirici araçlarında, `Network` sekmesinde, `Response Headers` bölümünde tüm yanıt üstbilgilerini ve `Request Headers` bölümünde istek üstbilgilerini görebilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/3deb7c83-8223-428b-87ab-8a221f20c213Untitled.png)

Sorgu (Request) başlıklarını oluşturmak için, her başlığın ve değerinin ayrı bir özellik tarafından tanımlandığı, özellikleri olan bir nesnenin değişmezi kullanılır. Tüm bunlar `fetch` yönteminin ayarlar nesnesinde `headers` özelliğinde açıklanmaktadır.

```
fetch("some-url", {
	headers: {
	  "Content-Type": "application/json",
	  "X-Custom-Header": "custom value",
	}
})
```

Örneğin, arka uçtan gelen yanıtta yalnızca JSON beklediğimizi açıkça belirtmek istiyorsak, `Accept` başlığını `application/json` değeriyle ekleriz.

```
fetch("<https://jsonplaceholder.typicode.com/users>", {
  headers: {
    Accept: "application/json",
  },
}).then(response => {
  // ...
});
```

Modern tarayıcılar, işleme ve isteğin gövdesine bağlı olarak birçok varsayılan başlık ekler, bu nedenle standart başlıkları açıkça belirtmeye gerek yoktur.

İşte en popüler olanları:

- `User-Agent`: İsteği yapan istemci yazılımını tanımlar
- `Accept`: İstemcinin hangi medya türlerini işleyebileceğini belirtir
- `Content-Type`: İstek veya yanıt gövdesindeki içeriğin türünü belirtir
- `Authorisation`: Kimlik doğrulama için kimlik bilgilerini iletmek için kullanılır
- `Cache-Control`: Önbelleğe almayı yönetmek için yönergeler
- `Host`: İsteğin yapıldığı kaynağın alan adı