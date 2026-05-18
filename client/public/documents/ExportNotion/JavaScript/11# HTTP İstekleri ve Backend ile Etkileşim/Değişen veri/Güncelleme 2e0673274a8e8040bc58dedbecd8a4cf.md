# Güncelleme

Mevcut verileri güncellemek için `PUT` veya `PATCH` yöntemleri kullanılır.

HTTP standardına göre:

- `PATCH` yöntemi, istek gövdesinde geçirilen değerleri mevcut kaynakta değiştirir. Kaynağın geçilmeyen değerleri değişmeden kalacaktır;
- `PUT` yöntemi kaynağı tamamen değiştirir. Geçilmeyen kaynak değerleri kaynaktan kaldırılır.

Hangi yöntemin kullanılacağı arka uç dokümantasyonunda yazılacaktır.

`fetch()` yöntemi sunucuya bir istek göndermelidir, bu isteğin gövdesinde değiştirilecek alanlara sahip bir nesne belirtmelisiniz. Yol, hangi koleksiyonda ve hangi öğeyi güncellemek istediğinizi gösterir. İsteği aldıktan sonra, arka uç bunu işleyecek ve yanıtta güncellenmiş kaynağı döndürecektir.

```
// Change value of id property to update different post
const postToUpdate = {
  id: 1,
  body: "CRUD is really awesome!",
};

const options = {
  method: "PATCH",
  body: JSON.stringify(postToUpdate),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(post => console.log(post))
  .catch(error => console.log("ERROR:", error));
```

Yanıt olarak, her şey yolunda giderse, güncellenmiş bir nesne alacağız.

```
{
  id: 1,
  title: "CRUD",
  body: "CRUD is really awesome!",
}
```