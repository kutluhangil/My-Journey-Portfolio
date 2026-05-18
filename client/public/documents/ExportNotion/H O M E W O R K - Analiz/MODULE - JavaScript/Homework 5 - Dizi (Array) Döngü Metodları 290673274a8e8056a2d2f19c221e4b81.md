# Homework 5 - Dizi (Array) Döngü Metodları

Zaman çok hızlı geçiyor, değil mi?

Modül 5 neredeyse bitti 💪

Bu modülün materyallerini inceledikten sonra

- Doğrusal fonksiyonlar ve ok fonksiyonları prensibini anlayacak
- bu fonksiyonların pratikte nasıl uygulanacağını bilecek
- bir dizi nesne ile nasıl çalışılacağını bilecek
- gibi dizi yöntemlerini bilecek: `forEach`, `map`, `flatMap`, `filter`, `find` ve `every`, `some`, `reduce`, `toSorted`
- sayılar ve dizeler için sıralama düzeninizi nasıl özelleştireceğinizi bilecek
- zincirlerde dizi yöntemlerinin nasıl kullanılacağını bileceksiniz

Ve şimdi uygulamaya geçelim!

Öğrendiğiniz dizi yöntemlerini kullanmanız gereken 4 görev sizi bekliyor!

# **Ödev №5**

- `goit-js-hw-05` deposunu oluşturun ve bilgisayarınıza indirin.
- `goit-js-hw-05` klasöründe, aşağıdaki şemada gösterildiği gibi bir proje yapısı oluşturun.

```
Dikkat!
Dosya ve klasörlerin isimleri ve iç içe geçmiş yapıları yukarıdaki şemaya uygun olmalıdır. Aksi takdirde, çalışma kabul edilmeyecektir.

```

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/bef125be-53e4-45cf-8306-ebcb4cd09e98Frame%2048672%20%282%29.jpg)

- Her görevi okuyun ve ilgili dosyada çalıştırın.
- Kodun `Prettier` ile biçimlendirildiğinden ve canlı atama sayfasını açtığınızda konsolda herhangi bir hata veya uyarı olmadığından emin olun
- Not vermek için ödevinizi teslim edin

**Gönderme biçimi:** Ödev iki bağlantı içerir: kaynak dosyalara ve `GitHub Pages`üzerindeki çalışma sayfasına.

# **Görev 1: Kullanıcı adları**

```
Bu görevitask-1.js dosyasında çalıştırın.

```

Bir kullanıcı nesnesi dizisi olan `users` parametresini alan bir `getUserNames(users)` ok fonksiyonu yazın. Fonksiyon, `users` dizisinden tüm kullanıcıların adlarını (`name`özelliği) içeren bir dizi döndürmelidir.

Aşağıdaki kodu alın ve çalışmasının doğruluğunu kontrol etmek için fonksiyonunuzun bildiriminden sonra yapıştırın. Konsol, çağrılarının sonuçlarını görüntüleyecektir.

```
console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
```

Bu kodu mentorun kontrol etmesi için bırakın.

# **Mentorun kontrol ederken dikkat edecekleri:**

- `getUserNames` değişkeni tanımlanır.
- `getUserNames` değişkenine `(users)` parametresi ile bir ok fonksiyonu atanmıştır.
- `users` parametresi üzerinde yineleme yapmak için `map()` metodunu kullanın
- Belirtilen kullanıcı dizisiyle bir işlev çağrıldığında `["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]` dizisi döndürülür.
- Bir işlevi rastgele ancak geçerli bağımsız değişkenlerle çağırmak doğru değeri döndürür

# **Çözüm**

`const getUserNames = (users) => {
  return users.map((user) => user.name);
};`

# **Görev 2. Arkadaşı olan kullanıcılar**

```
Bu görevitask-2.js dosyasında çalıştırın.

```

İki parametre alan bir `getUsersWithFriend(users, friendName)` ok fonksiyonu yazın:

- ilk parametre `users` - kullanıcı nesnelerinden oluşan bir dizi
- ikinci parametre `friendName` - aranacak arkadaşın adı.

Fonksiyon, `friendName` adında bir arkadaşı olan `users` dizisindeki tüm kullanıcıların bir dizisini döndürmelidir. Her kullanıcının arkadaşları `friends` özelliğinde saklanır. Böyle bir arkadaşı olan kullanıcı yoksa, fonksiyon boş bir dizi döndürmelidir.

İpuçları:

- `filter()` metodu, belirli bir koşulu sağlayan öğelerle yeni bir dizi oluşturmak için kullanılabilir.
- `friends` dizisinin `friendName` içerip içermediğini kontrol etmek için `includes()` yöntemini kullanın.

Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun tanımladıktan sonra yapıştırın. Konsol, çalışmanın sonuçlarını gösterecektir.

