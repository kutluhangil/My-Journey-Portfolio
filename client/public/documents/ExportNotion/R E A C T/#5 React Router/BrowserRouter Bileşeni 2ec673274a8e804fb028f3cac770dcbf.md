# BrowserRouter Bileşeni

Tarayıcı tabanlı yönlendirme için bir kontrol merkezi işlevi gören **BrowserRouter**bileşeni, tarayıcı geçmişiyle etkileşime giren tüm mantığı soyutlar. Bu bileşen, kullanıcının arayüzünü URL ile senkronize etmek amacıyla bir yönlendirici ve gezinme geçmişi nesnesi oluşturur. React bağlamını kullanarak, mevcut gezinme geçmişi durumunu tüm alt bileşenlere aktarır. Uygulamanın tamamını `<BrowserRouter>` bileşeni ile sarmak, yönlendirme işlevselliğini sağlamak için yeterlidir.

```
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```