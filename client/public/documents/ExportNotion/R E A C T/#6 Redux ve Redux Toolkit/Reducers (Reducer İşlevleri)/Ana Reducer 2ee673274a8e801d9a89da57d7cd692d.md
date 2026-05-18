# Ana Reducer

`src/redux/store.js` dosyasında store oluşturulurken `reducer` özelliğine ilettiğimiz mevcut `rootReducer` kodunu tamamlayalım. Bu reducer, gönderilen tüm eylemleri işlemekten ve yeni durumu hesaplamaktan sorumlu olacaktır.

```
// src/redux/store.js

const initialState = {
  tasks: {
    items: [
      { id: 0, text: 'Learn HTML and CSS', completed: true },
      { id: 1, text: 'Get good at JavaScript', completed: true },
      { id: 2, text: 'Master React', completed: false },
      { id: 3, text: 'Discover Redux', completed: false },
      { id: 4, text: 'Build amazing apps', completed: false },
    ],
  },
  filters: {
    status: 'all',
  },
};

// default değer olarak initialState'i kullandık
const rootReducer = (state = initialState, action) => {
  // Reducer, eylemleri type özelliğinin değerine göre ayırır
  switch (action.type) {
    // Eylem türüne bağlı olarak farklı bir mantık uygulanacaktır

   // Her reducer, store'a gönderilen tüm eylemleri alır.
   // Eğer bir reducer, belirli bir eylem türünü işlemek istemiyorsa,
   // mevcut durumu değişmeden döndürmek gerekir.
    default:
      return state;
  }
};
```

Store başlatıldığında (Redux DevTools'daki `@@INIT` eylemi), reducer'lara durum belirtmek için `undefined` değeri geçilir. Bu nedenle, her reducer için başlangıç durumu olan varsayılan bir değer sağlamak gereklidir.

Görev ekleme eyleminin işleme mantığını ekleyelim. Gönderilen eylemin türünün `"tasks/addTask"` olup olmadığını kontrol edeceğiz ve değişmeyen özellikler için tüm durumu içeren yeni bir nesne döndüreceğiz.

```
// src/redux/store.js

const rootReducer = (state = initialState, action) => {
  // Reducer, eylemleri type özelliğinin değerine göre ayırır
     switch (action.type) {
 // Eylem türüne bağlı olarak farklı bir mantık uygulanacaktır
     case "tasks/addTask": {
      // Mevcut durumun bir nesne kopyasını döndürmek gerekir
      // mevcut durumdaki tüm verileri içeren
      return {
        ...state,
        tasks: {
					// mevcut görevlerin bulunduğu yeni bir görev dizisi
          // ve yeni görev nesnesi
	        items: [...state.tasks.items, action.payload]
        }
      };
    }

    default:
      return state;
  }
};
```

```
Durum güncelleme mantığını manuel olarak yazmak zor olabilir, bu yüzden reducer'larda rastgele durum değiştirilmesi yaygın bir hatadır. Bir sonraki derste, bu süreci nasıl basitleştireceğinizi göreceksiniz.

```

Eğer şimdi bir form aracılığıyla yeni bir görev eklemeyi denerseniz, görevler listesinde yeni bir eleman görünecektir. Bunun nedeni, `useSelector` hook'u, bileşenlerin abone oldukları durum kısmı değiştiğinde her seferinde güncellemelerini sağlar.