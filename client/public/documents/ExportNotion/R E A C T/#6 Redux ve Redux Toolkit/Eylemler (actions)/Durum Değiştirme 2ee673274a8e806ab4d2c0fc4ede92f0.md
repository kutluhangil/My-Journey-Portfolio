# Durum Değiştirme

`Task` bileşeninde onay kutusuna tıklandığında, görev kimliğini geçerek görev durumunu değiştirme eylemi göndermek gerekmektedir. Bu veri, görev nesnesinin diziden bulunup, özelliğinin tersine çevrilmesi için yeterli olacaktır.

```
// src/components/Task/Task.jsx

// 1. Hook içe aktarıyoruz
import { useDispatch } from "react-redux";
// 2. Eylem fabrikasını içe aktar
import { deleteTask, toggleCompleted } from "../../redux/actions";

export const Task = ({ task }) => {
  // 3. Eylem gönderme fonksiyonuna olan referansı al
  const dispatch = useDispatch();

  const handleDelete = () => {
	  dispatch(deleteTask(task.id))
  };

  // 4. Eylem fabrikasını çağır ve görev kimliğini geçir
  // 5. Sonucu gönder — görev durumunu değiştirme eylemi
  const handleToggle = () => {
	  dispatch(toggleCompleted(task.id))
  };

  return (
    <div>
      <input
	      type="checkbox"
		    onChange={handleToggle}
		    checked={task.completed}
		  />
      <p>{task.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
```

Onay kutusuna tıkladığınızda, Redux DevTools’a gönderilen görev durum değiştirme eylemi eklenir. Üzerine tıklayıp detaylı bilgi görüntülenebilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/215ed923-7c24-4c5a-aa5d-67c4985da9eaimage%20-%202024-10-15T135229.742.png)

```
Task bileşeninde ekstra prop'lar yoktur, örneğin silme ve durum değiştirme yöntemleri yoktur; bu, React durumu kullanıldığında olması gerekendi. Bu durum, görev listesi bileşenini daha basit hale getirir; gereksiz prop'ları alıp görev bileşenine iletmesine gerek kalmaz. Redux kullanarak, herhangi bir bileşen doğrudan eylem gönderme fonksiyonuna erişebilir.
```