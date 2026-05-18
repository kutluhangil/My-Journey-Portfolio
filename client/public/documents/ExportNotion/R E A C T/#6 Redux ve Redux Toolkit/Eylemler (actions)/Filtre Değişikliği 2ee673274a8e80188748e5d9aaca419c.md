# Filtre Değişikliği

`StatusFilter` bileşenindeki butonlara tıklandığında, yeni bir değer göndererek filtre değiştirme eylemi çağrılır.

```
// src/components/StatusFilter/StatusFilter.jsx

// 1. Hook içe aktarıyoruz
import { useSelector, useDispatch } from "react-redux";
// 2. Eylem fabrikasını içe aktar
import { setStatusFilter } from "../../redux/actions";

export const StatusFilter = () => {
  // 3. Eylem gönderme fonksiyonuna olan referansı al
  const dispatch = useDispatch();
	const filter = useSelector((state) => state.filters.status);

  // 4. Eylem fabrikasını çağır ve filtre değerini geçir
  // 5. Sonucu gönder - filtre değiştirme eylemi
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div>
      <button onClick={() => handleFilterChange("all")}>
        All
      </button>
      <button onClick={() => handleFilterChange("active")}>
        Active
      </button>
      <button onClick={() => handleFilterChange("completed")}>
        Completed
      </button>
    </div>
  );
};
```

Filtre butonlarına tıklandığında, Redux DevTools’a gönderilen filtre değiştirme eylemi eklenir. Üzerine tıklayıp detaylı bilgi görüntülenebilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/7956d532-e9da-4ec7-8e43-90f153d27154image%20-%202024-10-15T135223.454.png)

Bir sonraki adım, Redux durumunu güncelleme mantığını reducer fonksiyonları ile eklemektir.