# Yanıttaki eleman sayısı

İlk parametre, sunucudan gelen yanıttaki öğe sayısını tanımlar.

Bizim durumumuzda bu parametre **`per_page`** olarak adlandırılır. Sayfalandırma parametreleri için standart bir isim yoktur, bu nedenle isimleri backend geliştiricisine bağlıdır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/4d317293-0f8f-43e5-9a17-2a42bef4f8abFrame%20771552.jpg)

Böyle bir GET isteği sırasında sunucu 10.000 öğeden oluşan koleksiyonun tamamını değil, yalnızca ilk 5 öğeyi döndürür. Negatif bir değer veya koleksiyondaki öğe sayısından daha büyük bir değer geçerseniz, sunucu farklı tepki verebilir. Uygulamaya bağlı olarak, sunucu şunları yapabilir:

Uygulamaya bağlı olarak, sunucu şunları yapabilir:

- onları görmezden gelebilir
- `400` hatası verir (BAD REQUEST)

Public [JSONPlaceholder API](https://github.com/typicode/json-server#paginate) ayrıca sayfalandırmayı da destekler. Yanıttaki öğe sayısı **`_limit`** parametresi tarafından kontrol edilir.

```
const fetchPosts = async() => {
	const response = await axios.get("<https://jsonplaceholder.typicode.com/posts?_limit=5>");
	console.log("Posts: ", response.data);
};
```

Toplamda, `/posts` koleksiyonunda 10.000 öğe vardır ve varsayılan olarak, bir grup alındığında 5 öğe döndürülür.

Bu örnekte `_limit` parametresinin değerini değiştirmeyi deneyin ve sunucunun arayüzde ve `Network` sekmesinde nasıl yanıt verdiğini görün.