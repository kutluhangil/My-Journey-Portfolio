# Koleksiyonlar ve gruplar

Bir veritabanı binlerce kayıt içeren koleksiyonları depolayabilir. Örneğin, gönderileri görüntülemek için bir uygulamamız var. Binlerce olabileceğinden, her sorguda tüm gönderi koleksiyonunu bir kerede görüntülemek tavsiye edilir mi? Tabii ki hayır.

Öncelikle, yanıttaki bu kadar büyük miktarda verinin işlenmesi ve arayüzde görüntülenmesi, web sayfasının açıldığı cihazda önemli bilgi işlem kaynakları gerektirir. Yanıtın boyutu o kadar büyük olabilir ki, yanıtı almak birkaç saniye sürer. Sunucudan gelen yanıtta ne kadar fazla veri varsa, ağ üzerinden iletilmesi de o kadar uzun sürer. Ayrıca, kullanıcıların genellikle tüm sonuçları bir kerede görmesi gerekmez.

Bu nedenle, her GET isteğinde tüm koleksiyonu görüntülemek çok yoğun kaynak gerektirir.

[**`my-api.com](<http://my-api.com/>)`** sunucumuzun **`/posts`** kaynağında bir gönderi koleksiyonu depoladığı duruma daha yakından bakalım. Koleksiyonlar çok büyük olabilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/3fec77fb-ce92-4fa3-8c09-821bd8787b4eFrame%20771551.jpg)

Tüm 10.000 gönderinin bir koleksiyonunu döndürmek yalnızca tarayıcı için değil, aynı zamanda sunucu için de yoğun kaynak gerektirecek ve bu da aralarındaki veri alışverişinde gecikmelere yol açacaktır.

Bu sorunları çözmek için sayfalandırma kullanma uygulaması vardır.

**Sayfalandırma**, sunucunun tüm koleksiyonu değil, her GET isteğinde kayıtların yalnızca belirli bir bölümünü döndürmesi anlamına gelir. Sayfalandırma sunucuda uygulanır ve istemci tarafında istekteki özel parametreler aracılığıyla kullanılır.

Bir veri koleksiyonu ile çalışma örneği için, [genel JSONPlaceholder API'](https://github.com/typicode/json-server#paginate)sini kullanıyoruz ve `/posts` uç noktasından bir dizi gönderi alıyoruz.

```
const fetchPosts = async() => {
	const response = await axios.get("<https://jsonplaceholder.typicode.com/posts>");
	console.log("Posts: ", response.data);
};
```