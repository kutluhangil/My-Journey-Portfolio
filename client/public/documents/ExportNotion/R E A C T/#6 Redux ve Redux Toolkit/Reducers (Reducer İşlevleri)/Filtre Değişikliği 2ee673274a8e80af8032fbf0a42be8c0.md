# Filtre Değişikliği

Filtre değiştirildiğinde yeni filtre değeri `payload` altından erişebiliriz. Gönderilen eylemin türünün `"filters/setStatusFilter"` olup olmadığını kontrol edip, yeni durum nesnesini döndüreceğiz.

```
// src/redux/store.js

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Önceki kod case "tasks/addTask"

   // Önceki kod case "tasks/deleteTask"

   // Önceki kod case "tasks/toggleCompleted"

    case "filters/setStatusFilter":
      return {
        ...state,
        filters: {
          status: action.payload,
        },
      };

    default:
      return state;
  }
};
```

Dört farklı eylemi işleme kodunu ekledik ve ana reducer kodu gittikçe karmaşıklaşıyor. Tüm eylemleri tek bir reducer'da işlemek, kodun anlaşılmasını zorlaştırabilir. Bu nedenle reducer'lar, kodun daha anlaşılır ve sürdürülebilir olması için genellikle daha küçük birimlere ayrılır. Bunu daha sonra ele alacağız.