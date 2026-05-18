# Klavye Olayları

Klavye olaylarının iki temel türü vardır:

- `keydown` – Tuşa **basıldığında** gerçekleşen olay
- `keyup` – Tuş **bırakıldığında** gerçekleşen olay

Diğer birçok olayın aksine, klavye olayları genellikle **belirli bir öğe** üzerinde değil, doğrudan **doküman** üzerinde işlenir.

Klavye olayı nesneleri, temel `KeyboardEvent` sınıfından türetilir.

```
document.addEventListener("keydown", event => {
  console.log("Keydown: ", event);
});

document.addEventListener("keyup", event => {
  console.log("Keyup: ", event);
});
```

`keydown` ve `keyup` olayları, **herhangi bir tuşa basıldığında** tetiklenir ve **Ctrl**, **Shift**, **Alt**, **Escape** gibi kontrol tuşları da dahil olmak üzere **tüm tuşları kapsar.**

Pratikte, genellikle yalnızca `keydown` olayı ele alınır; çünkü bu olay `keyup`'dan daha **hızlı gerçekleşir** ve kullanıcı, tuşa basmanın sonucunu **daha erken** görür.