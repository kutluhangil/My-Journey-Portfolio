# Arayüzü güncelleme

Kullanıcıların bir dizisini almak ve arayüzde görüntülemek için [**JSONPlaceholder API**](https://jsonplaceholder.typicode.com/) ile çalışmaya devam edelim.

Böyle bir HTML ile bir örneğe göz atalım:

```
<button type="button" class="btn">Fetch users</button>
<ul class="user-list"></ul>
```

**Fetch users** düğmesine tıkladığınızda, zaten aşina olduğumuz `fetch` yöntemini kullanarak bir HTTP isteği yürütürüz.

```
const fetchUsersBtn = document.querySelector(".btn");

fetchUsersBtn.addEventListener("click", () => {
  fetch("<https://jsonplaceholder.typicode.com/users>")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((users) => {
			//  Data from backend
			console.log(users);
		})
    .catch((error) => console.log(error));
});
```

İkinci `then` bloğunda, arka uçtan gelen yanıt verilerine erişim elde ederiz. Burada, arayüzü güncellemek, HTML işaretlemesi oluşturmak ve mevcut bir öğede DOM'a eklemek için bu verileri kullanabilirsiniz.

HTML işaretlemesi oluşturmak için, `createElement` veya `insertAdjacentHTML` gibi herhangi bir uygun yöntemi kullanabilirsiniz. Standart tekniklerden birini ele alalım.

- Bir dizi nesne üzerinde `map` yöntemini kullanarak yineleme yaparız
- Her yinelemede, koleksiyonun bir öğesi için HTML biçimlendirmesini döndürüyoruz
- Elde edilen dizgi dizisi `join("")` yöntemi kullanılarak tek bir dizgiye birleştirilir
- `insertAdjacentHTML` yöntemini kullanarak DOM'a HTML biçimlendirmesi içeren bir dize ekleyin

```
const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetch("<https://jsonplaceholder.typicode.com/users>")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((users) => {
      const markup = users.map((user) => {
				return `<li>
	          <p><b>Name</b>: ${user.name}</p>
	          <p><b>Email</b>: ${user.email}</p>
	          <p><b>Company</b>: ${user.company.name}</p>
	        </li>`;
        })
        .join("");

			userList.insertAdjacentHTML("beforeend", markup);
    })
    .catch((error) => console.log(error));
});
```

Kodun canlı bir örneğini analiz edin. Daha okunabilir hale getirmek için kodu nasıl yeniden düzenlediğimize dikkat edin.

- İstek kodunu, HTTP isteğini yürüten ve sonucu döndüren `fetchUsers()`fonksiyonuna taşıdık.
- Tıklama olayı işleyicisinde bu işlevi çağırdık ve çağrının sonucuna `then()` ve `catch()` yöntemlerinden oluşan bir zincir ekledik.
- HTML işaretlemesi oluşturma ve ekleme kodunu, bir kullanıcı dizisi bekleyen `renderUsers(users)` işlevine taşıdık.

---

## **Bu örnek ne anlatıyor?**

Amaç şu:

👉 **Butona tıklanınca**

- Sunucudan kullanıcıları al
- Gelen veriye göre **HTML oluştur**
- Oluşturulan HTML’i **sayfaya ekle**

Yani: **Backend → JS → DOM (arayüz)** akışı.

---

## **HTML tarafı (arayüz)**

```
<button type="button" class="btn">Fetch users</button>
<ul class="user-list"></ul>
```

- **Buton** → isteği başlatır
- **ul.user-list** → kullanıcılar buraya eklenecek

---

## **1️⃣ Butona tıklamayı dinleme**

```
const fetchUsersBtn = document.querySelector(".btn");

fetchUsersBtn.addEventListener("click", () => {
  // fetch burada çalışır
});
```

👉 Kullanıcı tıklayana kadar **hiçbir şey olmaz**

---

## **2️⃣ fetch ile kullanıcıları alma**

```
fetch("https://jsonplaceholder.typicode.com/users")
```

- Sunucuya **GET isteği** atılır
- Kullanıcı listesi istenir

---

## **3️⃣ Sunucu cevabını kontrol etme**

```
.then(response => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
})
```

Bu kısım şunu yapar:

- ❌ Hatalı cevap geldiyse → hata fırlat
- ✅ Doğruysa → JSON verisine çevir

---

## **4️⃣ Gelen veriyi (users) kullanma**

```
.then(users => {
  console.log(users);
})
```

👉 users burada **kullanıcı nesnelerinden oluşan bir dizi**

Örnek:

```
[
  { name: "Leanne", email: "...", company: {...} },
  ...
]
```

---

## **5️⃣ HTML’i dinamik oluşturma (en önemli kısım)**

```
const markup = users
  .map(user => {
    return `<li>
      <p><b>Name</b>: ${user.name}</p>
      <p><b>Email</b>: ${user.email}</p>
      <p><b>Company</b>: ${user.company.name}</p>
    </li>`;
  })
  .join("");
```

### **Burada ne oluyor?**

1. users.map() → her kullanıcı için HTML üretir
2. Sonuç → **HTML string dizisi**
3. .join("") → tek bir büyük HTML string’i yapar

---

## **6️⃣ HTML’i DOM’a ekleme**

```
userList.insertAdjacentHTML("beforeend", markup);
```

👉 Oluşturulan HTML:

- Sayfadaki <ul> içine eklenir
- Arayüz **anında güncellenir**

---

## **7️⃣ Hata yakalama**

```
.catch(error => console.log(error));
```

- İnternet yoksa
- URL yanlışsa
- Sunucu hata verirse

👉 burası çalışır

---

## **🔁 Kodun daha temiz hale getirilmesi**

Son bölümde anlatılan **refactor (yeniden düzenleme)** fikri:

### **❌ Her şeyi tek yerde yapmak**

- Okunması zor
- Bakımı zor

### **✅ Görevleri ayırmak**

### **1️⃣ Veriyi alan fonksiyon**

```
function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());
}
```

### **2️⃣ Arayüzü çizen fonksiyon**

```
function renderUsers(users) {
  const markup = users.map(...).join("");
  userList.insertAdjacentHTML("beforeend", markup);
}
```

### **3️⃣ Olay dinleyici**

```
fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then(renderUsers)
    .catch(console.log);
});
```

---

## **🧠 Kısa özet**

- **fetch** → veriyi alır
- **then** → veriyi işler
- **map + join** → HTML üretir
- **insertAdjacentHTML** → DOM’u günceller
- **Fonksiyonlara bölmek** → kodu temiz ve okunur yapar

---