```
const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// [//   {//     name: "Sharlene Bush",//     friends: ["Briana Decker", "Sharron Pace"]//   },//   {//     name: "Sheree Anthony",//     friends: ["Goldie Gentry", "Briana Decker"]//   }// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [//   {//     name: "Elma Head",//     friends: ["Goldie Gentry", "Aisha Tran"]//   },//   {//     name: "Sheree Anthony",//     friends: ["Goldie Gentry", "Briana Decker"]//   }// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" ));// []
```

Bu kodu mentorun kontrol etmesi için bırakın.

# **Mentorun kontrol ederken dikkat edecekleri:**

- `getUsersWithFriend` değişkeni tanımlanmıştır.
- `getUsersWithFriend` değişkenine `(users, friendName)` parametreli bir ok fonksiyonu atanmıştır.
- `users` parametresi üzerinde yineleme yapmak için `filter()` yöntemini kullanın
- `friendName` parametresinin değeri `"Briana Decker"` dizesi ise, fonksiyon `Sharlene Bush` ve `Sheree Anthony` adlı kullanıcı nesnelerinden oluşan bir dizi döndürür.
- Eğer `friendName` parametresinin değeri `Goldie Gentry` dizesi ise, fonksiyon `Elma Head` ve `Sheree Anthony` adlı kullanıcı nesnelerinden oluşan bir dizi döndürür.
- Eğer `friendName` parametresinin değeri `Adrian Cross` dizesi ise, fonksiyon boş bir dizi döndürür
- Bir fonksiyonu rastgele ancak geçerli bağımsız değişkenlerle çağırmak doğru değeri döndürür

# **Çözüm**

`const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};`

# **Görev 3. Arkadaş sayısına göre sırala**

```
Bu görevitask-3.js dosyasında çalıştırın.

```

Kullanıcı nesnelerinden oluşan bir dizi olan `users` parametresini alan `sortByDescendingFriendCount(users)` isimli bir ok fonksiyonu yazın.

Fonksiyon, azalan arkadaş sayılarına göre sıralanmış tüm kullanıcıların bir dizisini döndürmelidir (`friends` özelliği).

Aşağıdaki kodu alın ve çalışmasının doğruluğunu kontrol etmek için fonksiyonunuzun tanımlamadan sonra yapıştırın. Konsol, çalışmanın sonuçlarını gösterecektir.

```
console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]
```

Bu kodu mentorun kontrol etmesi için bırakın.

# **Mentorun kontrol ederken bakacakları:**

- `sortByDescendingFriendCount` değişkeni bildirilmiştir.
- `(users)` değişkenine `sortByDescendingFriendCount` parametresiyle bir ok fonksiyonu atanır.
- `users` parametresini sıralamak için `toSorted()` metodu kullanılır
- Belirtilen `users` dizisi ile bir işlev çağrıldığında, arkadaşlarının sayısına göre azalan sırada sıralanmış yeni bir kullanıcı dizisi döndürülür
- Bir işlevi rastgele ancak geçerli bağımsız değişkenlerle çağırmak doğru değeri döndürür

# **Çözüm**

`const sortByDescendingFriendCount = (users) => {
  return users.toSorted((a, b) => b.friends.length - a.friends.length);
};`

# **Görev 4. Toplam bakiye**

İki parametre alan bir `getTotalBalanceByGender(users, gender)` ok fonksiyonu yazın:

- ilk parametre `users` - kullanıcı nesnelerinden oluşan bir dizi,
- ikinci parametre `gender` - cinsiyeti saklayan bir dize.

Fonksiyon bir metot çağrı zinciri kullanmalı ve cinsiyeti (özellik `gender`) `gender`parametresinin değeriyle eşleşen kullanıcıların toplam bakiyesini (özellik `balance`) döndürmelidir.

Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun tanımlanmasından sonra yapıştırın. Çalışmasının sonuçları konsolda görüntülenecektir.

```
const allUsers = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsers, "male"));// 12053

console.log(getTotalBalanceByGender(allUsers, "female"));// 8863
```

Bu kodu mentorun kontrol etmesi için bırakın.

# **Mentorun kontrol ederken dikkat edecekleri:**

