# Alt Sınıfın Kurucusu

Alt sınıfın yapıcısında (constructor), `super(args)` adlı özel fonksiyonun çağrılması gerekir. Bu fonksiyon, üst sınıfın yapıcısına (constructor) bir referanstır.

```
Aksi takdirde, alt sınıfın yapıcısında this ifadesine erişilmeye çalışıldığında bir hata oluşur.

```

Üst sınıfın yapıcısını çağırırken, özelliklerin başlatılması için gerekli argümanlar iletilmelidir.

```
class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email); // Üst sınıfın User yapıcısını çağırın
    this.posts = posts;
  }
}

const editor = new ContentEditor({
	email: "mango@mail.com",
	posts: []
});
console.log(editor); // { #email: "mango@mail.com", posts: [] }
console.log(editor.email); // "mango@mail.com"
```

Örnek:

Admin sınıfına, `email` ve `access` olmak üzere iki özelliği alan bir ayar nesnesi geçiren bir yapıcı metod ekleyin. Bu metot, yapıcı çağrıldığında `access` adlı genel özelliği ayarlamalıdır.

Admin sınıfının kullanımını göstermek için sınıf bildirisinin altına bir örnek başlatma eklendi.

- `Admin` sınıfı tanımlanmalıdır.
- `Admin` sınıfı `User` sınıfından türetilmelidir.
- `Admin` sınıfı, `role` adlı genel bir statik özellik içermelidir.
- `Admin` sınıfı, `{email, access}` nesnesi şeklinde bir parametre ile `constructor`metodunu içermelidir.
- `Admin` sınıfında `email` özelliği için yapıcıda üst sınıfın yapıcısına başvurulmalıdır.
- `Admin.role.BASIC` çağrısı `"basic"` dizesini döndürmelidir.
- `Admin.role.SUPERUSER` çağrısı `"superuser"` dizesini döndürmelidir.

Aşağıda, **tüm maddeleri eksiksiz karşılayan ve verilen örnekle birebir çalışan doğru çözüm** yer alıyor ✔️

(Ayrıca User sınıfındaki getter/setter hatası da düzeltilmiştir ❗)

---

## **✅ Doğru ve Tam Çözüm**

```
class User {
  constructor(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, access }) {
    super(email);       // 👈 üst sınıfın constructor’ı
    this.access = access;
  }
}
```

---

## **🧪 Kullanım Örneği (Görevde Verildiği Gibi)**

```
const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email);  // "mango@mail.com"
console.log(mango.access); // "superuser"
```

---

## **📌 Şartların Tek Tek Karşılanması**

| **Gereksinim** | **Durum** |
| --- | --- |
| Admin sınıfı tanımlı | ✅ |
| User’dan türetilmiş | ✅ extends User |
| static role var | ✅ |
| role.BASIC | ✅ "basic" |
| role.SUPERUSER | ✅ "superuser" |
| constructor({ email, access }) | ✅ |
| super(email) çağrıldı | ✅ |
| access public property | ✅ |

---

## **🔍 Neden**

## **super(email)**

## **şart?**

```
class Admin extends User {
  constructor({ email }) {
    super(email); // ❗ zorunlu
  }
}
```

- extends varsa
- constructor içinde **ilk satır super() olmak zorunda**
- Aksi halde → ❌ ReferenceError

---

## **🧠 Mini Ezber (Notluk)**

```
extends → kalıtım
super() → üst sınıf constructor
static → sınıfa ait
```

---