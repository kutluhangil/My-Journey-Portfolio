# Fonksiyonların Temelleri

# **Tanımlanması ve çağrılması**

Fonksiyon, farklı başlangıç değerleriyle belirli bir görevi yerine getiren, bağımsız bir kod bloğudur.

Bir fonksiyon, girdiyi alır, içindeki kodu çalıştırır ve ardından sonucu döndürür. Bu yönüyle, bir tür **siyah kutu** gibi düşünülebilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/8832b23e-101d-4469-84b6-14b56e3e28d7m01-b05-s01.jpg)

# **Fonksiyon Tanımlama**

Fonksiyon tanımlama şu yapıya sahiptir:

- **Anahtar kelime:** `function`
- **Fonksiyon adı:** Genellikle "Ne yapılmalı?" sorusuna cevap veren bir fiil olmalıdır.
- **Parantez:** Açılıp kapanan yuvarlak parantez çifti `()`
- **Fonksiyon gövdesi:** Süslü parantezler `{}` içinde tanımlanır.

`function doStuff() {
  *// Fonksiyonun gövdesi*console.log('Log inside multiply function');
}`

Fonksiyonun gövdesi `{}` süslü parantezler içinde yer alır ve çağrıldığında gerçekleştirilmesi gereken talimatları içerir.

Bu talimatlar; operatörler, koşullu yapılar, döngüler ve diğer fonksiyonlar gibi ifadeleri içerebilir.

# **Fonksiyon Çağrısı**

Bir fonksiyonu çalıştırmak için, adı ve bir çift yuvarlak parantez `()` kullanılarak çağrılır.

`*// multiply fonksiyonunu duyurma*
function doStuff() {
  *// Fonksiyonun gövdesi*
  console.log('Log inside multiply function');
}

*// multiply fonksiyonunu duyurma*doStuff(); *// 'Log inside multiply function'*doStuff(); *// 'Log inside multiply function'*doStuff(); *// 'Log inside multiply function'*`

# **Görev**

`sayHi` adında bir fonksiyon tanımlayın. Fonksiyonun gövdesine `"Hello, this is my first function!"` mesajını yazdıran bir `console.log()` satırı ekleyin.

Fonksiyonu tanımladıktan sonra, `sayHi` fonksiyonunu çağırın.

# **Testler**

- Bir fonksiyon duyurulması bekleniyor.
- Fonksiyona `sayHi` adı verildi.
- Vücutta, `sayHi` fonksiyonunda `console.log("Hello, this is my first function!")` bulunmaktadır.
- Duyurudan sonra `sayHi` fonksiyonu çağrıldı.

İstenen şey:

1. sayHi adında bir fonksiyon tanımla.
2. İçinde şu çıktıyı ver:

```
console.log("Hello, this is my first function!");
```

1. 
2. Fonksiyonu çağır (çalıştır).

---

✅ Çözüm:

```
function sayHi() {
  console.log("Hello, this is my first function!");
}

sayHi();
```

---

🔎 Açıklama:

- function sayHi() { ... } → sayHi adında bir fonksiyon tanımlar.
- { console.log(...) } → fonksiyonun yapacağı işi belirler.
- sayHi(); → fonksiyonu çalıştırır ve ekrana yazdırır.

---

👉 Bu kodu çalıştırırsan konsolda şu çıkar:

```
Hello, this is my first function!
```

[**Parametreler ve argümanlar**](Fonksiyonlar%C4%B1n%20Temelleri/Parametreler%20ve%20arg%C3%BCmanlar%20266673274a8e809f8422f4dacc32ec24.md)

[**Dönüş Değeri**](Fonksiyonlar%C4%B1n%20Temelleri/D%C3%B6n%C3%BC%C5%9F%20De%C4%9Feri%20266673274a8e80df9688e4cb2ff53946.md)

[**Kodun çalışma sırası**](Fonksiyonlar%C4%B1n%20Temelleri/Kodun%20%C3%A7al%C4%B1%C5%9Fma%20s%C4%B1ras%C4%B1%20266673274a8e8062b6d8ea0ed56c0587.md)

[**Fonksiyonun Görünürlük Alanı - (Fonksiyonun Scope’u)**](Fonksiyonlar%C4%B1n%20Temelleri/Fonksiyonun%20G%C3%B6r%C3%BCn%C3%BCrl%C3%BCk%20Alan%C4%B1%20-%20(Fonksiyonun%20Scope%E2%80%99%20266673274a8e8040b5d0efb9b7fd3434.md)