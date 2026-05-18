# Derin yeniden yapılandırma

Çoğu zaman, veriler birden fazla iç içe geçme seviyesine sahip nesneler tarafından temsil edilecektir.

Örneğin, bir sosyal medya kullanıcısını tanımlayan bir nesne aşağıdaki gibi görünebilir.

```
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
```

Aynı prensipler iç içe geçmiş nesnelerin özelliklerini yıkmak için de kullanılır. İlk olarak, kullanıcı nesnesinin özelliklerini yapılandırmak için kodu yazalım.

```
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, stats } = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }
```

Şimdi de `stats` nesnesinin özelliklerine derinlemesine bir yeniden yapılandırma ekleyelim.

Bunu yapmak için, yeniden yapılandırmada, özellik adından sonra iki nokta üst üste koyun `:` ve nesneyi bu özellik için yeniden yapılandırmaya başlayın.

```
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views, likes },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(views); // 4827
console.log(likes); // 1308
```

Derin yeniden yapılandırma sırasında, zaten bildiğiniz sözdizimini kullanarak değişken adlarını değiştirebilir ve varsayılan değerler atayabilirsiniz.

```
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308
```