# Tarih Oluşturma

Dahili `Date` sınıfı, tarihlerle çalışmanın büyük bir kısmını kolaylaştırır. Bu, zamandaki anları nesneler olarak göstermenize ve önceden tanımlanmış yöntemlerle onlar üzerinde işlem yapmanıza olanak tanır. `Date` sınıfının özelliklerini kullanarak saat, sayaçlar, takvimler ve diğer etkileşimli arayüz öğeleri oluşturabilirsiniz.

`Date` sınıfının bir örneği, belirli bir zaman anını gösteren bir nesnedir. Argüman olmadan tarih oluşturmak, nesnenin başlatıldığı anda geçerli olan tarihi ve saati içeren bir nesneyi döndürür, yani geçerli tarihi ve saati içerir.

```
const date = new Date();

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"
```

Obje, satıra dönüştürüldüğünde yerleşik `toString()` yönteminin sonucunu döndürür; bu nedenle ilk kafesimizde bir dize, bir obje değil elde ederiz.