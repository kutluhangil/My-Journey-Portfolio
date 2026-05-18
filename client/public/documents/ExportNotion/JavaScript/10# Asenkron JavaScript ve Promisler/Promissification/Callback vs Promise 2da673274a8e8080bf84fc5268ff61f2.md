# Callback vs Promise

Hayal edelim ki bir isme göre kullanıcı hakkında bilgi almak için sunucuya bir istek yapan, asenkron bir işlemi gerçekleştiren bir fonksiyonumuz var.

`const fetchUserFromServer = (username, onSuccess, onError) => {
  // ...
};`

Şu anda işlev, çalışmanın sonucunu kullanacak olan kod hakkında fazla bilgi sahibi. Başarılı istek için `onSuccess` ve hata durumu için `onError` için geri çağrıları bekliyor ve belirli koşullar altında bu çağrıları yapmakla sorumlu olacak.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/e91ff30a-0c1e-4351-bbca-444342d2eff7Frame%2048673.jpg)

Yani, fonksiyona (geri çağrılar) bir şeyler iletiyoruz ve doğru çalışacağını umuyoruz. Bu bir sorun olabilir.

Fonksiyonun, sonucunu kullanacak olan kodu umursamadığı daha iyidir. Sadece bir işlem gerçekleştirir ve çalışmasının sonucunu dış kod içine döndürür. Asenkron bir işlemin sonucunu döndürmek için fonksiyondan Promise döndürmek gereklidir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/cc75f1de-3427-4dfb-ab7d-29cf76dea764Frame%2048674.jpg)

Promissification, callback'li bir fonksiyonun callback kabul etmeyecek ancak bir Promise döndürecek şekilde dönüştürülmesidir. Böyle bir fonksiyona promissified denir.

Promise ve callback fonksiyonu arasındaki farklar:

- Geri çağrı fonksiyonları, Promise'ler ise nesnelerdir.
- Geri çağrılar, asenkron bir işlemi yürüten fonksiyonun argümanları olarak aktarılırken, Promise'ler bu fonksiyon içinde oluşturulur ve sonucu olarak döndürülür.
- Geri çağrılar başarılı veya başarısız bir işlemin sonuçlarını işlerken, Promise'ler hiçbir şey işlemez, sadece asenkron işlemin mevcut durumunu saklarlar.
- Geri çağrılar birkaç olayı işleyebilirken, Promise'ler yalnızca bir olayla ilişkilidir.