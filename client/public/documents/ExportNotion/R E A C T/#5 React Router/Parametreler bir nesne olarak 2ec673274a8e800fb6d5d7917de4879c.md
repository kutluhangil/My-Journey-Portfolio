# Parametreler bir nesne olarak

Eğer sorgu dizisi birden fazla parametre içeriyorsa, sürekli olarak `get()` metodunu kullanmak pratik olmayabilir. İşte bir `URLSearchParams` sınıfı örneğini basit bir nesneye dönüştürmenin kolay bir yolu.

```
const [searchParams] = useSearchParams();
const params = useMemo(
  () => Object.fromEntries([...searchParams]),
  [searchParams]
);
const { name, maxPrice, inStock } = params;
```

```
💡 HAFIZA YÖNETİMİ
Parametre nesnesinin dönüşüm sürecini optimize etmek için useMemo hook'unu kullanarak, yalnızca sorgu dizesindeki parametreler değiştiğinde yeni bir nesne referansı oluşturuyoruz. Bu yöntem, her bileşen yeniden render edildiğinde gereksiz hesaplamaları önleyerek performansı artırır. Böylece, uygulamanızın verimliliği artırılır ve kullanıcı deneyimi iyileştirilir.
```