# Eylem Fabrikaları (Action Creators)

Eylemler statik nesnelerdir; bu nedenle `payload` değerini dinamik olarak belirlemek mümkün değildir. Kullanıcı etkileşimi ile belirlenen verileri (örneğin, yeni görev metni veya silinecek görev kimliği) eylemlere eklemek için **eylem fabrikaları** (action creators) kullanırız. Bu fonksiyonlar, farklı `payload` değerlerine sahip eylemler oluşturur ve döndürür. Uygulamamız için eylem fabrikalarını `actions.js` dosyasında tanımlayalım.

```
// src/redux/actions.js

export const addTask = newTask => {
  return {
    type: "tasks/addTask",
    payload: newTask
  };
};

export const deleteTask = taskId => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: "tasks/toggleCompleted",
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};
```

Eylem fabrikalarının oluşturulması rutin bir işlemdir ve genellikle çok fazla şablon kodu içerir. Bu süreci kolaylaştırmak için Redux Toolkit kütüphanesi, [`createAction(type)`](https://redux-toolkit.js.org/api/createAction) yardımcı fonksiyonunu sunar. Bu fonksiyon, `type` değeri ile bir eylem oluşturma fonksiyonu (fabrika) döndürür.

```
// src/redux/actions.js

// 1. createAction fonksiyonunu içe aktar
import { createAction } from "@reduxjs/toolkit";

// 2. Eylem fabrikalarını oluştur
export const addTask = createAction("tasks/addTask");

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter");
```

Herhangi bir eylem fabrikası çağrıldığında, sonucu `type` ve `payload` özelliklerine sahip bir nesne (eylem) olacaktır.

```
// src/redux/actions.js

import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask");

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter");

console.log(toggleCompleted(1));
// { type: "tasks/toggleCompleted", payload: 1 }

console.log(setStatusFilter("hello"));
// { type: "filters/setStatusFilter", payload: "hello" }
```

- `type` özelliğinin değeri, fabrika tanımlanırken geçirilen bir dizedir.
- `payload` özelliğinin değeri, fabrika çağrıldığında geçirilen argümanın değeridir.

Bir sonraki adım, bileşenlerden eylemleri kullanıcı etkileşimleri yoluyla tetiklemektir.

# **Görev Planlayıcı**

Uygulamamızın canlı örneğini inceleyin. Şu anda uygulamada, geliştirici araçları ile store'un başlatılması, bileşenlerin store'a abone olması ve eylem fabrikalarının tanımlanması gerçekleştirilmiştir.

[https://stackblitz.com/edit/vitejs-vite-ds6jvtnt?file=src%2Fredux%2Factions.js&memory-freed=1](https://stackblitz.com/edit/vitejs-vite-ds6jvtnt?file=src%2Fredux%2Factions.js&memory-freed=1)