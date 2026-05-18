# this belirleme algoritması

`this` anahtar sözcüğü, JavaScript'te yeni başlayanlar için en kafa karıştırıcı kavramlardan biridir.

Çoğu zaman geliştiriciler, `this` ifadesi kodda doğru şekilde çalışana kadar **deneme-yanılma** yöntemiyle ilerler.

Oysa ki, `this` değerinin nasıl belirlendiğini açıklayan **basit bir algoritma** her şeyi çok daha anlaşılır hale getirir.

**Adım 1**

**Bu bir ok fonksiyonu mu?**

- **Evet** → `this` değeri, **dış kapsamdaki `this`** ile aynıdır.
- **Hayır** → Adım 2'ye geç.

**Adım 2**

**`call`, `apply` veya `bind` yöntemlerinden biri kullanılıyor mu?**

- **Evet** → `this` değeri, **çağrılırken geçirilen nesneyle** aynıdır.
- **Hayır** → Adım 3'e geç.

**Adım 3**

**İşlev bir nesne yöntemi olarak mı çağrılıyor?**

**(Yani** `object.method()` şeklinde mi?)

- **Evet** → `this` değeri, **noktanın solundaki nesnedir**.
- **Hayır** → Adım 4'e geç.

**Adım 4**

**Kod strict modda mı çalıştırılıyor?**

- **Evet** → `this` değeri `undefined` olur.
- **Hayır** → `this` değeri `window` (veya tarayıcı dışı ortamlarda global nesne) olur.

Bu diyagramı **`this`** değerini belirleme algoritmasını hızlıca hatırlamak için kaydedin

![Screen Shot 2025-12-24 at 23.42.41 PM.png](this%20belirleme%20algoritmas%C4%B1/Screen_Shot_2025-12-24_at_23.42.41_PM.png)