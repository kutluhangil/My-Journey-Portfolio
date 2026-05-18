# Parametre yapılandırması

Bir diziyi bir fonksiyona aktarırken, elemanlarını yeniden yapılandırabilirsiniz.

**Yeniden yapılandırma olmadan:**

```
function printFruits(fruits) {
  console.log(fruits[0], fruits[1], fruits[2]);
}

printFruits(["apple", "banana", "orange"]); // "apple banana orange"
```

Parametre tanımlama sırasında yeniden yapılandırma ile:

```
function printFruits([firstFruit, secondFruit, thirdFruit]) {
  console.log(firstFruit, secondFruit, thirdFruit);
}

printFruits(["apple", "banana", "orange"]); // "apple banana orange"
```

# **Yeniden yapılandırmanın faydaları**

Yeniden yapılandırmanın faydalarını özetleyelim:

- **Nesnelerden ve dizilerden uygun şekilde değer çıkarma:** Bir nesnenin alanlarına veya bir dizinin öğelerine her seferinde adları ya da indeksleriyle başvurmak yerine, gerekli değerleri doğrudan değişkenlere atayabilirsiniz.
- **Kısa ve okunabilir kod:** Yeniden yapılandırma, kodu daha kısa ve anlaşılır hâle getirir. Nesne alanlarına veya dizi öğelerine erişmek için uzun ifadeler yazmak yerine, anlamlı adlarla değişkenler tanımlayarak doğrudan kullanabilirsiniz.
- **Fonksiyon parametreleri:** Nesneleri fonksiyonlara aktarırken, yalnızca ihtiyaç duyduğunuz alanları yeniden yapılandırma ile ayırabilirsiniz. Bu da fonksiyon içinde hangi alanların kullanılacağını açıkça belirtmenizi sağlar.
- **Nesne döndüren işlevlerle çalışma:** Bir fonksiyon bir nesne döndürdüğünde, bu nesneyi doğrudan yapılandırarak içindeki değerleri kolayca ayıklayabilirsiniz.