- `getTotalBalanceByGender` değişkeni tanımlanmıştır.
- `getTotalBalanceByGender` değişkenine `(users, gender)` parametreli bir ok fonksiyonu atanmıştır.
- İşlevin gövdesi doğru sırada bir yöntemler zinciri kullanır
- Kullanıcılar parametresinin değeri değişmez
- Eğer `gender` parametresinin değeri `"male"` dizesi ise, fonksiyon `12053` sayısını döndürür.
- Eğer `gender` parametresinin değeri `female` dizesi ise, fonksiyon `8863` sayısını döndürür.
- Rastgele ancak geçerli bağımsız değişkenlere sahip bir işlevin çağrılması doğru değeri döndürür

# **Çözüm**

```
const getTotalBalanceByGender = (users, gender) => {
  return users.reduce((total, user) => {
    return user.gender === gender ? total + user.balance : total;
  }, 0);
};
```

---

## **Görev 1 — getUserNames(users)**

**Amaç:** Kullanıcı nesnelerinden yalnızca adları (name) çıkarıp dizi olarak döndürmek.

**Neden map()?**

map bir diziyi **aynı uzunlukta** başka bir diziye dönüştürür. Her kullanıcı → user.name.

**Adımlar:**

1. users.map(user => user.name)
2. Yeni dizi: ["Moore Hensley", ...]
3. Orijinal users değişmez (immutability korunur).

**Kritik noktalar:**

- map **filtrelemez**, sadece dönüştürür.
- Her elemanda name alanı olduğundan undefined riski yok.

---

## **Görev 2 — getUsersWithFriend(users, friendName)**

**Amaç:** Arkadaş listesinde (friends) belirli bir isim olan kullanıcıları döndürmek.

**Neden filter() + includes()?**

- filter koşulu sağlayan elemanları **seçer**.
- includes bir dizide **değer var mı** kontrol eder (true/false).

**Adımlar:**

1. users.filter(user => user.friends.includes(friendName))
2. Eşleşmeyenler otomatik elenir; yoksa [] döner.

**Kritik noktalar:**

- Büyük/küçük harf duyarlıdır: "briana" ≠ "Briana".
- friends bir **dizi** olduğu için includes uygundur.

---

## **Görev 3 — sortByDescendingFriendCount(users)**

**Amaç:** Kullanıcıları **arkadaş sayısına** göre **azalan** sıralamak.

**Neden toSorted()?**

- toSorted **orijinal diziyi bozmaz**; sıralanmış **kopya** döndürür (immutability).
- sort() kullansaydık orijinali mutasyona uğrardı.

**Karşılaştırma mantığı:**

```
(a, b) => b.friends.length - a.friends.length
```

- Sonuç **pozitifse** b önce gelir ⇒ **azalan** sıra.

**Kritik noktalar:**

- friends her kullanıcıda dizi; length güvenle ölçülebilir.
- Eşit sayıda arkadaşta göreli sıralama önemsiz.

---

## **Görev 4 — getTotalBalanceByGender(users, gender)**

**Amaç:** Belirtilen cinsiyetteki kullanıcıların toplam bakiyesini hesaplamak.

**Neden method chaining (filter → map → reduce)?**

- **Okunabilir**: Her adım tek işi yapar.
- **İmmutable**: Ara sonuçlar hep yeni değerler.

**Zincir:**

1. filter(user => user.gender === gender)
    
    → İstenilen cinsiyet.
    
2. map(user => user.balance)
    
    → Sadece bakiyeler.
    
3. reduce((total, balance) => total + balance, 0)
    
    → Toplam.
    

**Alternatif (tek adım):** reduce ile doğrudan koşullu toplama (senin ikinci çözümün). İkisi de doğru; ödev zincir istiyor.

**Kritik noktalar:**

- **Başlangıç değeri 0** verilmezse reduce yanlış çalışabilir.
- gender dizge karşılaştırması (case-sensitive).

---

## **Ortak İpuçları & Pitfall’lar**

- **İmmutability:** Bu modülde hep öncelik (özellikle toSorted).
- **map vs filter:**
    - map ⇒ dönüştür, eleman sayısı aynı.
    - filter ⇒ ele, eleman sayısı azalabilir.
- **includes:** Dizilerde değer aramak için basit ve hızlı.
- **Comparator’lar:** Sayısal sıralamada a - b / b - a; metinde localeCompare.
- **Method chaining:** Okunabilirlik ve test edilebilirlik artar.

---

## **Kısa Özet (tek satırlıklar)**

- **G1:** users.map(u => u.name) → ad listesi.
- **G2:** users.filter(u => u.friends.includes(name)) → şu arkadaşı olanlar.
- **G3:** users.toSorted((a,b)=>b.friends.length-a.friends.length) → çoktan aza.
- **G4:** users.filter(…gender).map(…balance).reduce(…sum,0) → cinsiyete göre toplam bakiye.

İstiyorsan bunları README’ye “Açıklama” bölümü olarak da paketleyebilirim.