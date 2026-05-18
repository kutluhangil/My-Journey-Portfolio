# Optimizasyon

Basit seçiciler durumlardan bir parçayı döndürdükleri için, döndürülen değer yalnızca ilgili durum değiştiğinde güncellenir. Ancak bileşik seçiciler hesaplama gerektiren değerler döndürür ve bu hesaplamalar her durum değiştiğinde tekrar çalıştırılır.

Eğer şu an `selectTaskCount` seçicisine bir `console.log` eklersek, bu seçicinin çok sık çalıştığını gözlemleyebiliriz. Çünkü `selectTaskCount`, Redux durumunda görevlerin dizisinden bağımsız olarak filtre durumu değiştiğinde bile aktif ve tamamlanmış görevlerin sayısını yeniden hesaplar.

```
// src/redux/selectors.js

export const selectTaskCount = state => {
  const tasks = selectTasks(state);

  console.log("Calculating task count");

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
};
```

Seçici koduna `console.log` ekleyip, ardından geliştirici araçlarında `Console`sekmesini açarak filtre değerini değiştirin. Bu durumda, görev dizisi değişmemişken görev sayısının hesaplanmasıyla ilgili bir mesaj göreceksiniz. Aynı durum `selectVisibleTasks` seçicisi için de geçerlidir.

Seçicinin, bir referans türü döndürmesi veya bazı hesaplamalar yapması durumunda, bu hesaplamalar yalnızca seçicide kullanılan durum parçaları değiştiğinde tetiklenmeli ve optimize edilmelidir.

# **createSelector Fonksiyonu**

Seçicileri optimize etmek için **memoizasyon** adı verilen bir süreç kullanılır. Memoizasyon - fonksiyonun sonuçlarını saklayarak tekrar hesaplamaları önlemeyi amaçlar.

Bunu yapmak için `createSelector` fonksiyonu kullanılır. Bu fonksiyon, bir dizi giriş seçici ve bir dönüştürücü fonksiyon kabul eder. Dönüştürücü fonksiyon, giriş seçicilerinin sonuçlarını kullanarak hesaplama yapar.

```
import { createSelector } from "@reduxjs/toolkit";

const selector = createSelector(
  // Giriş seçicileri dizisi
  [inputSelector1, inputSelector2, inputSelector3],
  // Dönüştürücü işlevi
  (result1, result2, result3) => {
    // Hesaplamaları gerçekleştirin ve sonucu döndürün
  }
);
```

- Giriş seçiciler basit ya da bileşik olabilir ve hatta memoize edilmiş seçiciler de olabilir.
- Giriş seçicilerinin sonuçları, sıralandıkları sırayla dönüştürücü fonksiyona argüman olarak iletilir.
- Yeniden hesaplamalar yalnızca bir parametrenin değeri değiştiğinde yapılır, aksi takdirde önceki hesaplama sonucu döndürülür.

`createSelector` kullanarak, yalnızca görev listesine bağımlı olan `selectTaskCount` seçicisini memoize edelim. Bu seçici sadece `selectTasks` giriş seçicisine bağlıdır, bu nedenle tek bir giriş seçici kullanacağız.

```
// Diğer seçiciler

export const selectTaskCount = createSelector([selectTasks], tasks => {
  console.log("Calculating task count. Now memoized!");

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});

```

Tarayıcı geliştirici araçlarındaki `Console` sekmesinde, filtreyi değiştirerek sonucu gözlemleyin - artık görev sayısı hesaplanmıyor. Hesaplamalar yalnızca görev dizisi değiştiğinde çalıştırılıyor.

Aynı işlemi, `selectVisibleTasks` seçicisi için de yapabiliriz. Bu seçici, görev listesini ve filtreyi temel alarak çalışır, bu nedenle `selectTasks` ve `selectStatusFilter` giriş seçicilerini kullanarak memoize edeceğiz.

```
// src/redux/selectors.js

import { createSelector } from "@reduxjs/toolkit";

// Diğer seçiciler

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.log("Calculating visible tasks. Now memoized!");

    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);
```

[https://stackblitz.com/edit/vitejs-vite-4k6aotmt?file=src%2Fredux%2Fselectors.js](https://stackblitz.com/edit/vitejs-vite-4k6aotmt?file=src%2Fredux%2Fselectors.js)