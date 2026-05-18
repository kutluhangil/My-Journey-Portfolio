# Görev Planlayıcı

Görev planlayıcı uygulamamızı backend ile çalışacak şekilde güncelleyelim. Bunun için [`mockapi.io`](https://mockapi.io/) servisini kullanacağız. Bu servis, basit bir backend ve veri tabanı oluşturmak için görsel bir arayüz sunar. Bu sayede CRUD (Oluşturma, Okuma, Güncelleme, Silme) işlemlerini gerçekleştirebiliriz.

Aşağıda, React bileşenleri ve temel Redux mantığı ile başlatılmış olan kodu bulabilirsiniz. Öğrendiklerinizi kullanarak bu kodu geliştirebilirsiniz.

[https://stackblitz.com/edit/vitejs-vite-hhhcyy1m?file=src%2Fcomponents%2FApp.jsx](https://stackblitz.com/edit/vitejs-vite-hhhcyy1m?file=src%2Fcomponents%2FApp.jsx)

# **Seçiciler**

Durum şeklimiz değiştiği için, seçici dosyasını güncellememiz gerekiyor. Aşağıdaki gibi düzenleme yapabilirsiniz:

```
// src/redux/selectors.js

export const getTasks = state => state.tasks.items;

export const getIsLoading = state => state.tasks.isLoading;

export const getError = state => state.tasks.error;

export const getStatusFilter = state => state.filters.status;
```

# **Görevleri Okuma**

Görevlerin dizisini okuma işlemi ve reducer'lar zaten mevcut. `App` bileşenini, montajı sırasında görev listesini getiren işlemi başlatacak şekilde güncelleyeceğiz.

```
// src/components/App.jsx

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "redux/operations";
// Bileşenleri içe aktarma

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
```

`App` bileşeni monte edildikten ve istek tamamlandıktan sonra, Redux durumundan görev dizisini almak için seçicileri kullanan - `TaskList` bileşeni arayüzde gösterilecektir.

# **İstek Göstergesi**

Görev listesinin üzerinde istek göstergesinin görüntülenmesini ekleyelim.

```
// src/components/App.jsx

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";
// Bileşenleri içe aktarma

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};
```

[**Görev Ekleme**](G%C3%B6rev%20Planlay%C4%B1c%C4%B1/G%C3%B6rev%20Ekleme%202f0673274a8e80bcafc6c0a5dcb0954e.md)

[**Görev Silme**](G%C3%B6rev%20Planlay%C4%B1c%C4%B1/G%C3%B6rev%20Silme%202f0673274a8e80668429cdac9d97c1d1.md)

[**Görev Durumunu Değiştirme**](G%C3%B6rev%20Planlay%C4%B1c%C4%B1/G%C3%B6rev%20Durumunu%20De%C4%9Fi%C5%9Ftirme%202f0673274a8e80d29765efe49a4bcb5f.md)