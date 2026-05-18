# Kaynağa giden yol

Backend istekleri, işlemin gerçekleştirildiği kaynağa giden yolu içermelidir. Kullanılabilir yollar (uç noktalar, kaynaklar) arka uç belgelerinde açıklanmıştır.

**Web hizmetleri ve API'ler bağlamında uç noktalar** belirli sunucu işlevlerine veya kaynaklarına erişmek için kullanılabilecek belirli URL'lerdir. İstemci ve sunucu arasındaki etkileşim için giriş noktaları olarak hizmet ederler ve veri almanıza, göndermenize, güncellemenize veya silmenize olanak tanırlar.

Şimdi [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) örneğine bakalım. Bu, hızlı prototipleme için birkaç farklı hayali veri koleksiyonu sağlayan genel bir REST API'sidir.

`<https://jsonplaceholder.typicode.com/users>`

Bu yol (uç nokta), daha önce hiç görmemiş olsak bile açıkça bir kaynağa işaret eder. Bu URL yolu hiyerarşik ve açıklayıcıdır. REST API'ye `/users' kaynağını almak için bir istekte bulunuyoruz.

Bu yol aşağıdaki bölümlerden oluşur:

- `https://jsonplaceholder.typicode.com` temel URL'dir, API'ye giriş noktasıdır.
- `/users` - erişilecek kaynak.

Bu yolu alıp tarayıcınızın adres çubuğuna yapıştırın ve takip edin.

Tarayıcı HTTP isteğini yürütecektir, ancak yanıt bir HTML dosyası yerine, sekmede düz metin olarak görüntülenecek verileri içeren JSON olacaktır (şemayı inceleyin).

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/99a100a5-788e-4306-ae94-b049508d8d67Frame_771533.jpg)

---

## **“Kaynağa giden yol” ne demek?**

Bir **backend (sunucu) isteği** yaparken, **sunucuda hangi veriyi istediğimizi** açıkça belirtmemiz gerekir.

Bunu da bir **URL (adres)** ile yaparız.

Bu adrese **endpoint (uç nokta)** denir.

---

## **Endpoint (uç nokta) nedir?**

👉 **Endpoint**, sunucuda belirli bir **kaynağa** veya **işleme** erişmek için kullanılan URL’dir.

Şunları yapmamızı sağlar:

- Veri almak (GET)
- Veri göndermek (POST)
- Veri güncellemek (PUT / PATCH)
- Veri silmek (DELETE)

---

## **Örnek: JSONPlaceholder API**

```
https://jsonplaceholder.typicode.com/users
```

Bu adresi parçalayalım:

### **1️⃣ Temel URL (API girişi)**

```
https://jsonplaceholder.typicode.com
```

➡️ Sunucunun kendisi

➡️ API’ye giriş kapısı

### **2️⃣ Kaynak (resource)**

```
/users
```

➡️ “Kullanıcılar” verisi

➡️ Sunucuya şunu söylüyorsun:

> “Bana kullanıcıları ver”
> 

---

## **Neden bu kadar net?**

REST API’lerde URL’ler **okunabilir ve anlamlı** olacak şekilde tasarlanır.

| **URL** | **Anlamı** |
| --- | --- |
| /users | Tüm kullanıcılar |
| /posts | Tüm gönderiler |
| /users/5 | ID’si 5 olan kullanıcı |

Daha görmeden bile ne istediğini anlayabilirsin 👍

---

## **Tarayıcıda açınca ne olur?**

Bu adresi tarayıcıya yapıştırırsan:

- Tarayıcı **HTTP isteği** gönderir
- Sunucu **HTML değil**
- **JSON formatında veri** döndürür

Yani:

```
[
  { "id": 1, "name": "Leanne Graham", ... },
  { "id": 2, "name": "Ervin Howell", ... }
]
```

Bu yüzden sayfa “garip yazılar” gibi görünür 😄

Ama bu **frontend veya JS kodu için mükemmel veridir**.

---