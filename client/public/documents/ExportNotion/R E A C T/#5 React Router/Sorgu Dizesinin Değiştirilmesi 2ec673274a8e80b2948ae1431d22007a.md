# Sorgu Dizesinin Değiştirilmesi

Parametreleri değiştirmek için, `useSearchParams` fonksiyonunun dizinin ikinci elemanı olarak döndürdüğü fonksiyonu kullanıyoruz. Bu fonksiyona, mevcut sorgu dizesini tamamen değiştirecek yeni parametreler nesnesi geçmeliyiz.

```
import { useSearchParams } from "react-router-dom";

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        value={name}
        onChange={e => setSearchParams({ name: e.target.value })}
      />
    </div>
  );
};
```

Tüm ürün sayfası örneğinin tam kodunu [buradan](https://codesandbox.io/s/goit-textbook-lesson-10-query-string-3msb5f?from-embed=&file=/src/pages/Products.jsx) analiz edebilirsiniz. Bu örnekte, sorgu dizesinin değiştirilmesi ve listenin filtrelenmesi işlemleri gerçekleştirilmiştir. Giriş alanının değeri boş bir dize olduğunda `name` parametresinin nasıl silindiğine dikkat ediniz.