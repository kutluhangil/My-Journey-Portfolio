# Küresel İsim Alanı

Bir bileşenin stil dosyasını doğrudan o bileşeni tanımlayan dosya içerisinde içe aktarmak, genel olarak iyi bir uygulamadır. Örneğin, `App` bileşeninde `Alert.css`dosyasını içe aktarmak, mevcut projeyi olumsuz etkilemez. Ancak içe aktarılan tüm CSS kodları, proje genelinde kullanılan diğer bileşenlerin CSS kodlarıyla birleşerek tek bir global stil dosyasına eklenir.

Örnek kodda, `.text` sınıf seçicisi ile CSS kuralları arasında bir çakışma sorunu ortaya çıkacaktır. Bu iki CSS dosyasının uygulamaya içe aktarım sırasına bağlı olarak, `text`sınıfının son stil düzenlemeleri farklı görünebilir.

```
/* FirstComponent.css */
.text {
  color: red;
  font-size: 24px;
}

/* SecondComponent.css */
.text {
  color: blue;
}
```

```
Farklı bileşenlerde aynı sınıf seçicileri kullanmak, CSS kurallarının çakışmasına neden olabilir. Bu tür sorunları önlemek için, sınıf seçicilerinin adlarının uygulama genelinde benzersiz olması gereklidir. Bu, vanilla CSS kullanmanın temel dezavantajlarından biridir.

```

Vanilla CSS, özellikle büyük ölçekli projelerde çeşitli sınırlamalara sahiptir ve bazı dezavantajlar doğurur:

- Zayıf ölçeklenebilirlik
- Sınıf stillerinin tekrar kullanımında kısıtlamalar
- Dinamik değerler için gömülü stiller kullanılması gerekliliği
- Küresel isim alanı sorunu
- Sınıf seçicileri için bir adlandırma standartlarına ihtiyaç duyulması