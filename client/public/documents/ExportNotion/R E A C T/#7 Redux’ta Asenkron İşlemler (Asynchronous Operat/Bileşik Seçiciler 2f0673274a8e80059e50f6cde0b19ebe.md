# Bileşik Seçiciler

En basit haliyle, bir seçici mevcut durumu alır ve gereken kısmını döndürür. Seçiciler sıradan fonksiyonlardır, bu nedenle değer döndürmenin dışında işlemler yapabilirler. Bir seçici, durum parçalarını kullanarak hesaplamalar yapabilir ve hesaplanan sonucu döndürebilir.

```
const selectTotalValue = state => {
  const a = state.values.a;
  const b = state.values.b;
  return a + b;
};
```