# Görev Oluşturma

`TaskForm` bileşeninde form gönderildiğinde, yeni bir görev nesnesini `addTask` eylemi ile göndermek gerekmektedir; bu nesne `id`, `text` ve `completed` özelliklerini içermelidir.

```
// src/components/TaskForm/TaskForm.jsx

// 1. Hook içe aktarıyoruz
import { useDispatch } from "react-redux";
// 2. Eylem fabrikasını içe aktar
import { addTask } from "../../redux/actions";

export const TaskForm = () => {
  // 3. Eylem gönderme fonksiyonuna olan referansı al
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // 4. Eylem fabrikasını çağır ve payload için verileri geçir
    // 5. Sonucu gönder - görev oluşturma eylemi
    dispatch(addTask({
	    id: crypto.randomUUID(),
	    completed: false,
	    text: form.elements.text.value
	  }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <button type="submit">Add task</button>
    </form>
  );
};
```

```
id özelliği, gelecekte backend tarafından atanacak olsa da, şu anda bunu kod içinde yapıyoruz. Bunun için tarayıcıda yerleşik olan crypto.randomUUID yöntemini kullanıyoruz.

```

Form gönderildiğinde, sol taraftaki Redux DevTools eylem listesine gönderilen görev oluşturma eylemi eklenir. Üzerine tıklayıp sağ kısımda `Actions` sekmesini seçtiğinizde detaylı bilgi görüntülenebilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/51ee5405-3d65-4a30-9c3c-a001fa05d676image%20-%202024-10-15T135448.205.png)