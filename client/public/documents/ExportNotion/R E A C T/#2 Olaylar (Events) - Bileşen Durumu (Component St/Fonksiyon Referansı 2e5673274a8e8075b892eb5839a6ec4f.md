# Fonksiyon Referansı

React'te olay işleyicilerine fonksiyonlar **referans olarak** geçilmelidir ancak **çağrılmamalıdır**. Örneğin:

```
// ✅ Fonksiyon geçişi (doğru)
<button onClick={handleClick}>

// ❌ Fonksiyon çağrısı (yanlış)
<button onClick={handleClick()}>
```

Bu iki kullanım arasındaki fark şudur:

- İlk örnekte, `handleClick` fonksiyonu `onClick` olay işleyicisine bir referans olarak aktarılmaktadır. Bu, React'e bu fonksiyonu yalnızca kullanıcı butona tıkladığında çalıştırmasını söyler.
- İkinci örnekte ise `handleClick()` fonksiyonu parantez ile çağrılmaktadır; bu da buton tıklanmasa bile bileşen render edildiği anda fonksiyonun çalışmasına neden olur.

Aynı kural, satır içi fonksiyonlar için de geçerlidir. Aşağıdaki örnekteki gibi bir kullanım, `alert` fonksiyonunun buton tıklanması yerine bileşen render edildiğinde çalışmasına neden olur:

`<button onClick={alert('You clicked me!')}>`

Eğer olay işleyicinizi yerinde tanımlamak istiyorsanız, onu anonim bir fonksiyon içine sarın:

`<button onClick={() => alert('You clicked me!')}>`

Bu yöntem, render sırasında kodu çalıştırmaz; yalnızca butona tıklanması durumunda ilgili işlevi çağırır.