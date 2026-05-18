# Eylemler (actions)

**Eylemler** — bileşenlerden verileri store'a ileten nesnelerdir; böylece uygulamada hangi olayın gerçekleştiğini store'a bildirirler. Eylemler, store'un veri alması için tek bilgi kaynağıdır.

```
const reduxAction = {
  type: "Action type",
  payload: "Payload value",
};
```

Eylemlerin `type` özelliği zorunludur ve gerçekleşen olayın türünü tanımlayan bir dizedir. `type` dışında, nesnenin yapısı serbesttir, ancak veriler genellikle isteğe bağlı `payload` özelliğinde taşınır. Eylemlerin `payload` kısmında herhangi bir veri türü olabilir; fonksiyonlar ve sınıflar dışında her değer kabul edilir.

Görev ekleme, silme ve durum değiştirme ile filtre değerini güncelleme gibi eylemler tasarlayalım.

```
const addTask = {
  type: "tasks/addTask",
  payload: {
    id: "Unique id",
    text: "User entered text",
    completed: false,
  },
};

const deleteTask = {
  type: "tasks/deleteTask",
  payload: "Task id",
};

const toggleCompleted = {
  type: "tasks/toggleCompleted",
  payload: "Task id",
};

const setStatusFilter = {
  type: "filters/setStatusFilter",
  payload: "Filter value",
};
```

En iyi uygulamalar:

- **İsimlendirme**: `type` alanında `domain/eventName` formatı önerilir. İlk bölüm, eylemin ait olduğu kategori (`tasks` veya `filters`) olup, ikinci bölüm ise eylemi tanımlayan olay ismidir (`addTask`, `deleteTask`, `toggleCompleted`, `setStatusFilter`).
- **Minimalizm**: Eylemler yalnızca durumu değiştirmek için gerekli en az bilgiyi içermelidir. Örneğin, bir görevi silmek için sadece kimlik bilgisi yeterlidir; tüm nesne iletilmemelidir.

[**Eylem Fabrikaları (Action Creators)**](Eylemler%20(actions)/Eylem%20Fabrikalar%C4%B1%20(Action%20Creators)%202ed673274a8e80adba25f39d910bee90.md)

[**Eylem Gönderimi (dispatch)**](Eylemler%20(actions)/Eylem%20G%C3%B6nderimi%20(dispatch)%202ee673274a8e804eaae9f8abaa8ec2ad.md)

[**Görev Oluşturma**](Eylemler%20(actions)/G%C3%B6rev%20Olu%C5%9Fturma%202ee673274a8e80c78fcee1c584f48827.md)

[**Görev Silme**](Eylemler%20(actions)/G%C3%B6rev%20Silme%202ee673274a8e80649ab4c171d161da7b.md)

[**Durum Değiştirme**](Eylemler%20(actions)/Durum%20De%C4%9Fi%C5%9Ftirme%202ee673274a8e806ab4d2c0fc4ede92f0.md)

[**Filtre Değişikliği**](Eylemler%20(actions)/Filtre%20De%C4%9Fi%C5%9Fikli%C4%9Fi%202ee673274a8e80188748e5d9aaca419c.md)

[**Görev Planlayıcı**](Eylemler%20(actions)/G%C3%B6rev%20Planlay%C4%B1c%C4%B1%202ee673274a8e80b39c98e24041963468.md)